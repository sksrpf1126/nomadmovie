import React, { useEffect } from 'react';

function Detail(props){
    console.log(props)
    console.log(props.location.state);
    useEffect(()=>{
        if(props.location.state === undefined){
            props.history.push('/');
        }
    },[])

    return(
        <span>{props.location.state.title}</span>
    );
}

export default Detail;