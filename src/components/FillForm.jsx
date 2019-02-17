import React, { Component } from 'react';
import FillFormTopic from './fillformcomponents/FillFormTopic';
import FillFormContactInfo from './fillformcomponents/FillFormContactInfo';
import FillFormButton from './fillformcomponents/FillFormButton';
import '../css/FillForm.css';


class FillForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { firstName: 'Arto', lastName: 'Hellas', email: 'arto.hellas@gmail.com', phoneNumber: '04023424', id: 1 },
                { firstName: 'Martti', lastName: 'Tienari', email: 'martti.tienari@yahoo.com', phoneNumber: '0500653245', id: 2 },
                { firstName: 'Arto', lastName: 'Järvinen', email: 'arto.jarvinen@yandex.ru', phoneNumber: '0400121144', id: 3 },
                { firstName: 'Lea', lastName: 'Kutvonen', email: 'lea.kutvonen@iki.fi', phoneNumber: '04015151', id: 4 }
            ],
        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
    }

    handleChangeFirstName(event) {
        // console.log("handleChangeFirstName event", event.target.value)
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePhoneNumber(event) {
        this.setState({ phoneNumber: event.target.value });
    }

    buttonPress = (event) => {
        event.preventDefault()
        console.log('button press event clicked');

        const noteObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            id: this.state.users.length + 1
        }
        const notes = this.state.users.concat(noteObject)
        const result = notes.find(fruit => fruit.email === noteObject.email);

        console.log("käyttäjät", result)

        if (result.id < notes.length) {
            window.alert("sähköposti on jo olemassa palvelussa");
            this.setState({
                email: '',
            });
        } else {
            this.setState({
                users: notes,
            })
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            });
        }
    }

    render() {
        console.log('toimiiko fillform');
        return (
            <div>
                <main>
                    <FillFormTopic />
                    <FillFormContactInfo
                        firstName={this.firstName}
                        lastName={this.lastName}
                        email={this.email}
                        phoneNumber={this.phoneNumber}
                        combHandleChangeFirstName={this.handleChangeFirstName}
                        combHandleChangeLastName={this.handleChangeLastName}
                        combHandleChangeEmail={this.handleChangeEmail}
                        combHandleChangePhoneNumber={this.handleChangePhoneNumber}
                    />
                    <FillFormButton
                        buttonPress={this.buttonPress} />
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
