import React from 'react';
import Login from "./Login";
import Logout from "./Logout";
export default function LoginControl(props ) {
    if ( props.isLogin) {
            return(<Logout/>) 
        }else {
            return (<Login hvt={props.hvt}/>)
        }
}
