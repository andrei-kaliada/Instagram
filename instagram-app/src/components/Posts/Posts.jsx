import React, { Component } from 'react';
import InstaService from '../../services/instaService';
import Error from '../Error/Error';
import Post from './Post/Post';


export default class Posts extends Component{

    InstaService = new InstaService();

    state = {
        posts:[],
        error: false
    }

    componentDidMount(){
        this.updatePosts();
    }

    updatePosts(){
        this.InstaService.getAllPosts()
        .then( data => this.onPostsLoaded(data))
        .catch(error => this.onError(error))
        }
    


    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error:false,
        })

        console.log(this.state.posts);
    };

    onError = (err) => {
        this.setState({
            error:true
        })
    }


    renderItems(arr){
        return arr.map( item => {
            const { name, altname, photo, src, descr ,id, alt} = item;
            return (
            <Post
                src={src}
                alt={altname}
                name={name}
                photo={photo}
                descr={descr}
                id={id}
                alt={alt}
            />
            );
        });
    }

    render(){
        const { error, posts} = this.state;

        const items = this.renderItems(posts);
        return(
            <div className="left">
                { !error ? items : <Error />}
            </div>
        );
    }
}