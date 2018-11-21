import React from 'react';
import List from './List';
import AddItem from './AddItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const style = {
    paddingLeft: 80,
    paddingRight: 80,
    paddingBottom: 20,
    marginBottom: 20
}

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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography variant='h3'>
                        <Paper style={style}>
                            <List list={this.state.list} handleRemoveItem={this.handleRemoveItem} />
                        </Paper>
                        <AddItem handleUpdateList={this.handleUpdateList} />
                    </Typography>
                </Grid>
            </div>
        )
    }
}