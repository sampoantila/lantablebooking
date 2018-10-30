import axios from "axios";

class tableservice {

    constructor() {
        this.booked = "booked";
        this.host = 'http://localhost:4000/api/v1/lanbooking';
        // this.host = 'http://consapi.azurewebsites.net/api/v1/lanbooking';
    }

    book(location) {
        console.log("booked: " + location);
        localStorage.setItem(location, this.booked);
    }

    free(location) {
        console.log("freed: "+ location);
        localStorage.removeItem(location);
    }

    toggleBooking(location) {
        if (localStorage.getItem(location) === this.booked)
        {
            this.free(location);
            return false;
        }
        else {
            this.book(location);
            return true;
        }
    }

    isBooked(location) {
        return axios.get(this.host + '/isbooked/' + location);
    }

    allBooked() {
        return axios.get(this.host + '/booked');
    }
}

export default new tableservice();