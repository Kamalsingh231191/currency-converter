import React from 'react';
const Button = function(props){
    let buttonMsg = props.showHistory? 'Hide History' : 'Show History' ;
    return(
        <div className="row">
            <div className="col text-center">
                <button type="button" className="btn btn-primary" onClick={props.onClick} >{buttonMsg}</button>
            </div>
        </div>
    )
}
export default Button;