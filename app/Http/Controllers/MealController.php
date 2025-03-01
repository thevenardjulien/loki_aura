<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index()
    {
        $users = User::All();
        $meals = Meal::orderBy('date', 'desc')->get();
        $mealsPaginated = Meal::paginate(5);
        return Inertia::render('Dashboard', ['users' => $users, 'meals' => $meals, 'mealsPaginated' => $mealsPaginated]);
    }

    public function repasIndex()
    {
        $meals = Meal::with('users')->orderBy('date', 'DESC')->paginate(5);
        return Inertia::render('Repas/Index', ['meals' => $meals]);
    }

    public function repasCreate()
    {
        $owner = Auth::user();
        return Inertia::render('Repas/Create', ['owner' => $owner]);
    }

    public function repasStore(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'price' => ['required', 'integer', 'min:0'],
            'date' => ['required', 'date'],
            'description' => ['required', 'string', 'max:255'],
            'thumbnail' => ['nullable', 'image', 'mimes: jpg, jpeg, png, webp', 'max:2048'],
            'status' => ['required', 'string', 'max:255'],
            'owner' => ['required', 'integer'],
            'max_capacity' => ['required', 'integer', 'min:0'],
            'table_quantity' => ['required', 'integer', 'min:0'],
            'seats_per_table' => ['required', 'integer', 'min:0'],
        ]);

        $validatedData['status'] = 'à venir';
        $validatedData['date'] = Carbon::parse($validatedData['date'])->format('Y-m-d H:i:s');

        dd($validatedData);

        Meal::create($validatedData);

        return redirect()->route('repas.index')->with([
            'message' => 'Repas créé avec succès !',
            'type' => 'success',
        ]);
    }
}
