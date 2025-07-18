const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,
  paymentMethod: { type: String, default: 'bypassed' }, // always 'bypassed'
  paymentStatus: { type: String, default: 'paid' }, // always 'paid'
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
  // paymentId and payerId are now unused, kept for backward compatibility
  paymentId: { type: String, default: '' },
  payerId: { type: String, default: '' },
});

module.exports = mongoose.model("Order", OrderSchema);
