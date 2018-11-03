import React, {Component} from 'react';
import logo from '../images/logo.svg';

class Header extends Component {

    render() {
        return <header className="App-header">
        <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="header-title">Lanipöytien varausjärjestelmä</span>
            </div>
        </header>;
    }
}

export default Header;
