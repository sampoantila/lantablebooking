import React from 'react';
import Topic from './form/Topic';
import HeaderText from './form/HeaderText';
import ContactInfo from './form/ContactInfo';
import Guardians from './form/Guardians';
import TableReservation from './form/TableReservation';
import '../css/Form.css';
import { reduxForm } from 'redux-form'
import Days from './form/Days';
import Tournaments from './form/Tournaments';
import Food from './form/Food';
import SubmitButton from './form/SubmitButton';

let Form = props => {
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

Form = reduxForm({
    form: 'contact'
})(Form)

export default Form;