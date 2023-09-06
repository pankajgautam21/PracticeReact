import React from "react";
import Person from './person';
import Student from './Student';
function second()
{
    return(
        <div>
        <h1>hii,this is 2nd page</h1>
        <Person />
        <Student />
        <a href="./first.js">Click</a>
        </div>    
    );
}
export default second;