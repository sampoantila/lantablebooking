import React, { Component } from 'react';
import tableservice from '../service/tableservice';

class AuthBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            msg: "",
            error: "",
            email: "",
            code: ""
        };
    }

    componentWillReceiveProps(nextProps) {
        var msg = "";
        if (nextProps.booking === "-") {
            msg = "Et ole vielä varannut pöytää";
        }
        else if (nextProps.booking) {
            msg = "Varauksesi on " + nextProps.booking;
        }

        this.setState({ msg: msg});
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
        this.props.setAuth(this.state.email, this.state.code);
    }

    handleChangeCode = (event) => {
        this.setState({code: event.target.value});
        this.props.setAuth(this.state.email, this.state.code);
    }

    onClickButton = (event) => {
        event.preventDefault();

        if (this.state.email === "" || this.state.code === "") {
            this.setState({error: "Sähköposti ja koodi on pakollisia tietoja"});
            return;
        }

        tableservice.myBooking(this.state.email, this.state.code)
        .then(res => {
            var msg = "";
            var error = "";

            if (res.data) {
                if (res.data === "-") {
                    msg = "Et ole vielä varannut pöytää";
                }
                else {
                    msg = "Varauksesi on " + res.data;
                }
            }
            else {
                error = "Virheellinen sähköposti tai koodi"
            }

            this.props.setBooking(res.data);
            this.setState({checked: true, msg: msg, error: error});
        });
    }

    render() {
        return <div style={{padding: 5}}>
            <label>S&auml;hk&ouml;posti</label>
            <input style={{margin: 5, padding: 3}}
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                onBlur={this.handleChangeEmail}
                />
            &nbsp;&nbsp;
            <label>Koodi</label>
            <input style={{margin: 5, padding: 3}}
                type="password"
                id="code"
                value={this.state.code}
                onChange={this.handleChangeCode}
                onBlur={this.handleChangeCode}
                />
            &nbsp;
            <button className="check-button" onClick={this.onClickButton}>Tarkista</button>
            <br/>

            {this.state.msg ?
                <span style={{color: '#6478df'}}>{this.state.msg}</span>
                : null
            }
            {this.state.error ?
                <span style={{color: '#aa2211'}}>{this.state.error}</span>
                : null
            }
        </div>;
    }
}

export default AuthBar;