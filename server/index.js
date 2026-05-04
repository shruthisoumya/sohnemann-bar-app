const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

const bookingSchema = new mongoose.Schema(
  {
    guest: String,
    time: String,
    table: String,
    date: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

app.get("/", (req, res) => {
  res.send("Sohnemann Bar API running");
});

// ✅ GET route (for testing)
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed", error: error.message });
  }
});

// ✅ SINGLE POST route
app.post("/api/bookings", async (req, res) => {
  try {
    console.log("Incoming booking:", req.body);

    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking saved",
      booking,
    });
  } catch (error) {
    console.log("Booking error:", error.message);

    res.status(500).json({
      message: "Booking failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

// ⚠️ IMPORTANT for mobile access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});