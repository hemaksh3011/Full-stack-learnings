const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1672490410415-30c8c6c0c68c?...",
      set: (url) =>
        url === ""
          ? "https://images.unsplash.com/photo-1672490410415-30c8c6c0c68c?..."
          : url,
    },
},
    //SET ME JO BHI VALUE AGAR NAHI AA PATI HAI TO DEFAULT VALUE HIT HOGI FOR THE IMAGE
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;
