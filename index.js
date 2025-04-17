import { FormReservation } from './FormReservation.js';

const bookingForm = document.getElementById("booking-form");

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

    if (reservation.isValid()) {
        console.log("Reservation valid:");
        console.log(reservation.toJSON());
    } else {
        console.log("Invalid reservation data.");
        console.log(reservation.toJSON());
    }

})