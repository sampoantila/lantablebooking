import React from 'react';
import {field, reduxForm } from 'redux-form'

let SubmitButton = props => {
    // console.log("submit button")
    const { handleSubmit } = props

    return (
        // <center>
        <div>
            <form>
                <h1>ei toimii</h1>
            </form>
            {/* <form onSubmit={handleSubmit} id="name">
                <div>
                    <br />
                    <br />
                    <div>
                        <button type="submit">Lähetä</button>
                    </div>
                    {/* <button type="submit" className="positive massive ui button" form="name">Lähetä</button> */}
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            {/* </div> */}
            {/* <form /> */}
            {/* <form /> */}


        </div>
    )
}

SubmitButton = reduxForm({
    // a unique name for the form
    form: 'contact'
})(SubmitButton)

export default SubmitButton