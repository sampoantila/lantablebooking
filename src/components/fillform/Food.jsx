import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Food = () => {
    return (
        <div>
            <br />
            <br />
            <div className="ui black massive circular label"><div className="textcolor">Ruoka</div></div>
            <br />
            <br />

            <div className="ui black compact message">
                <div className="textcolor"> <div className="header">
                    Ruokaa on tarjolla seuraavasti:
                    </div>
                </div>

                <div className="textcolor"><ul className="list">
                    <li>TO illalla lämmin ruoka (spagetti ja jauhelihakastike)</li>
                    <li>PE aamupala, lounas (nakit ja ranskalaiset) ja lämmin iltaruoka (pizzaa)</li>
                    <li>LA aamupala</li>
                    <li>Ruuan hinta on <strong>15€</strong> koko ajalle. Jos on mukana vain osan aikaa, hinta on <strong>10€.</strong></li>
                    <li>Jos järjestät jonkun peliturnauksen laneilla, saat ilmaisen ruuan. <p>Ota yhteyttä Sampoon (sivun alussa yhteystiedot).</p></li>

                </ul></div>
            </div>

            <br />
            <br />

            <div className="ui one column centered grid">
                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <Field name="iwantbuyfood" id="iwantbuyfood" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Haluan ostaa ruuan</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="allfoofgood" id="allfoofgood" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Kaikki käy</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="lactosefree" id="lactosefree" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Laktoositon</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div className="ui black circular label"><div className="textcolor">Gluteiiniton</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <input typeName="checkbox" />
                        <Field name="gluteinfree" id="gluteinfree" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Kasvis</div></div></label>
                    </div>
                </div>

                <div className="five column centered row">
                    <div className="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="otherfood" id="otherfood" component="input" type="checkbox" />
                        <label><div className="ui black circular label"><div className="textcolor">Muu</div></div></label>
                        <br/>
                        <div className="ui input"><Field name="otherfoodspec" type="text" component="input" placeholder="Mikä ruoka :-)" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Food = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Food)

export default Food
