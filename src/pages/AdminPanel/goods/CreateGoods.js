import React from 'react';
import {  NumberInput, Create, SimpleForm, TextInput} from 'react-admin';

const CreateGoods = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="price" />
                <TextInput source="model" />
                <TextInput source="composition" />
            </SimpleForm>
        </Create>
    );
};

export default CreateGoods;