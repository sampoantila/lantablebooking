import React, {Component} from 'react';
import TableGroup from './TableGroup';
import AuthBar from './AuthBar';
import tableservice from '../service/tableservice';
import Spinner from 'react-spinner';
import '../../node_modules/react-spinner/react-spinner.css';
import '../css/App.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            code: "",
            booked: [],
            booking: "",
            loading: true
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
            this.setState({booked: res.data, loading: false});
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false});
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

        const total = 6*9;
        var reserved = this.state.booked.length;
        var free = total - reserved; 

        return <div className="App-content">
            {this.state.loading
            ?
            <div style={{marginTop:70}}>
                <Spinner />
            </div>
            :
            <div>
                <div style={{ margin: 3, color: "#c6c6c6"}}>
                    Vapaana paikkoja: <span>{free}/{total} (varattuja: {reserved})</span>
                </div>
                <div style={{marginTop: 10}}>
                    <span>Kirjoita sähköpostisi ja saamasi koodi, sen jälkeen voita varata yhden pöydän vapaista (vihreistä).<br/>
                    Varauksen voi vaihtaa klikkaamalla toista pöytää. Voit varata vain yhden pöydän.</span>
                    <AuthBar setBooking={this.setBooking} setAuth={this.setAuth} booking={this.state.booking} />
                </div>
            </div>
            }
            <br/>
            <div className="clearfix">
                <div style={{float: "left"}}>
                    <TableGroup name="A" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                    <TableGroup name="B" right booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                    <br/>
                    <TableGroup name="C" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                    <TableGroup name="D" right booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                    <br/>
                </div>
                <div>
                    <TableGroup name="E" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                    <TableGroup name="F" booked={this.state.booked} booking={this.state.booking} toggle={this.toggle} />
                </div>
            </div>
            <div className="food-table">
                Ruokapöytä
            </div>
        </div>;
    }
}

export default Content;
