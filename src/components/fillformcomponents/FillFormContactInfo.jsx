import React, { Component } from 'react';

const FillFormContactInfo = ({ firstName, lastName, email, phoneNumber, combHandleChangeFirstName, combHandleChangeLastName, combHandleChangeEmail, combHandleChangePhoneNumber }) => {

    console.log("FillFormContactInfo works")

    return (
        <div>
            <br></br>
            <br></br>
            <div class="ui black massive circular label"><div class="textcolor"> Yhteystiedot</div></div>
            <br></br>
            <br></br>

            <form class="ui form">
                <center> <div class="four wide field">
                    <div class="ui black circular label"> <div class="textcolor"> <label>Etunimi</label></div></div>
                    <br></br>
                    <br></br>
                    <input type="text" name="first-name" placeholder="Etunimi" value={firstName} onChange={combHandleChangeFirstName} />
                </div>

                    <div class="four wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Sukunimi</label></div> </div>
                        <br></br>
                        <br></br>
                        <input type="text" name="last-name" placeholder="Sukunimi" value={lastName} onChange={combHandleChangeLastName} />
                    </div>

                    <div class="four wide field">
                        <div class="ui black circular label"><div class="textcolor"> <label>Sähköposti</label></div> </div>
                        <br></br>
                        <br></br>
                        <input type="text" name="email" placeholder="Sähköposti" value={email} onChange={combHandleChangeEmail}  />
                    </div>

                    <div class="four wide field">
                        <div class="ui black circular label"> <div class="textcolor"><label>Puhelinnumero</label></div></div>
                        <br></br>
                        <br></br>
                        <input type="text" name="phoneNumber" placeholder="Puhelinnumero" value={phoneNumber} onChange={combHandleChangePhoneNumber}  />
                    </div></center>
            </form>
        </div>
    )
}

export default FillFormContactInfo;