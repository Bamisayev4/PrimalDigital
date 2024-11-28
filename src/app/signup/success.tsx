// pages/success.tsx
export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f8f4]">
      <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Success!
        </h2>
        <p className="text-center text-gray-700">
          Your checkout data has been saved successfully.
        </p>
        <p className="text-center mt-4">
          <a href="/" className="text-blue-500 hover:underline">
            Return to Home
          </a>
        </p>
      </div>
    </div>
  );
}
