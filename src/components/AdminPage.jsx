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
        this.clearMessages();
        tableservice.sendEmails(this.state.code)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    createAccount = () => {
        if (this.state.code === '') {
            this.setState({ error: 'code is missing'});
            return;
        }
        this.clearMessages();
        console.log("call createAccount:");
        tableservice.createAccount(this.state.code, this.state.email)
        .then(response => {
            console.log("response:", response);
            if (response.data.success === true) {
                this.setState({msg: 'created successfully'});
            }
            else {
                console.error("non success data", response.data);
                this.setState({error: response.data.message});
            }
        })
        .catch(error => {
            this.setState({error: error.response.data.message});
        });
    }

    handleChangeEmail = (event) => {
        this.clearMessages();
        this.setState({email: event.target.value});
    }

    handleChangeCode = (event) => {
        this.clearMessages();
        this.setState({code: event.target.value});
    }

    clearMessages = () => {
        this.setState({error: '', msg: ''});
    }

    render() {
        return <div>
            <h3>Admin page</h3>
            <div>
                <div style={{padding: 5}}>
                    <label>Code</label>
                    <input style={{margin: 5, padding: 3}}
                        type="text"
                        id="code"
                        value={this.state.code}
                        onChange={this.handleChangeCode}
                        onBlur={this.handleChangeCode}
                        />
                </div>
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
                <hr style={{width: 300}} />
                <div>
                    <button className="check-button" style={{padding:7}} onClick={this.sendEmails}>Send emails</button>
                </div>
            </div>
        </div>;
    }
}

export default AdminPage;