const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const { userId, vehicleType, serviceType, bookingDate } = req.body;
        const booking = new Booking({ userId, vehicleType, serviceType, bookingDate });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listBookings = async (req, res) => {
    try {
        const { date, vehicleType } = req.query;
        const filter = {};
        if (date) filter.bookingDate = date;
        if (vehicleType) filter.vehicleType = vehicleType;
        const bookings = await Booking.find(filter);
        res.json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
