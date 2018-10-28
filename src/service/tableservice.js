class tableservice {

    constructor() {
        this.booked = "booked";
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
        return localStorage.getItem(location) === this.booked;
    }
}

export default new tableservice();