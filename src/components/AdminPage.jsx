import React, { Component } from 'react';
import tableservice from '../service/tableservice';

class AdminPage extends Component {

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

    sendEmails = () => {
        tableservice.sendEmails(this.state.code)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    createAccount = () => {
        tableservice.createAccount(this.state.code, this.state.email)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handleChangeCode = (event) => {
        this.setState({code: event.target.value});
    }

    render() {
        return <div>
            <h3>Admin page</h3>
            <div>
            <label>Code</label>
            <input style={{margin: 5, padding: 3}}
                type="text"
                id="code"
                value={this.state.code}
                onChange={this.handleChangeCode}
                onBlur={this.handleChangeCode}
                />
            </div>
            <div>
                <button className="check-button" style={{padding:7}} onClick={this.sendEmails}>Send emails</button>
            </div>
            <div>
            <div style={{padding: 5}}>
            <label>Email</label>
            <input style={{margin: 5, padding: 3}}
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                onBlur={this.handleChangeEmail}
                />
            &nbsp;&nbsp;
            &nbsp;
            <button className="check-button" onClick={this.createAccount}>Create Account</button>
            <br/>

            {this.state.msg ?
                <span style={{color: '#6478df'}}>{this.state.msg}</span>
                : null
            }
            {this.state.error ?
                <span style={{color: '#aa2211'}}>{this.state.error}</span>
                : null
            }
            </div>
            </div>
        </div>;
    }
}

export default AdminPage;