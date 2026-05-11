import { motion } from "framer-motion";

export default function BundleCard({ bundle, onBuy }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black/50 border border-green-500 p-4 rounded-xl"
    >
      <h2 className="font-bold">{bundle.name}</h2>
      <p className="text-green-400">KES {bundle.price}</p>

      <button
        onClick={() => onBuy(bundle)}
        className="mt-2 bg-green-500 w-full py-2 rounded"
      >
        Buy
      </button>
    </motion.div>
  );
}
