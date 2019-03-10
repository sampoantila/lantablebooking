import React from 'react';
import Topic from './fillform/Topic';
import HeaderText from './fillform/HeaderText';
import ContactInfo from './fillform/ContactInfo';
import Guardians from './fillform/Guardians';
import TableReservation from './fillform/TableReservation';
import '../css/FillForm.css';
import { reduxForm } from 'redux-form'
import Days from './fillform/Days';
import Tournaments from './fillform/Tournaments';
import Food from './fillform/Food';
import SubmitButton from './fillform/SubmitButton';

let FillForm = props => {
    const { handleSubmit } = props
    return (
        <div>
            <main>
                <Topic /> 
                <HeaderText />
                <ContactInfo />
                <Guardians />
                <TableReservation />
                <Days />
                <Tournaments /> 
                <Food />
                <form onSubmit={handleSubmit}>
                    <SubmitButton  />
                </form>
            </main>
        </div>
    )
}

FillForm = reduxForm({
    form: 'contact'
})(FillForm)

export default FillForm;