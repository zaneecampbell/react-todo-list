import React from 'react';
import List from './List';
import AddItem from './AddItem';

export default class ToDoList extends React.Component {
    state = {
        list: ['Walk the dog', 'Meal Prep', 'Work', 'Relax']
    }

    handleUpdateList = (item) => {
        this.setState(() => ({
            list: this.state.list.concat(item)
        }));
    }

    handleRemoveItem = (item) => {
        this.setState(() => ({
            list: this.state.list.filter((items) => item !== items)
        }));
    }

    render() {
        return (
            <div>
                <List list={this.state.list} handleRemoveItem={this.handleRemoveItem}/>
                <AddItem handleUpdateList={this.handleUpdateList}/>
            </div>
        )
    }
}