import React, { Component } from 'react';

class AuthBar extends Component {

    render() {
        return <div style={{padding: 5}}>
            <label>S&auml;hk&ouml;posti</label>
            <input style={{margin: 5, padding: 3}} type="text" id="email"></input>
            &nbsp;&nbsp;
            <label>Koodi</label>
            <input style={{margin: 5, padding: 3}} type="text" id="code"></input>
        </div>;
    }
}

export default AuthBar;