import { FormReservation } from './FormReservation.js';

const bookingForm = document.getElementById("booking-form");
const errorDisplay = document.getElementById("global-error");
const allInputs = bookingForm.querySelectorAll("input");

const myForm = ()=>{
    bookingForm.addEventListener("submit", (event) =>{
        event.preventDefault()

        const { reservation } = getFormAndReservation(bookingForm);

        reservationSlot(reservation)
        checkInputForm(reservation);
    });
};

const getFormAndReservation = (formElement) => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    const reservation = new FormReservation(
        data.name,
        data.date,
        data.time,
        data.participants
    );

    return { data, reservation };
};

const reservationSlot =(form)=>{
    const reservedSlots = [];
    form.validate(reservedSlots);
}

const checkInputForm =(form)=>{
    if (form.hasErrors()) {
        const errors = form.getErrors();
        console.log("Form has errors:", errors);
        console.log("Reservation is invalid:");
    } else {
        console.log("Reservation is valid:", form.toJSON());
    }
};

myForm();
