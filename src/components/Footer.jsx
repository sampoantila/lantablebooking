import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return <footer className="App-footer">
            &copy; 2018-{new Date().getFullYear()} DataCodex
        </footer>;
    }
}

export default Footer;
