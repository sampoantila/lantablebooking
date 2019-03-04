import React, { Component } from 'react';
import FillForm from './FillForm';
// import Header from './Header';
// import Footer from './Footer';
// import Content from './Content';

class MainPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    render() {
        return <div>
            <FillForm onSubmit={this.submit} />
            {/* <Header /> */}
            {/* <Content /> */}
            {/* <Footer /> */}
        </div>
    }
}

export default MainPage; 