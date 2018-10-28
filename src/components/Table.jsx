import React, { Component } from 'react';
import "../css/Table.css";
import tableservice from '../service/tableservice';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booked: false,
            location: ""
        }
    }

    componentWillMount() {
        this.setState({location: this.props.groupName + this.props.number});
    }

    onTableClick = (value) => {
        console.log(value);
        var booked = tableservice.toggleBooking(value);
        this.setState({booked: booked});
    }

    render() {
        var tableClasses = "table";
        var tableNumberClass = "";

        if (this.props.flip) {
            tableClasses += " upside-down";
            tableNumberClass += " upside-down";
        }

        var tableBooked = "table-free";
        if (this.state.booked)
        {
            tableBooked = "table-booked";
        }

        return <div className={tableClasses}>
            <div />
            <div className="table-part table-chair" />
            <div />
            <div>
                <button className={"table-button " + tableBooked} onClick={this.onTableClick}>
                    <div className={"table-normal table-part" + tableNumberClass} >
                        {this.state.location}
                    </div>
                </button>
            </div>
        </div>;
    }
}

export default Table;