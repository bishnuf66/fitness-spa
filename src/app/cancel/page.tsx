import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-4 rounded-full">
            <XCircle className="w-16 h-16 text-red-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-gray-300 mb-8">
          Your payment was cancelled. No charges have been made to your account.
        </p>
        <div className="space-y-4">
          <Link
            href="/membership"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
          >
            Back to Plans
          </Link>
          <Link
            href="/contact"
            className="block w-full border border-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
          >
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}
