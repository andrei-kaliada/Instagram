import React from 'react';
import User from '../User/User';
import Palette from '../Palette/Palette';

const Profile = () => {
    return(
        <div className="container profile">
             <User  
                src="https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg"
                alt="user"
                name="Scott"
                />
            <Palette />
        </div>
    );
}

export default Profile;