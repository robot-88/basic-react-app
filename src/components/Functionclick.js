import React from 'react'

function Functionclick() {
    function clickHandler() {
        console.log("This button is clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Functionclick
