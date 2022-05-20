import React from 'react';
import {Datagrid, DeleteButton, TextField, EditButton, List } from 'react-admin';


const PostListOrders = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="price" />
                <TextField source="country" />
                <TextField source="city" />
                <TextField source="phone" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListOrders;