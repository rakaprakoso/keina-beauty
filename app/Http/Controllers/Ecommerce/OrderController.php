<?php

namespace App\Http\Controllers\eCommerce;

use App\Models\Product;
use App\Models\Admin;
use App\Models\Cart;
use App\Models\CartDetail;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Payment;
use App\Models\Commission;
use Illuminate\Http\Request;
// use App\Http\Controllers\GlobalDataController;
use Auth;
use Response;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
// use App\Traits\helper;

class OrderController extends Controller
{
    // use helper;

    private function printShipping($id){
        $baseUrl = "https://api.rajaongkir.com/starter/city?id=".$id;

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $baseUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "key: d534c6602dfaa12be7ad3b514305eb0a"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
             $data = json_decode(trim($response), true)['rajaongkir']['results'];
             return $data['province'].' - '.$data['type'].' '.$data['city_name'];
             // return json_encode($response);
            // return response::json($response);
        }
    }

    public function checkout(Request $request){
        // return $this->printShipping($request->city_id);
        // return $request->all();
        //$customer = Customer::where('email', $request->email)->first();
        //return $request;


        // if (!Auth::guard('user')->check()) {
        //     //MAKA REDIRECT DAN TAMPILKAN INSTRUKSI UNTUK LOGIN
        //     return redirect()->back()->with(['error' => 'Silahkan Login Terlebih Dahulu']);
        // }

        $data['price']['normal_price']=0;
        $data['price']['discount_price']=0;
        $data['price']['net_price']=0;
        $data['total_qty']=0;
        /*$data['cart'] = Cart::where('user_id',Auth::guard('user')->user()->id)->first();
        $data['cart'] = $data['cart']!=null ? $data['cart']->cart_detail : null;
        if ($data['cart']!=null) {
            foreach ($data['cart'] as $key => $value) {
                if ($value->selected==1) {
                    $data['price']['normal_price']+=$value->product->price*$value->qty;
                    //$data['price']['discount_price']+=$value->product->price*$value->qty;
                    $data['price']['net_price']+=$value->product->price*$value->qty;
                }
            }
        }
        return $data['cart'];*/
        $discount_amount=0;
        $coupon_applied = Admin::where('sales_code',$request->coupon_code)->first();
        if ($coupon_applied!==null) {
            $discount_amount;
            if ($coupon_applied->sales_level <= 2) {
                $discount_amount=10;
            }else{
                $discount_amount=5;
            }
            //return $this->updateCartTotal($request,$discount_amount);
        }


        //SIMPAN DATA ORDER
        $order = New Order;
        // $order->user_id=Auth::guard('user')->user()->id;
        $order->order_id='KB-' . time();
        $order->order_date=Carbon::now()->toDateTimeString();
        $order->sales_id=$coupon_applied!==null ? $coupon_applied->id : null;

        //Keina Beauty
        $order->nameBuyer=$request->name;
        $order->phoneBuyer=$request->phone_number;
        $order->emailBuyer=$request->email;
        $order->addressBuyer=$request->address;
        $order->shippingMethod=$request->shipping_method;
        $order->shippingAddressBuyer= $this->printShipping($request->city_id);

        $order->save();

        //LOOPING DATA DI CARTS
        foreach ($request->product_id as $key=>$product_id) {
            //AMBIL DATA PRODUK BERDASARKAN PRODUCT_ID
            $product = Product::find($product_id);
            //SIMPAN DETAIL ORDER
            $orderDetail= New OrderDetail;
            $orderDetail->order_id= $order->id;
            $orderDetail->product_id= $product->id;
            // $orderDetail->price=$this->markupPrice($product->price);
            $orderDetail->price=$product->price;
            $orderDetail->qty=$request->qty[$key];
            $orderDetail->save();
            //$orderDetail->sales_code=$request->sales_code;

            $data['total_qty']+=$request->qty[$key];
            // $data['price']['normal_price']+=$this->markupPrice($product->price)*$request->qty[$key];
            $data['price']['normal_price']+=$product->price*$request->qty[$key];
            // $data['price']['discount_price']=$data['total_qty']*$this->shop_config['markup_price'];
            // $data['price']['net_price']= $data['price']['normal_price']-$data['price']['discount_price'];
            $data['price']['net_price']+=$product->price*$request->qty[$key];
        }

        //Commission
        // $data['parent']=[$coupon_applied->id];
        // //$data['account_id']=3;
        // $data['account_data'] = $coupon_applied;
        // $data['temp_parent_id'] = $data['account_data']->sales_parent;
        // $data['total_commission']= ($data['account_data']->sales_level_name->commission/100)*$data['price']['net_price'];
        // $data['parent_id']=[];
        // while ($data['temp_parent_id'] !== null) {
        //     $data['parent'] = Admin::where('id',$data['temp_parent_id'])->first();
        //     $data['parent_id'] = array_merge($data['parent_id'],array($data['parent']));
        //     $data['temp_parent_id'] =  $data['parent']->sales_parent;
        // }
        // if ($data['parent_id']!==null && $data['account_data']->sales_level==3) {
        //     $affiliate_commission_amount = ($data['account_data']->sales_level_name->affiliate_commission/100)*$data['total_commission'];
        //     $self_commission_amount = $data['total_commission']-$affiliate_commission_amount;
        // }else{
        //     $self_commission_amount = $data['total_commission'];
        // }
        // $self_commission = New Commission;
        // $self_commission->sales_id = $coupon_applied->id;
        // $self_commission->order_id = $order->order_id;
        // $self_commission->amount = $self_commission_amount;
        // $self_commission->type = 'self';
        // $self_commission->save();
        // if ($data['parent_id']!==null && $data['account_data']->sales_level==3) {
        //     foreach ($data['parent_id'] as $key => $value) {
        //         $affiliate_commission = New Commission;
        //         $affiliate_commission->sales_id = $value['id'];
        //         $affiliate_commission->order_id = $order->order_id;
        //         $affiliate_commission->amount = $affiliate_commission_amount/count($data['parent_id']);
        //         $affiliate_commission->type = 'affiliate';
        //         $affiliate_commission->save();
        //     }
        // }


        //return $data['parent_id'];

            //HAPUS CART DB
        // $cart= Cart::where('user_id',Auth::guard('user')->user()->id)->first();
        // CartDetail::where('cart_id',$cart->id)
        // ->whereIn('product_id',$request->product_id)->delete();


        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = 'SB-Mid-server-DoxmbQYZuh-aGP6ceJT2NsdN';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' =>  $order->order_id,
                'gross_amount' => $data['price']['net_price'],
            ),
            'customer_details' => array(
                // 'first_name' => Auth::guard('user')->user()->name,
                // 'email' => Auth::guard('user')->user()->email,
                'first_name' => $request->name,
                'email' => $request->email,
            ),
        );

        try {
            // Get Snap Payment Page URL
            $midtrans_order = \Midtrans\Snap::createTransaction($params);

            $payment = New Payment;
            $payment->order_id=$order->order_id;
            $payment->midtrans_order_id=$midtrans_order->token;
            $payment->midtrans_transaction_id=$order->order_id;
            $payment->total_price=$data['price']['net_price'];
            $payment->save();

            return redirect($midtrans_order->redirect_url);
            // Redirect to Snap Payment Page
            header('Location: ' . $paymentUrl);
        }
          catch (Exception $e) {
            return Response::json($e->getMessage());
        }
        //$snapToken = \Midtrans\Snap::getSnapToken($params);

        return $snapToken;
    }
    public function index(Request $request){
        if ($request->status_code=='200') {
            $ID = Order::where('order_id', $request->order_id)->first()->user_id;
        }else{
            $ID = Auth::guard('user')->user()->id;
        }
        $orders = Order::where('user_id', $ID)->orderBy('created_at','desc')->get();
        return view('page.eCommerce.order')->with('orders',$orders);
        return $orders;
    }
    public function notification(Request $request){
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = 'SB-Mid-server-DoxmbQYZuh-aGP6ceJT2NsdN';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $orderId = $request->order;
        $status = \Midtrans\Transaction::status($orderId);
        return Response::json($status);
        var_dump($status);
    }
    public function status(Request $request){
        \Midtrans\Config::$serverKey = 'SB-Mid-server-DoxmbQYZuh-aGP6ceJT2NsdN';
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $orderId = $request->order;
        $data['order'] = Order::where('order_id', $orderId)->first();

        $data['normal_price']=0;
        $data['discount_price']=0;
        $data['net_price']=0;
        foreach ($data['order']->order_details as $key => $value) {
            $data['normal_price']+=$value->price*$value->qty;
            $data['net_price']+=$value->price*$value->qty;
        }
        if ($data['order']->sales_id!==null) {
            $data['net_price']=$data['order']->payment->total_price;
            $data['discount_price']=$data['normal_price']-$data['net_price'];
        }

        try {
            $data['status'] = \Midtrans\Transaction::status($orderId);
        }
          catch (\Exception $e) {
            $data['link'] ="https://app.sandbox.midtrans.com/snap/v2/vtweb/".$data['order']->payment->midtrans_order_id;
            $data['status']=null;
            //return redirect($link);
            //return Response::json($e->getMessage());
        }

        return view('page.eCommerce.order_detail')
        ->with($data);
        //$order;
        //return Response::json($status);
        //var_dump($status);
    }

    public function postNotification(){

    }

    public function notificationAPI(Request $request){
        $payment = Payment::where('order_id',$request->order_id)->first();
        $payment->status=$request->transaction_status;
        $payment->save();
        return $payment;

        //return "Halo";
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = 'SB-Mid-server-4AHZynjkYAfEnyqGjOgRQ1El';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $orderId = $request->order;
        $status = \Midtrans\Transaction::status($orderId);
        return Response::json($status);
        var_dump($status);
    }
    public function postNotificationAPI(Request $request){
        $payment = Payment::where('order_id',$request->order_id)
        ->update(['status' => $request->transaction_status]);
        return $payment;
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = 'SB-Mid-server-4AHZynjkYAfEnyqGjOgRQ1El';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $orderId = $request->order;
        $status = \Midtrans\Transaction::status($orderId);
        return Response::json($status);
        var_dump($status);
    }

    public function finish(){
        echo "Order Finish";
    }


}
