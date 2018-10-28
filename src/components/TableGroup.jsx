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
                <Table groupName={this.props.name} number="1" />
                <Table groupName={this.props.name} number="2" />
                <Table groupName={this.props.name} number="3" />
                <Table groupName={this.props.name} number="4" />
                <br/>
                <Table groupName={this.props.name} number="5" flip />
                <Table groupName={this.props.name} number="6" flip />
                <Table groupName={this.props.name} number="7" flip />
                <Table groupName={this.props.name} number="8" flip />
            </div>
        </div>;
    }
}

export default TableGroup;