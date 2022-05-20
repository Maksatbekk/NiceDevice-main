import React from 'react';
import './adminPanel.css'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListGoods from "./goods/PostListGoods";
import PostListUsers from "./users/PostListUsers";
import EditUsers from "./users/EditUsers";
import CreateUsers from "./users/CreateUsers";
import EditGoods from "./goods/EditGoods";
import CreateGoods from "./goods/CreateGoods";

const AdminPanel = () => {
    return (
        <section className='adminPanel'>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource create={CreateGoods} edit={EditGoods} name="goods" list={PostListGoods}/>
                <Resource create={CreateUsers} edit={EditUsers} name="users" list={PostListUsers}/>

            </Admin>
        </section>
    );
};

export default AdminPanel;