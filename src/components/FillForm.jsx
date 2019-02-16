import React, { Component } from 'react';
import FillFormTopic from './fillformcomponents/FillFormTopic';
import FillFormContactInfo from './fillformcomponents/FillFormContactInfo';
import FillFormButton from './fillformcomponents/FillFormButton';
import '../css/FillForm.css';


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
                { firstName: 'Arto', lastName: 'Hellas', email: 'arto.hellas@gmail.com', phoneNumber: '04023424', id: 1 },
                { firstName: 'Martti', lastName: 'Tienari', email: 'martti.tienari@yahoo.com', phoneNumber: '0500653245',id: 2 },
                { firstName: 'Arto', lastName: 'Järvinen', email: 'arto.jarvinen@yandex.ru', phoneNumber: '0400121144',id: 3 },
                { firstName: 'Lea', lastName: 'Kutvonen', email: 'lea.kutvonen@iki.fi', phoneNumber:'04015151', id: 4 }
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
        this.buttonPress = this.buttonPress.bind(this);
    }


    handleChangeFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName(event) {
        // this.setState({ lastName: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    buttonPress = (event) => {
        event.preventDefault()
        console.log('this button clicked.');
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
        return (

            <div>
                <main>
                    <FillFormTopic/>      
                    <FillFormContactInfo 
                    firstName={this.firstName}
                    // lastName={this.lastName}
                    // email={this.email}
                    // phonenumber={this.phoneNumber}
                    changeFirstName={this.handleChangeFirstName}
                    />
                    <FillFormButton
                    buttonPress={this.buttonPress}/>

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


        //         <form onSubmit={this.addNote} >
        //             <label>
        //                 Etunimi: <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
        //                 Sukunimi: <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
        //                 <p>Sähköposti: <input type="text" value={this.state.email} onChange={this.handleChangeEmail} /></p>
        //             </label>
        //             <input type="submit" value="Submit" />
        //         </form>

        //         <img src={logo} className="App-logo" alt="logo" />
        //         <span className="header-title">Täytä Tietosi</span>
        //     </div>

        //     <div>
        //         {this.state.users.map(name =>
        //             <ul key={name.id}>{name.firstName} {name.lastName} {name.email}</ul>)}
        //     </div>
        // </header>; */