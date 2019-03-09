import React from 'react';
import { reduxForm } from 'redux-form'

import { Form } from 'redux-form' // ES6


let SubmitButton = props => {
    // console.log("submit button")
    // const { handleSubmit } = props

    return (
        <div>
            <br />
            <br />

            <button input type="submit" className="positive massive ui button">Lähetä</button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

SubmitButton = reduxForm({
    // a unique name for the form
    form: 'contact'
})(SubmitButton)

export default SubmitButton