import React, { Component } from 'react';
import logo from '../images/logo.svg';


class FillForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     newUser: [
        //         firstName: '',
        //         lastName: '',
        //         phoneNumber: '',
        //         email: '',
        //         id: '',
        //     ]
        // }

        this.state = {
            users: [
                { firstName: 'Arto', lastName: 'Hellas', email: 'arto.hellas@gmail.com', id: 1 },
                { firstName: 'Martti', lastName: 'Tienari', email: 'martti.tienari@yahoo.com', id: 2 },
                { firstName: 'Arto', lastName: 'Järvinen', email: 'arto.jarvinen@yandex.ru', id: 3 },
                { firstName: 'Lea', lastName: 'Kutvonen', email: 'lea.kutvonen@iki.fi', id: 4 }
            ],
        }
        // this.state = {
        //     firstName: "",
        //     lastName: "",
        //     phoneNumber: "",
        //     email: "",
        //     guardianFirstName: "",
        //     guardianLastName: "",
        //     guardianNumber: "",
        //     gadget: "",
        //     dates: "",
        //     // these will be updated better later
        //     games: "",
        //     food: "",
        // }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.addNote = this.addNote.bind(this);
    }


    handleChangeFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    addNote = (event) => {
        event.preventDefault()

        const noteObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            id: this.state.users.length + 1
        }
        const notes = this.state.users.concat(noteObject)
        const result = notes.find(fruit => fruit.email === noteObject.email);

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
            });
        }
    }

    render() {
        console.log('toimiiko fillform');
        return <header className="App-header">
            <div className="header-content">
                <h1>αLanit ilmoittautuminen</h1>

                <center><div class="ui black message six wide field"><div class="textcolor">
              Pöydän koko on 85 x 75 cm ja vieressä on pehmustettu tuoli!
              Yksi pistorasia ja yksi nettipistoke per pöytä.
          Tuo oma jatkojohto ja oma nettipiuha (varajohtoja löytyy kyllä).
          </div></div></center>

                <form onSubmit={this.addNote} >
                    <label>
                        Etunimi: <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                        Sukunimi: <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                        <p>Sähköposti: <input type="text" value={this.state.email} onChange={this.handleChangeEmail} /></p>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <img src={logo} className="App-logo" alt="logo" />
                <span className="header-title">Täytä Tietosi</span>
            </div>

            <div>
                {this.state.users.map(name =>
                    <ul key={name.id}>{name.firstName} {name.lastName} {name.email}</ul>)}
            </div>
        </header>;
    }
}

export default FillForm;