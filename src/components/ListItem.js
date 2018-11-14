import React from 'react';

const ListItem = (props) => (
    <div>
        <p>{props.count}. {props.itemText}</p>
        <button onClick={(e) => {props.handleRemoveItem(props.itemText)}}>Remove Item</button>
    </div>
)

export default ListItem;