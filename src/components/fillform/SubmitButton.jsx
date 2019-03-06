import React from 'react';
import { Field, reduxForm } from 'redux-form'

let SubmitButton = props => {
    console.log("submit button")
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <br />
                <br />
                {/* <button type="submit">Submit</button> */}
                <center><button class="positive massive ui button" type="submit">Lähetä</button></center>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </form>
    )
}

SubmitButton = reduxForm({
    // a unique name for the form
    form: 'contact'
})(SubmitButton)

export default SubmitButton