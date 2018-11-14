import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
    <div>
        <div>
            <h1>List App</h1>
        </div>

        {props.list.length === 0 && <p>Add something to the List</p>}
        {
            props.list.map((item, index) => (
                <ListItem
                key={index + 1}
                itemText={item}
                count={index + 1}
                handleRemoveItem={props.handleRemoveItem}
                />
            ))
        }
    </div>
);

export default List;