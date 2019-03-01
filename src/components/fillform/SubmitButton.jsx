import React from 'react';
import { connect } from 'react-redux'

class SubmitButton extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <center><button class="positive massive ui button" type="submit" onClick={this.props.increment} >Lähetä</button></center>
                <br></br>
                <br></br>
            </div>
        )
    }
}

const mapDipachToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT", value: 1 }),
        //   decrement: () => dispatch({ type: "DECREMENT", value: 1 })
    };
};


export default connect(null, mapDipachToProps)(SubmitButton); 