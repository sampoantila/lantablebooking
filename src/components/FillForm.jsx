import React from 'react';
import Topic from './fillform/Topic';
import ContactInfo from './fillform/ContactInfo';
import SubmitButton from './fillform/SubmitButton';
import ContactTest from './fillform/ContactTest';
import '../css/FillForm.css';
import { Field, reduxForm } from 'redux-form'

let FillForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <main>
                <Topic />
                <ContactInfo onSubmit={props.submit} />

                {/* <ContactTest onSubmit={props.submit} /> */}

                <div>
                    <button type="submit">Submit</button>
                </div>
            </main>
        </form>

    )
}

FillForm = reduxForm({
    form: 'contact'
})(FillForm)

export default FillForm;