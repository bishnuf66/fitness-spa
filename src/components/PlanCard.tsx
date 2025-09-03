import api from "@/lib/api";
import toast from "react-hot-toast";
type PlanProps = {
  name: string;
  price: string;
  duration: string;
  priceId?: string;
  features: string[];
};

interface CheckoutResponse {
  url: string;
  success: boolean;
  sessionId: string;
}

export const PlanCard: React.FC<PlanProps> = ({
  name,
  price,
  duration,
  priceId,
  features,
}) => {
  const handleChoose = async () => {
    if (!priceId) {
      toast.error("Price ID is missing. Please try again later.");
      return;
    }
    const toastId = toast.loading("Processing your request...");
    try {
      const response: CheckoutResponse = await api.post("/api/subscriptions", {
        priceId,
      });
      console.log(response);
      if (!response?.url) {
        toast.error("Failed to create checkout session.", { id: toastId });
        return;
      }
      toast.success("Redirecting to checkout...", { id: toastId });
      window.location.href = response?.url;
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to process your request. Please try again.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="flex flex-col space-y-4 hover:bg-orange-500 hover:scale-105 p-6 w-64 rounded-lg secondary-bg group transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="text-xl font-bold">
        <span>{price}</span>
        <span className="text-sm">/{duration}</span>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        onClick={handleChoose}
        className="px-4 py-2 text-white rounded-full border group-hover:bg-white group-hover:text-orange-500 transition-all duration-300"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PlanCard;
