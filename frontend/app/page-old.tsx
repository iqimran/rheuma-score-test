"use client";

import React, { useState } from "react";

export default function CalorieCalculator() {
  const [gender, setGender] = useState("");
  const [heightFt, setHeightFt] = useState("0");
  const [heightIn, setHeightIn] = useState("0");
  const [age, setAge] = useState("0");
  const [weight, setWeight] = useState("0");
  const [activity, setActivity] = useState("1.2");
  const [result, setResult] = useState("0-0");

  const calculateCalories = () => {
    const h = parseInt(heightFt) * 12 + parseInt(heightIn);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (!gender || h === 0 || w === 0 || a === 0) {
      setResult("0-0");
      return;
    }

    const cm = h * 2.54;
    const kg = w * 1;

    const bmr =
      gender === "male"
        ? 10 * kg + 6.25 * cm - 5 * a + 5
        : 10 * kg + 6.25 * cm - 5 * a - 161;

    const daily = Math.round(bmr * parseFloat(activity));

    setResult(`${daily}-${daily}`);
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB] flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-700 p-6 rounded-xl text-center text-white text-2xl font-semibold mb-6">
          Calorie Calculator
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Section */}
          <div className="space-y-5">

            {/* Gender */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setGender("male")}
                className={`p-5 rounded-lg text-center border ${
                  gender === "male" ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                <div className="text-4xl">👨</div>
                <div>Male</div>
              </button>

              <button
                onClick={() => setGender("female")}
                className={`p-5 rounded-lg text-center border ${
                  gender === "female" ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                <div className="text-4xl">👩</div>
                <div>Female</div>
              </button>
            </div>

            {/* Height */}
            <div className="p-5 bg-gray-100 rounded-lg">
              <label className="block text-sm font-medium mb-1">Height</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="w-20 p-2 rounded border text-center"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  min="0"
                />
                <span className="text-xl mt-2">'</span>

                <input
                  type="number"
                  className="w-20 p-2 rounded border text-center"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  min="0"
                />
                <span className="text-xl mt-2">"</span>
              </div>
            </div>

            {/* Age / Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gray-100 rounded-lg">
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  className="w-full p-3 rounded border text-center"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="p-5 bg-gray-100 rounded-lg">
                <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                <input
                  type="number"
                  className="w-full p-3 rounded border text-center"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            {/* Activity Level */}
            <div className="p-5 bg-gray-100 rounded-lg">
              <label className="block text-sm font-medium mb-2">
                Activity Level
              </label>
              <select
                className="w-full p-3 rounded border"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              >
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Light exercise (1–3 days/week)</option>
                <option value="1.55">Moderate exercise (3–5 days/week)</option>
                <option value="1.725">Heavy exercise (6–7 days/week)</option>
                <option value="1.9">Very heavy exercise / physical job</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateCalories}
              className="w-full bg-blue-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition"
            >
              Calculate
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 rounded-xl p-10 flex flex-col justify-center items-center text-center">
            <p className="text-lg mb-3">Your estimated daily calorie needs</p>

            <div className="bg-blue-300 text-blue-900 rounded-xl px-10 py-6 text-4xl font-bold">
              {result}
            </div>

            <p className="mt-3 text-gray-600 text-sm">calories per day</p>
          </div>

        </div>
      </div>
    </div>
  );
}
