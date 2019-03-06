import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Food = () => {
    return (
        <div>
            <br />
            <br />
            <div class="ui black massive circular label"><div class="textcolor">Ruoka</div></div>
            <br />
            <br />

            <div class="ui black compact message">
                <div class="textcolor"> <div class="header">
                    Ruokaa on tarjolla seuraavasti:
                    </div>
                </div>

                <div class="textcolor"><ul class="list">
                    <li>TO illalla lämmin ruoka (spagetti ja jauhelihakastike)</li>
                    <li>PE aamupala, lounas (nakit ja ranskalaiset) ja lämmin iltaruoka (pizzaa)</li>
                    <li>LA aamupala</li>
                    <li>Ruuan hinta on <strong>15€</strong> koko ajalle. Jos on mukana vain osan aikaa, hinta on <strong>10€.</strong></li>
                    <li>Jos järjestät jonkun peliturnauksen laneilla, saat ilmaisen ruuan. <p>Ota yhteyttä Sampoon (sivun alussa yhteystiedot).</p></li>

                </ul></div>
            </div>

            <br />
            <br />

            <div class="ui one column centered grid">
                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <Field name="iwantbuyfood" id="iwantbuyfood" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Haluan ostaa ruuan</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="allfoofgood" id="allfoofgood" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Kaikki käy</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="lactosefree" id="lactosefree" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Laktoositon</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" name="example" />
                        <label><div class="ui black circular label"><div class="textcolor">Gluteiiniton</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="gluteinfree" id="gluteinfree" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Kasvis</div></div></label>
                    </div>
                </div>

                <div class="five column centered row">
                    <div class="column ui checkbox">
                        <input type="checkbox" />
                        <Field name="otherfood" id="otherfood" component="input" type="checkbox" />
                        <label><div class="ui black circular label"><div class="textcolor">Muu</div></div></label>
                        <br/>
                        <div class="ui input"><Field name="otherfoodspec" type="text" component="input" placeholder="Mikä ruoka :-)" /></div>
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
