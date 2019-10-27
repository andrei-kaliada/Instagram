import React, { Component } from 'react';
import InstaService from '../../services/instaService';
import Error from '../Error/Error';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class Palette extends Component{

    InstaService = new InstaService();

     state = {
         error:false,
         photos:[],
         loading:true,
     }

     componentDidMount(){
         this.updatePhotos();
     }

     updatePhotos(){
         this.InstaService.getAllPhotos()
         .then(this.onPhotosLoaded)
         .catch(this.onError)
         
     }

     onPhotosLoaded = (photos) => {
        this.setState({
            error:false,
            photos,
            loading:false,
        })
    };

    onError = () => {
        this.setState({
            error:true
        })
    }

     renderItems(arr){
         return arr.map( (item) => {
             
            return(
                <img src={item.src} alt={item.alt}></img>
            );
         })
     }

    render(){

        const { photos, error, loading } = this.state;

        if(loading){
            return (
                <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1000} 
                />
            )

        }

        const items = this.renderItems(photos);
        return(
        <div className="palette">
            { !error ? items : <Error /> }
        </div>
        );
    }
}