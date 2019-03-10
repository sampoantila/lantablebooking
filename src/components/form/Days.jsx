import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Days = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div className="ui black massive circular label"><div className="textcolor">Osallistumispäivät</div></div>
            <br />
            <br />

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="days1"
                            id="days1"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">torstai - perjantai </div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field
                            name="days2"
                            id="days2"
                            component="input"
                            type="checkbox"
                        />
                        <label><div className="ui black circular label"><div className="textcolor">perjantai - lauantai</div></div></label>
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
