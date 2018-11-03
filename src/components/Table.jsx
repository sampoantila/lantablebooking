import React, { Component } from 'react';
import "../css/Table.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booked: false
        }
    }

    componentWillReceiveProps(nextProps) {
        var isBooked = nextProps.booked.includes(this.props.location);
        this.setState({ booked: isBooked});
    }

    onTableClick = () => {
        if (this.state.booked === false) {
            this.props.toggle(this.props.location);
        }
        if (this.props.location === this.props.booking) {
            this.props.toggle(this.props.location);
        }
    }

    render() {
        var tableClasses = "table";
        var tableNumberClass = "";

        if (this.props.flip) {
            tableClasses += " upside-down";
            tableNumberClass += " upside-down";
        }

        if (this.props.right)
        {
            tableNumberClass = "";
        }

        if (this.props.right && this.props.flip === undefined)
        {
            tableNumberClass += " upside-down";
        }

        if (this.props.rowstart && this.props.right) {
            tableClasses += " table-rowstart-right";
        }
        else if (this.props.rowstart) {
            tableClasses += " table-rowstart";
            tableNumberClass += " upside-down";
        }

        var tableBooked = "table-free";
        if (this.state.booked)
        {
            tableBooked = "table-booked";
        }

        if (this.props.booking === this.props.location) {
            // logged user booking here
            tableBooked = "table-booking";
        }

        return <div className={tableClasses}>
            <div />
            <div className="table-part table-chair" />
            <div />
            <div>
                <button className={"table-button " + tableBooked} onClick={this.onTableClick}>
                    <div className={"table-normal table-part" + tableNumberClass} >
                        {this.props.location}
                    </div>
                </button>
            </div>
        </div>;
    }
}

export default Table;