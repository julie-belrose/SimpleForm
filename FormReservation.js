export class FormReservation {

    constructor(name, date, time, participants) {
        this._name = name; //two word
        this._date = date;
        this._time = time;
        this._participants = participants;
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

    isValid() {

    }

    toJSON() {
        return {
            name: this._name,
            date: this._date,
            time: this._time,
            participants: Number(this._participants)
        };
    }
}
