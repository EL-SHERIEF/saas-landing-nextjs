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

        <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white float-animation">
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

        <form className="mt-8 space-y-6">
          <input type="text" className="block w-full p-3 border rounded-lg" placeholder="Card Holder Name" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
          <input type="text" className="block w-full p-3 border rounded-lg" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} maxLength={19} />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" className="block w-full p-3 border rounded-lg" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} maxLength={5} />
            <input type="password" className="block w-full p-3 border rounded-lg" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))} maxLength={3} />
          </div>
          <button type="submit" className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
