@extends('layouts.app')

@section('content')
<div class="container">
    <h2 class="mb-4">Calorie Reports</h2>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Age</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Gender</th>
                <th>Activity</th>
                <th>Calories</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($reports as $r)
            <tr>
                <td>{{ $r->age }}</td>
                <td>{{ $r->weight }} kg</td>
                <td>{{ $r->height_feet }}' {{ $r->height_inches }}"</td>
                <td>{{ $r->gender }}</td>
                <td>{{ $r->activity_level }}</td>
                <td><strong>{{ $r->calculated_calories }}</strong></td>
                <td>{{ $r->created_at->format('d M Y') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
