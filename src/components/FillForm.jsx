import React from 'react';
import Topic from './fillform/Topic';
import HeaderText from './fillform/HeaderText';
import ContactInfo from './fillform/ContactInfo';
import Guardians from './fillform/Guardians';
import TableReservation from './fillform/TableReservation';
import '../css/FillForm.css';
import { Field, reduxForm } from 'redux-form'
import Days from './fillform/Days';
import Tournaments from './fillform/Tournaments';

let FillForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <main>
                <Topic />
                <HeaderText />
                <ContactInfo />
                <Guardians />
                <TableReservation />
                <Days/>
                <Tournaments />



                <div>
                    <br />
                    <br />
                    <center><button class="positive massive ui button" type="submit">Lähetä</button></center>
                </div>
            </main>
        </form>

    )
}

FillForm = reduxForm({
    form: 'contact'
})(FillForm)

export default FillForm;