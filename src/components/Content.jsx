import React, {Component} from 'react';
import TableGroup from './TableGroup';
import AuthBar from './AuthBar';
import tableservice from '../service/tableservice';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            code: "",
            booked: [],
            booking: ""
        }
    }

    componentWillMount() {
        this.loadBooked();
    }

    setBooking = (location) => {
        this.setState({booking: location});
    }

    loadBooked = () => {
        tableservice.allBooked()
        .then(res => {
            this.setState({booked: res.data});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    setAuth = (email, code) => {
        this.setState({email: email, code: code});
    }

    toggle = (location) => {
        var { booking, email, code} = this.state;

        if (booking === location) {
            tableservice.free(email, code)
            .then((res) => {
                this.setBooking("-");
                this.loadBooked();
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else {
            tableservice.book(email, code, location)
            .then((res) => {
                this.setBooking(location);
                this.loadBooked();
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    render() {
        return <div className="App-content">
            <span>Kirjoita sähköpostisi ja saamasi koodi, sen jälkeen voita varata yhden pöydän vapaista (vihreistä).<br/>
            Varauksen voi vaihtaa klikkaamalla toista pöytää. Voit varata vain yhden pöydän.</span>
            <AuthBar setBooking={this.setBooking} setAuth={this.setAuth} booking={this.state.booking} />
            <br/>
            <TableGroup name="A" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
            <TableGroup name="B" right booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
            <br/>
            <TableGroup name="C" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
            <TableGroup name="D" right booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
            <br/>
            <div className="food-table">
                Ruokapöytä
            </div>
        </div>;
    }
}

export default Content;
