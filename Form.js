
export class Form {

    constructor(firstname, name, date, time, participants) {
        this.firstname = firstname;
        this.name = name;
        this.date = date;
        this.time = time;
        this.participants = participants;
    }

    get firstname() {
        return this.firstname
    };

    get name(){
        return this.name;
    }

    get participants(){
        return this.name;
    }

}