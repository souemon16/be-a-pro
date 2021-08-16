import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {UserContext} from '../../App';

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    
    useEffect(() => {
        fetch('/logout', {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
        }).then(res => {
            dispatch({type:"USER", payload: false})
            history.push('/sign-in', { replace: true })
            if(res.status != 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error);
        })
    })

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default Logout
