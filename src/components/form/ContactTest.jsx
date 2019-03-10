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

            <form class="ui form" autocomplete="off" >
                <div class="four wide field">
                    <div class="ui black circular label"> <div class="textcolor"> <label>Etunimi</label></div></div>
                    <br></br>
                    <br></br>
                    <Field name="firstName" input type="text" component="input" type="text" placeholder="Etunimi" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>


            </form>
            <form class="ui form" autocomplete="off" >
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    {/* <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" /> */}
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </form>
    )
}

ContactTest = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactTest)

export default ContactTest