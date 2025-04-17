export class Form {

    constructor(firstname, name, date, time, participants) {
        this._firstname = firstname;
        this._name = name;
        this._date = date;
        this._time = time;
        this._participants = participants;
    }

    get firstname() {
        return this._firstname;
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

    toJSON() {
        return {
            firstname: this._firstname,
            name: this._name,
            date: this._date,
            time: this._time,
            participants: Number(this._participants)
        };
    }
}
