import React, {Component} from 'react';
import Table from './Table';

class TableGroup extends Component {
    render() {
        var contentClass = " table-group-content-left";

        if (this.props.right) {
            contentClass = " table-group-content-right";
        }

        return <div className="table-group">
            <div className={"table-group-content" + contentClass}>
                <div className="table-group-label">{this.props.name}</div>
                <Table groupName={this.props.name} number="1" booked={this.props.booked} />
                <Table groupName={this.props.name} number="2" booked={this.props.booked} />
                <Table groupName={this.props.name} number="3" booked={this.props.booked} />
                <Table groupName={this.props.name} number="4" booked={this.props.booked} />
                <br/>
                <Table groupName={this.props.name} number="5" flip booked={this.props.booked} />
                <Table groupName={this.props.name} number="6" flip booked={this.props.booked} />
                <Table groupName={this.props.name} number="7" flip booked={this.props.booked} />
                <Table groupName={this.props.name} number="8" flip booked={this.props.booked} />
            </div>
        </div>;
    }
}

export default TableGroup;