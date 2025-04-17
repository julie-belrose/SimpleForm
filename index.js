import { FormReservation } from './FormReservation.js';

const bookingForm = document.getElementById("booking-form");

const reservedSlots = [];

bookingForm.addEventListener("submit", (event) =>{
    event.preventDefault()

    const formData = new FormData (bookingForm); //save data of bookingForm
    const data = Object.fromEntries(formData.entries());
    console.log(formData instanceof FormData);
    console.log(data);

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    const reservation = new FormReservation(
        data.name,
        data.date,
        data.time,
        data.participants
    );

    console.log(reservation.toJSON());

    reservation.validate(reservedSlots);

    if (reservation.hasErrors()) {
        const errors = reservation.getErrors();
        console.log("Form has errors:", errors);
        console.log("Reservation is invalid:");
    } else {
        console.log("Reservation is valid:", reservation.toJSON());
    }

})