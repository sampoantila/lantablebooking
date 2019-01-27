import axios from "axios";

class tableservice {

    constructor() {
        this.booked = "booked";
        
        if (process.env.NODE_ENV === 'development') {
            this.host = 'http://localhost:4000/api/v1/lanbooking';
        }
        else {
            this.host = 'https://consapi.azurewebsites.net/api/v1/lanbooking';
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

    isBooked(location) {
        return axios.get(this.host + '/isbooked/' + location);
    }

    allBooked() {
        return axios.get(this.host + '/booked');
    }

    myBooking(email, code) {
        var params = `?email=${email}&code=${code}`;
        return axios.get(this.host + '/check' + params);
    }

    sendEmails(code) {
        if (code === '') {
            console.error('No code');
            return false;
        }
        var params = `?code=${code}`;
        return axios.get(this.host + '/sendEmails' + params);
    }

    createAccount(code, email) {
        var params = `?code=${code}&email=${email}`;
        return axios.get(this.host + '/createaccount' + params);
    }
}

export default new tableservice();