import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function BuyModal({ bundle, close }: any) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const buy = async () => {
    setLoading(true);
    try {
      await axios.post("https://your-backend.onrender.com/stkpush", {
        phone,
        amount: bundle.price
      });

      toast.success("STK Push sent!");
      close();
    } catch {
      toast.error("Payment failed");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="bg-gray-900 p-5 rounded-xl w-80">
        <h2 className="mb-2">{bundle.name}</h2>

        <input
          placeholder="2547XXXXXXXX"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 rounded text-black"
        />

        <button
          onClick={buy}
          className="mt-3 w-full bg-green-500 py-2 rounded"
        >
          {loading ? "Processing..." : "Pay"}
        </button>

        <button onClick={close} className="mt-2 text-red-400">
          Cancel
        </button>
      </div>
    </div>
  );
}
