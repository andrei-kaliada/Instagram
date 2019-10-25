import React,{ Component } from 'react';
import Posts from '../../components/Posts/Posts';
import Users from '../../components/Users/Users';


export default function Feed(){
    return(
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    );
}