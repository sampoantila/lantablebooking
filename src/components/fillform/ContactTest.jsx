import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactTest = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <div class="ui black massive circular label"><div class="textcolor"> Yhteystiedot</div></div>
            <br></br>
            <br></br>

            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            {/* <button type="submit">Submit</button> */}
        </form>
    )
}

ContactTest = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactTest)

export default ContactTest