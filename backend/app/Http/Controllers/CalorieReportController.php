<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CalorieReport;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Stevebauman\Location\Facades\Location;
use App\Http\Requests\StoreCalorieReportRequest;

class CalorieReportController extends Controller
{
    // anyone (with or without token) can create a report; if token present user_id saved
    public function store(Request $request)
    {
        $request->validate([
            'report_name' => 'required|string|max:100',
            'report_slug' => 'required|string|max:100',
            'input_data' => 'required|array',
            'calculated_score' => 'nullable|numeric',
            'interpretation' => 'nullable|string|max:100',
        ]);

        $ip = $request->ip();
        $location = Location::get($ip);

        CalorieReport::create([
            'report_name' => $request->report_name,
            'report_slug' => $request->report_slug,
            'input_data' => $request->input_data,
            'calculated_score' => $request->calculated_score,
            'interpretation' => $request->interpretation,
            'ip_address' => $ip,
            'country' => $location->countryName ?? null,
            'city' => $location->cityName ?? null,
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'success' => true
        ], 200);

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
