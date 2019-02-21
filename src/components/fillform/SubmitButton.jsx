import React from 'react';
import { connect } from 'react-redux'

const SubmitButton = ({}) => {

    return (
        <div>
            <br></br>
            <br></br>
            <center><button class="positive massive ui button" type="submit" onClick={buttonPress} >Lähetä</button></center>
            <br></br>
            <br></br>
        </div>
    )
}

const mapStateToProps = state => ({
    buttonPress: state.buttonPress
});

export default connect(mapStateToProps)(SubmitButton); 