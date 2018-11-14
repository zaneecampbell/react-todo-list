import React from 'react';

export default class AddItem extends React.Component {
    state = {
        itemToAdd: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const item = e.target.item.value.trim();
        this.props.handleUpdateList(item)
    }

    render() {
        return (
            <div>
                <form className='add-item' onSubmit={this.handleAddOption}>
                    <input type='text' name='item' autoComplete='off'/>
                    <button>Add To List</button>
                </form>
            </div>
        )
    }
}