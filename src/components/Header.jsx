import React, {Component} from 'react';
import logo from '../images/lanilogo_black_small.png';

class Header extends Component {

    render() {
        return <header className="App-header">
        <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="header-title">AsLAN pöytien varausjärjestelmä</span>
            </div>
        </header>;
    }
}

export default Header;
