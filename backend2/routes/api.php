<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user/{id}', function ($id) {
    return App\User::where('id', $id)->get();
});

Route::post('/user', function (Request $request) {
  DB::table('users')->insert([
    'name' => $request->fullname,
    'email' => $request->email,
    'mobile' => $request->mobile,
    'password' => bcrypt($request->password),
    'jwt' => 'success'
  ]);

  return [];
});

Route::post('/auth/user', function (Request $request) {
  if (Auth::attempt(['email' => $request->username, 'password' => $request->password])) {
    return Auth::user();
  }

  return [];
});

Route::post('/recharge', function (Request $request) {
  DB::table('recharges')->insert([
    'type' => $request->type,
    'user' => $request->userId,
    'number' => $request->number,
    'amount' => $request->amount,
    'amountPaid' => $request->amountPayable,
    'status' => 'success'
  ]);

  return ['status' => 'success'];
});

Route::get('/history/{userId}', function ($id) {
    return DB::table('recharges')
            ->where('user', $id)
            ->get();
});
