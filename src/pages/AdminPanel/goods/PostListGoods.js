import React from 'react';
import { List, Datagrid, DeleteButton, TextField, EditButton } from 'react-admin';


const PostListGoods = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="model" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListGoods;