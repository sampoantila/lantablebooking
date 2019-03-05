import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Days = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div class="ui black massive circular label"><div class="textcolor">Osallistumispäivät</div></div>
            <br />
            <br />

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="days1"
                            id="dats1"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">torstai - perjantai </div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field
                            name="days2"
                            id="days2"
                            component="input"
                            type="checkbox"
                        />
                        <label><div class="ui black circular label"><div class="textcolor">perjantai - lauantai</div></div></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

Days = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Days)

export default Days
