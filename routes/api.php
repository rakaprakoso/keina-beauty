<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Ecommerce\ProductController;
use App\Http\Controllers\Ecommerce\CartController;
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\Ecommerce\OrderController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'as' => 'ajax.',
    'prefix'=>'ajax',
], function () {
    // Route::post('/dateFormat', 'AjaxController@dateFormat')->name('dateFormat');
    // Route::post('/coupon', 'AjaxController@coupon')->name('coupon');
    Route::post('/cart',[AjaxController::class,'addToCart'])->name('addToCart');
    Route::post('/updateCart', [AjaxController::class,'updateCart'])->name('updateCart');
});

Route::get('/cart',[CartController::class,'cart'])->name('listCart');
Route::post('/toCheckout',[AjaxController::class,'cartToCheckout']);

Route::post('/rajaongkir',[AjaxController::class,'rajaongkir']);

Route::post('/createOrder',[OrderController::class,'checkout']);

Route::resource('admin/product', ProductController::class);

Route::get('/payment/notification',[OrderController::class,'NotificationAPI'])->name('NotificationAPI');
Route::post('/payment/notification',[OrderController::class,'postNotificationAPI'])->name('postNotificationAPI');
Route::get('/orderStatus',[OrderController::class,'status'])->name('status');
