import React from 'react';
import { Field, reduxForm } from 'redux-form'

let ContactInfo = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <div class="ui black massive circular label"><div class="textcolor"> Yhteystiedot</div></div>
            <br></br>
            <br></br>


            <form class="ui form" autocomplete="off" >
                <center>
                    <div class="four wide field">
                        <div class="ui black circular label"> <div class="textcolor"> <label>Etunimi</label></div></div>
                        <br></br>
                        <br></br>
                        <Field name="firstName" input type="text" component="input" type="text" placeholder="Etunimi" />
                    </div>

                    <div class="four wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Sukunimi</label></div> </div>
                        <br></br>
                        <br></br>
                        <Field name="lastName" input type="text" component="input" type="text" placeholder="Sukunimi" />
                    </div>

                    <div class="four wide field">
                        <div class="ui black circular label"><div class="textcolor"> <label>Sähköposti</label></div> </div>
                        <br></br>
                        <br></br>
                        <Field name="email" input type="text" component="input" type="text" placeholder="Sähköposti" />
                    </div>

                    <div class="four wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Puhelinnumero</label></div></div>
                        <br></br>
                        <br></br>
                        <Field name="phoneNumber" input type="text" component="input" type="text" placeholder="Puhelinnumero" />
                    </div>
                </center>
            </form>
        </form>
    )
}

ContactInfo = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactInfo)

export default ContactInfo
