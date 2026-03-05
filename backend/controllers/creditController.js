import Transaction from "../models/Transaction.js";
import { CREDIT_PACKAGES } from "../configs/plans.js";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

export const getCreditPackages = async (req, res) => {
  try {
    res.json({ success: true, CREDIT_PACKAGES });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// purchace a plan
export const purchaseCredits = async (req, res) => {
  try {
    const { packageId } = req.body;
    const userId = req.user._id;
    const $package = CREDIT_PACKAGES.find((p) => p.id == packageId);

    if (!$package) {
      return res.json({ success: false, message: "Invalid package" });
    }

    // transaction
    const transaction = await Transaction.create({
      userId: userId,
      planId: $package.id,
      amount: $package.price,
      credits: $package.credits,
      isPaid: false,
    });

    const checkout = await createCheckout(
      process.env.LEMONSQUEEZY_STORE_ID, //store id
      packageId, // varient id
      {
        checkoutOptions: {
          embed: false,
        },

        productOptions: {
          redirectUrl: "http://localhost:5173/",
        },

        checkoutData: {
          custom: {
            transactionId: transaction._id.toString(),
          },
        },
      },
    );

    if (checkout.error) {
      return res.json({ success: false, message: checkout.error.message });
    }

    res.json({
      success: true,
      url: checkout.data.data.attributes.url,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
