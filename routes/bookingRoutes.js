const express = require('express');
const { createBooking, getBooking, updateBooking, deleteBooking, listBookings } = require('../controllers/bookingController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/bookings', auth, createBooking);
router.get('/bookings/:id', auth, getBooking);
router.put('/bookings/:id', auth, updateBooking);
router.delete('/bookings/:id', auth, deleteBooking);
router.get('/bookings', auth, listBookings);

module.exports = router;
