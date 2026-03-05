import crypto from "node:crypto";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const webhookHandler = async (req, res) => {
  const signature = req.headers["x-signature"];
  const eventType = req.headers["x-event-name"];

  const rawBody = req.body; // Buffer because of express.raw()
  // console.log("WEBHOOK BODY:", rawBody.toString());

  const secret = process.env.LEMONSQUEEZY_SIGNIN_SECRET;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  if (expectedSignature !== signature) {
    return res.status(401).send("Invalid signature");
  }

  const body = JSON.parse(rawBody.toString());

  const transactionId = body.meta?.custom_data?.transaction_id;

  if (!transactionId) {
    return res.status(400).json({ message: "No transaction ID found" });
  }

  const transaction = await Transaction.findById(transactionId);
  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  if (eventType === "order_created") {
    if (!transaction.isPaid) {
      transaction.isPaid = true;
      await transaction.save();

      const user = await User.findById(transaction.userId);
      user.credits += transaction.credits;
      await user.save();
    }
  }

  return res.status(200).json({ message: "Webhook received" });
};
