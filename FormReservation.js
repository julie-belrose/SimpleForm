import { regexPatterns } from './regex.js';

export class FormReservation {

    constructor(name, date, time, participants) {
        this._name = name; //two word
        this._date = date;
        this._time = time;
        this._participants = participants;
    }

    validate(reservedSlots = []) {
        this._errors = {}; // reset errors

        this.checkName(this._name);
        this.checkTime(this._time);
        this.checkSlot(reservedSlots);
        this.checkParticipants(this._participants);

        return this._errors;
    }

    checkName(name){
        if (!regexPatterns.onlyLetters.test(name)) {
            this._errors.name = "⚠️ The name must contain at least 3 letters and only letters (no digits, symbols, or spaces).";
        }
    };

    checkTime(time){
        if (!this.isTimeInRange(time)) {
            this._errors.time = "⚠️ Appointments are only available between 09:00 and 18:00.";
        }
    }

    checkSlot(reservedSlots){

        const isSameDayReserved = reservedSlots.some(slot => {
            const [date] = slot.split("T");
            return date === this._date;
        });

        if (isSameDayReserved) {
            this._errors.slot = "⚠️ This time is already booked.";
        }
    }

    checkParticipants(participants){
        if (isNaN(participants) || participants < 0 || participants > 10) {
            this._errors.participants = "⚠️ The number of participants must be between 0 and 10.";
        }
    }

   isTimeInRange(time) {
        return time >= "09:00" && time <= "18:00";
    }

    hasErrors() {
        return Object.keys(this._errors).length > 0;
    }

    toJSON() {
        return {
            name: this._name,
            date: this._date,
            time: this._time,
            participants: Number(this._participants)
        };
    }

    get name() {
        return this._name;
    }

    get date() {
        return this._date;
    }

    get time() {
        return this._time;
    }

    get participants() {
        return this._participants;
    }

    getErrors() {
        return this._errors;
    }

}
