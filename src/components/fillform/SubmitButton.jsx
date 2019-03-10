import React from 'react';
import { reduxForm } from 'redux-form'

let SubmitButton = () => {

    return (
        <div>
            <br />
            <br />

            <button type="submit" className="positive massive ui button" block="true">Lähetä</button>

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
    form: 'contact'
})(SubmitButton)

export default SubmitButton