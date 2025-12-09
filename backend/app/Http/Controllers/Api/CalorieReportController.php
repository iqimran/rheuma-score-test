<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCalorieReportRequest;
use Illuminate\Http\Request;
use App\Models\CalorieReport;
use Illuminate\Support\Facades\Auth;

class CalorieReportController extends Controller
{
    // anyone (with or without token) can create a report; if token present user_id saved
    public function store(StoreCalorieReportRequest $request)
    {
        $data = $request->validated();

        // normalize weight to kg
        $weight = (float) $data['weight'];
        if ($data['weight_unit'] === 'lb') {
            $weightKg = $weight * 0.45359237;
        } else {
            $weightKg = $weight;
        }

        // normalize height to cm
        if ($data['height_unit'] === 'cm') {
            $heightCm = (int) round($data['height_cm']);
            $heightDisplay = "{$heightCm} cm";
        } else {
            $ft = intval($data['height_ft'] ?? 0);
            $in = intval($data['height_in'] ?? 0);
            $heightCm = (int) round(($ft * 12 + $in) * 2.54);
            $heightDisplay = "{$ft}' {$in}\"";
        }

        $age = (int) $data['age'];
        $gender = $data['gender'] ?? null;

        // BMR using Mifflin-St Jeor
        if ($gender === 'male') {
            $bmr = 10 * $weightKg + 6.25 * $heightCm - 5 * $age + 5;
        } else {
            // female or null -> use female constant if female else default to average female
            $bmr = 10 * $weightKg + 6.25 * $heightCm - 5 * $age - 161;
        }

        // activity multipliers
        $multipliers = [
            'sedentary' => 1.2,
            'lightly_active' => 1.375,
            'moderately_active' => 1.55,
            'very_active' => 1.725,
            'extra_active' => 1.9,
        ];

        $breakdown = [];
        foreach ($multipliers as $key => $mult) {
            $breakdown[$key] = (int) round($bmr * $mult);
        }

        $result = (int) round($bmr * $multipliers[$data['activity_level']]);

        $report = CalorieReport::create([
            'user_id' => Auth::check() ? Auth::id() : null,
            'gender' => $gender,
            'age' => $age,
            'weight_kg' => round($weightKg, 2),
            'height_cm' => $heightCm,
            'height_display' => $heightDisplay,
            'weight_unit' => $data['weight_unit'],
            'height_unit' => $data['height_unit'],
            'activity_level' => $data['activity_level'],
            'result_calories' => $result,
            'breakdown' => $breakdown,
            'payload' => $data,
        ]);

        return response()->json([
            'success' => true,
            'report' => $report,
        ], 201);
    }

    // Admin-only: list all reports
    public function index(Request $request)
    {
        $user = $request->user();
        if (!$user || !$user->is_admin) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $reports = CalorieReport::with('user')->latest()->paginate(30);
        return response()->json($reports);
    }

    // Admin-only: show specific
    public function show(Request $request, CalorieReport $calorieReport)
    {
        $user = $request->user();
        if (!$user || !$user->is_admin) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        return response()->json($calorieReport->load('user'));
    }

    // Admin-only: delete
    public function destroy(Request $request, CalorieReport $calorieReport)
    {
        $user = $request->user();
        if (!$user || !$user->is_admin) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $calorieReport->delete();
        return response()->json(['success' => true]);
    }
}
