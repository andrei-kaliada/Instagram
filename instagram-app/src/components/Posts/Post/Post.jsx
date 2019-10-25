import React, { Component } from 'react';
import User from '../../User/User';

export default class Post extends Component{

    render(){

        const { name, altname, photo, src, descr ,id, alt } = this.props;
        return(
            <div key={id} className="post">
                 <User  
                    src={photo}
                    alt={altname}
                    name={name}
                    min
                />
                 <img src={src} alt ={alt}></img>
                 <div className="post__name">
                    {name}
                 </div>
                 <div className="post__descr">
                    {descr}
                 </div>
            </div>
        );
    }
}