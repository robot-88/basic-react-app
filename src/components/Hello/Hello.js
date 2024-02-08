import React from "react";

const Hello =(props) =>{

    console.log('Props',props);

    //return React.createElement('div',{id : 'hello' ,className : 'dummyClass'} , React.createElement('h1',null,'Hello React'));
    return (
    <div>
    <h1>Hello {props.name} {props.heroName} </h1>
    {props.children}
    </div>
    )
}

export default Hello