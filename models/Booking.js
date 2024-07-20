const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    vehicleType: { type: String, required: true },
    serviceType: { type: String, required: true },
    bookingDate: { type: Date, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema);
