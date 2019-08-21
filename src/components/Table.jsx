import React, { Component } from 'react';
import "../css/Table.css";
import classNames from 'classnames';

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
        var tableClasses = classNames('table', {'upside-down': this.props.flip});
        var tableNumberClass = classNames('table-normal', 'table-part', {'upside-down': this.props.flip});
        var buttonClass = classNames('table-button', { 'table-booking': this.props.booking === this.props.location },
            { 'table-free': !this.state.booked }, { 'table-booked': this.state.booked });

        return <div className={tableClasses}>
            <div />
            <div className="table-part table-chair" />
            <div />
            <div>
                <button className={buttonClass} onClick={this.onTableClick}>
                    <div className={tableNumberClass} >
                        {this.props.location}
                    </div>
                </button>
            </div>
        </div>;
    }
}

export default Table;