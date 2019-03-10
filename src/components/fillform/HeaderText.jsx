import React from 'react'

const HeaderText = () => {
    return (
        <div>
            <br />
            <br />
            <div className="ui black compact message">
                <div className="header">
                    AsLANien tiedot
                </div>
                <ul className="list">
                    <li><b>Ajankohta:</b> torstai xx.xx. - lauantai xx.xx.20xx</li>
                    <li><b>Osoite:</b> Palo-ojantie 1, 05810 Hyvinkää </li>
                    <li><b>Lisätietoa:</b> xxx xxxxxxxx / nn.nn@nnnnnn.com</li>
                    <li><b>Järjestäjä:</b> Hyvinkään helluntaiseurakunta</li>
                    <li><b>Lisätietoa:</b><a href=" http://bit.ly/aslan-info"> http://bit.ly/aslan-info</a></li>
                    <li><b>Aloitus:</b> Ovet aukeavat torstaina viimeistään klo 17:00. Varsinainen ohjelma alkaa klo 19:00. </li>
                    <li><b>Lopetus:</b> Lauantaina lopetellaan noin klo 14:00, mutta ovet ovat auki vähintään klo 18:00 asti. </li>
                    <li><b>Tapahtuma on K13 ja päihteetön</b></li>
                    <li>Sisäänpääsy on ilmainen, vain ruoka maksaa, jos sen haluaa ostaa.</li>
                    <li>Tiedot kerätään vain tapahtuman valmistelua varten<p> ja tiedot poistetaan tapahtuman jälkeen.</p>Vain sähköpostiosoitteet säilytetään seuraaviin laneihin kutsumista varten.</li>
                    <h3>Tapahtuma on 48h! Varaudu yövarusteilla!</h3>
                    <p>Meillä on useita tiloja yöpymiselle, tytöille ja pojille erikseen. Jotain patjaa tai pehmeähköä penkkiä löytyy,</p>
                    <p>mutta halutessasi voit tuoda oman patjan/ilmapatjan yms. jos haluat ja makuupussi/peitto yms. yöpymistarvikkeet.</p>
                    <p>Pari suihkuakin on käytettävissä.</p>
                </ul>
            </div>
        </div>
    )
}

export default HeaderText
