import React, {Component} from 'react';
import logo from '../images/logo.svg';

class Header extends Component {

    render() {
        const style = {
            height: 50
        };

        return <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" style={style} />
            LanTableBooking
        </header>;
    }
}

export default Header;
