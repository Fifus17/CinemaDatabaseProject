import Price from "../model/price.js";

const getPriceList = async (req, res) => {
  try {
    return await Price.findOne({ endtime: null });
  } catch (err) {
    throw new Error(err.message);
  }
};

// remember to convert toISOString on frontend

export { getPriceList };
