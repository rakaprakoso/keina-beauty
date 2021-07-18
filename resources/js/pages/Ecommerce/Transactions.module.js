import React, { Component } from 'react'

const data = [0, 1, 2, 3, 5, 6];

const Cart = () => {
    return (
        <>
            <div className="heading bg-gray-200 py-14">
                <div className="page-wrapper">
                    <h1 className="text-center text-4xl font-bold">
                        CART
                    </h1>
                </div>
            </div>
            <div className="page-wrapper py-10">
                <div>
                    <div className="block overflow-x-auto mx-6">
                        <table className="w-full text-left rounded-lg">
                            <thead>
                                <tr className="text-gray-800 border border-b-0">
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
                                        <td className="px-4 py-4">
                                            <input className="inline-block mr-3" type="checkbox" name={`product-${i}`} id="" />
                                            <img className="h-10 w-10 rounded-full inline-block mr-4" src="https://keinabeauty.com/wp-content/uploads/2021/02/DSCF0891_1-600x929.jpg" alt="" />
                                            Minimalistic shop for multipurpose use
                                        </td>
                                        <td className="px-4 py-4">Rp. 200.000</td>
                                        <td className="px-4 py-4">
                                            <input type="number" name="qty" id="" />
                                        </td>
                                        <td className="px-4 py-4">
                                            Rp.400.000
                                        </td>

                                    </tr>))}

                            </tbody>
                        </table>
                        <div className="flex mt-4">
                            <div className="actions ml-auto">
                                <a className="btn btn-outline-primary" href="#">
                                    Continue Shop
                                </a>
                                <a className="btn btn-primary" href="/checkout">
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Checkout = () => {
    const formData = [
        {
            label: 'Name',
            name: 'name',
        },
        {
            label: 'Phone Number',
            name: 'phone_number',
        },
        {
            label: 'Email Address',
            name: 'email',
        },
    ]
    return (
        <>
            <div className="heading bg-gray-200 py-14">
                <div className="page-wrapper">
                    <h1 className="text-center text-4xl font-bold">
                        Checkout
                    </h1>
                </div>
            </div>
            <div className="page-wrapper py-10">
                <div>
                    <div className="block mx-6">
                            <form action="#">
                        <div className="row">
                                <div className="col-lg-8">
                                    <h2 className="mb-3 text-xl">Billing Details</h2>

                                    {formData.map((item, i) => (
                                        <>

                                            <label className="text-gray-600 font-light">{item.label}</label>
                                            <input name={item.name} placeholder={`Enter Your ${item.label}`} className="w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-primary text-sm" />

                                        </>
                                    ))}
                                     <label className="text-gray-600 font-light">Address</label>
                                            <textarea name="address" rows="3" placeholder={`Enter Your Address`} className="w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-primary text-sm" />
                                    <label className="text-gray-600 font-light">Province</label>
                                    <select className="bg-white w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-primary text-sm">
                                        <option className="py-1">Option 1</option>
                                        <option className="py-1">Option 2</option>
                                        <option className="py-1">Option 3</option>
                                    </select>


                                    <label className="text-gray-600 font-light">City</label>
                                    <select className="bg-white w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-primary text-sm">
                                        <option className="py-1">Option 1</option>
                                        <option className="py-1">Option 2</option>
                                        <option className="py-1">Option 3</option>
                                    </select>


                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-gray-50 p-8">
                                        <h2 className="text-lg font-semibold mb-4">Your Order</h2>
                                        <div className="divider mb-5" />
                                        <div className="shipping-cost">
                                            <label className="">Shipping Cost</label>
                                            <select className="bg-white w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-primary text-sm">
                                                <option className="py-1">JNE - Rp. 25.000</option>
                                                <option className="py-1">J&T - Rp. 23.000</option>
                                                <option className="py-1">TIKI - Rp. 27.000</option>
                                            </select>
                                        </div>
                                        <table className="w-full rounded-lg mb-4">
                                            <thead>
                                                <tr className="border-b">
                                                    <td>Product</td>
                                                    <td>Price</td>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                <tr className="border-b">
                                                    <td>Barang 1 - x 1</td>
                                                    <td>Rp. 200.000</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td>Barang 1 - x 1</td>
                                                    <td>Rp. 200.000</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="text-sm">
                                                <tr className="border-b">
                                                    <td><strong>Subtotal</strong></td>
                                                    <td>Rp. 400.000</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td><strong>Shipping Cost</strong></td>
                                                    <td>Rp. 25.000</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td><strong>Total</strong></td>
                                                    <td>Rp. 425.000</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <button className="btn btn-primary w-full text-center">
                                            Payment
                                        </button>
                                    </div>
                                </div>
                        </div>
                            </form>
                        {/* <table className="w-full text-left rounded-lg">
                            <thead>
                                <tr className="text-gray-800 border border-b-0">
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
                                        <td className="px-4 py-4">
                                            <input className="inline-block mr-3" type="checkbox" name={`product-${i}`} id="" />
                                            <img className="h-10 w-10 rounded-full inline-block mr-4" src="https://keinabeauty.com/wp-content/uploads/2021/02/DSCF0891_1-600x929.jpg" alt="" />
                                            Minimalistic shop for multipurpose use
                                        </td>
                                        <td className="px-4 py-4">Rp. 200.000</td>
                                        <td className="px-4 py-4">
                                            <input type="number" name="qty" id="" />
                                        </td>
                                        <td className="px-4 py-4">
                                            Rp.400.000
                                        </td>

                                    </tr>))}

                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Cart, Checkout }
