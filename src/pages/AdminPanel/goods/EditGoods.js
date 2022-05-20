import React from 'react';
import {Edit, SimpleForm, TextInput, ImageInput, NumberInput} from 'react-admin'


const EditGoods = (props) => {
    return (
        <Edit title={'Изменить продукт'} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <NumberInput source="price" />
                <TextInput  source="composition" />
            </SimpleForm>
        </Edit>
    );
};

export default EditGoods;