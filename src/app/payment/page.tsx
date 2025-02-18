'use client'
import { useState } from "react";

export default function PaymentForm() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 16).match(/.{1,4}/g)?.join(" ") || "";
  };

  const formatExpiry = (value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(0, 4);
    return sanitized.length > 2 ? `${sanitized.slice(0, 2)}/${sanitized.slice(2)}` : sanitized;
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Details</h2>
          <p className="text-gray-500">Complete your purchase securely</p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input 
              type="text" 
              id="FullName" 
              className="block w-full p-3 border rounded-lg" 
              placeholder="Full Name" 
            />
            <label htmlFor="FullName" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input 
              type="text" 
              id="Email" 
              className="block w-full p-3 border rounded-lg" 
              placeholder="Email" 
            />
            <label htmlFor="Email" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Email
            </label>
          </div>

          <p className="text-gray-500">Billing address</p>

          {/* Address */}
          <div className="relative">
            <input 
              type="text" 
              id="address" 
              className="block w-full p-3 border rounded-lg" 
              placeholder=" " 
            />
            <label htmlFor="address" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Full Address
            </label>
          </div>

          {/* City */}
          <div className="relative">
            <input 
              type="text" 
              id="city" 
              className="block w-full p-3 border rounded-lg" 
              placeholder="City" 
            />
            <label htmlFor="city" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              City
            </label>
          </div>

          {/* Country */}
          <div className="relative">
            <input 
              type="text" 
              id="country" 
              className="block w-full p-3 border rounded-lg" 
              placeholder=" " 
            />
            <label htmlFor="country" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Country
            </label>
          </div>

          {/* ZIP Code */}
          <div className="relative">
            <input 
              type="text" 
              id="zip" 
              className="block w-full p-3 border rounded-lg" 
              placeholder=" " 
            />
            <label htmlFor="zip" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              ZIP Code
            </label>
          </div>

          {/* Card Information */}
            <div className="relative h-48 bg-gradient-to-r from-black to-black/60 rounded-xl p-6 text-white float-animation">
          <div className="absolute top-4 right-4">
            <svg className="h-8" viewBox="0 0 48 48" fill="none">
              <path d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z" fill="#ffffff" />
            </svg>
          </div>
          <div className="mt-16">
            <div className="text-xl tracking-widest mb-2">{cardNumber || "•••• •••• •••• ••••"}</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-75">Card Holder</div>
                <div className="text-sm">{cardHolder || "YOUR NAME"}</div>
              </div>
              <div>
                <div className="text-xs opacity-75">Expires</div>
                <div className="text-sm">{expiry || "MM/YY"}</div>
              </div>
            </div>
          </div>
        </div>
          <div className="relative">
            <input 
              type="text" 
              id="cardHolderName" 
              className="block w-full p-3 border rounded-lg" 
              placeholder=" " 
              value={cardHolder} 
              onChange={(e) => setCardHolder(e.target.value)} 
            />
            <label htmlFor="cardHolderName" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Card Holder Name
            </label>
          </div>

          <div className="relative">
            <input 
              type="text" 
              id="cardNumber" 
              className="block w-full p-3 border rounded-lg" 
              placeholder=" " 
              value={cardNumber} 
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} 
              maxLength={19}
            />
            <label htmlFor="cardNumber" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
              Card Number
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input 
                type="text" 
                id="expiry" 
                className="block w-full p-3 border rounded-lg" 
                placeholder=" " 
                value={expiry} 
                onChange={(e) => setExpiry(formatExpiry(e.target.value))} 
                maxLength={5}
              />
              <label htmlFor="expiry" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
                MM/YY
              </label>
            </div>

            <div className="relative">
              <input 
                type="password" 
                id="cvv" 
                className="block w-full p-3 border rounded-lg" 
                placeholder=" " 
                value={cvv} 
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))} 
                maxLength={3}
              />
              <label htmlFor="cvv" className="absolute left-3 -mt-3 px-1 top-0 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600 peer-valid:top-1 peer-valid:text-xs peer-valid:text-indigo-600">
                CVV
              </label>
            </div>
          </div>

          <button type="submit" className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
