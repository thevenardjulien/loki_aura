<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Company;
use App\Models\Position;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        $validatedData = Validator::make($input, [
            'title' => ['required', 'string', 'max:255'],
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['required', 'string', 'max:255', 'same:password'],
            'phone' => ['string', 'max:255', 'nullable'],
            'phone_pro' => ['string', 'max:255', 'nullable'],
            'company' => ['string', 'min:3', 'max:255'],
            'position' => ['string', 'min:3', 'max:255'],
        ])->validate();



        $company = Company::firstOrCreate(
            ['name' => $validatedData['company']],
        );

        $position = Position::firstOrCreate(
            ['name' => $validatedData['position']],
        );

        $user = User::create([
            'title' => $validatedData['title'],
            'firstname' => $validatedData['firstname'],
            'lastname' => $validatedData['lastname'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'phone' => $validatedData['phone'],
            'phone_pro' => $validatedData['phone_pro'],
            'company_id' => $company->id,
            'position_id' => $position->id,
        ]);

        return $user;
    }
}
