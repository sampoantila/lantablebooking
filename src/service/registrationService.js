import axios from "axios";

class registrationService {

    constructor() {
        this.booked = "booked";

        if (process.env.NODE_ENV === 'development') {
            this.host = 'https://consapi.azurewebsites.net/api/v1/lanregistration';
            // this.host = 'http://localhost:4000/api/v1/lanbooking';
        }
        else {
            this.host = 'https://consapi.azurewebsites.net/api/v1/lanregistration';
        }
    }

    book(email, code, location) {
        if (email && code && location) {
            return axios.post(this.host,
                {
                    email: email,
                    code: code,
                    location: location
                });
        }

        return Promise.reject("email, code or location missing");
    }

    free(email, code) {
        if (email && code) {
            return axios.post(this.host,
                {
                    email: email,
                    code: code,
                    location: null
                });
        }

        return Promise.reject("email, code or location missing");
    }

    isRegistered(email) {
        return axios.get(this.host + '/isRegistered/' + email);
    }

    allBooked() {
        return axios.get(this.host + '/booked');
    }

    myBooking(email, code) {
        var params = `?email=${email}&code=${code}`;
        return axios.get(this.host + '/check' + params);
    }

    sendEmails() {
        var code = "lan123Send456Mail";
        var params = `?code=${code}`;
        return axios.get(this.host + '/sendEmails' + params);
    }
}

export default new registrationService();