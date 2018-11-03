import React, { Component } from 'react';
import tableservice from '../service/tableservice';

class AdminPage extends Component {

    sendEmails = () => {
        tableservice.sendEmails()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.warn(err);
        })
    }

    render() {
        return <div>
            <h3>Admin page</h3>
            <button style={{padding:7}} onClick={this.sendEmails}>Send emails</button>
        </div>;
    }
}

export default AdminPage;