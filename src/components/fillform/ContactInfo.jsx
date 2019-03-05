import React from 'react';
import { Field, reduxForm } from 'redux-form'

let ContactInfo = () => {
    return (
        <div>
            <center>

                <br />
                <br />
                <div class="ui black massive circular label"><div class="textcolor"> Yhteystiedot</div></div>
                <br />
                <br />

                <form class="ui form" autocomplete="off" >
                    <div class="two wide field">
                        <div class="ui black circular label"> <div class="textcolor"> <label>Etunimi</label></div></div>
                        <br />
                        <br />
                        <Field name="firstName" type="text" component="input" placeholder="Etunimi" />
                    </div>

                    <div class="two wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Sukunimi</label></div> </div>
                        <br />
                        <br />
                        <Field name="lastName" type="text" component="input" placeholder="Sukunimi" />
                    </div>

                    <div class="two wide field">
                        <div class="ui black circular label"><div class="textcolor"> <label>Sähköposti</label></div> </div>
                        <br />
                        <br />
                        <label htmlFor="email"></label>
                        <Field name="email" component="input" type="email" placeholder="Sähköposti" />
                    </div>

                    <div class="two wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Puhelinnumero</label></div></div>
                        <br />
                        <br />
                        <Field name="phoneNumber" component="input" type="text" placeholder="Puhelinnumero" />
                    </div>
                </form>
            </center>
        </div>
    )
}

ContactInfo = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactInfo)

export default ContactInfo
