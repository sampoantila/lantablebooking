import React from 'react';
import { connect } from 'react-redux';
import Topic from './fillform/Topic';
import ContactInfo from './fillform/ContactInfo';
import SubmitButton from './fillform/SubmitButton';
import '../css/FillForm.css';


class FillForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { firstName: 'Ismo', lastName: 'Lammio', email: 'ismo.lammio@gmail.com', phoneNumber: '04023424', id: 1 },
                { firstName: 'Juha', lastName: 'Hietanen', email: 'juha.hietanen@yahoo.com', phoneNumber: '0500653245', id: 2 },
                { firstName: 'Antero', lastName: 'Rokka', email: 'antero.rokka@yandex.ru', phoneNumber: '0400121144', id: 3 },
                { firstName: 'Jenna', lastName: 'Niemi', email: 'jenna.niemi@iki.fi', phoneNumber: '04015151', id: 4 }
            ],
        }
    }

    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePhoneNumber = (event) => {
        this.setState({ phoneNumber: event.target.value })
    }

    buttonPress = (e) => {
        e.preventDefault()
        console.log('button press event clicked')

        const parameters = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            id: this.state.users.length + 1
        }

        const result = this.state.users.find(data => data.email === parameters.email);

        if (result == undefined) {
            var copyArray = this.state.users.slice();
            copyArray.push(parameters);
            this.setState({ users: copyArray })
        } else {
            window.alert("sähköposti on jo olemassa palvelussa");
        }
    }

    render() {
        console.log('toimiiko fillform');
        return (
            <div>
                <main>
                    <Topic />
                    <ContactInfo />
                    {/* firstName={this.firstName}
                        lastName={this.lastName}
                        email={this.email}
                        phoneNumber={this.phoneNumber}
                        combHandleChangeFirstName={this.handleChangeFirstName}
                        combHandleChangeLastName={this.handleChangeLastName}
                        combHandleChangeEmail={this.handleChangeEmail}
                        combHandleChangePhoneNumber={this.handleChangePhoneNumber}
                    />
                    {/* <SubmitButton /> */}
                </main>

                {/* testing print out */}
                <div>
                    {this.state.users.map(name =>
                        <ul key={name.id}>{name.firstName} {name.lastName} {name.email} {name.phoneNumber}</ul>)}
                </div>
            </div>
        )
    }
}

export default FillForm;
