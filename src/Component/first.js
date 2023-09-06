import React from "react";
import Person from './person';
import Student from './Student';;
function First()
{
    return(
        <div>
        <h1>hii,this is first page</h1>
        <Person />
        <Student />
        <a href="second.js">Click</a>
        </div>    
    );
}
export default First;