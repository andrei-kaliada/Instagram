import React from 'react';
import User from '../User/User';

const Users = () => {

    return(
        <div className="right">
            <User  
                src="https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg"
                alt="user"
                name="Scott"
                
                />
                <div className="users__block">
                    <User  
                    src="https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg"
                    alt="user"
                    name="Scott"
                    min
                    />
                    <User  
                src="https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg"
                alt="user"
                name="Scott"
                min
                />
                <User  
                src="https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg"
                alt="user"
                name="Scott"
                min
                />
                
                </div>
        </div>
    );
}

export default Users;