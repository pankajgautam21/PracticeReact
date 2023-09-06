import React,{useState} from "react";
function Form(props){
    const[text,setText]=useState("ENTER A WORD");
    const click=()=>
    {
      let newtext=text.toUpperCase();
      setText(newtext);
    }
    const lower=()=>
    {
      let newtext=text.toLowerCase();
      setText(newtext);
    }
    const change=(event)=>
    {
        setText(event.target.value);
    }
    const reset=()=>
    {
        setText("");
    }
    return(
      <div className="container">
        <h1>hii</h1>
        <p>{props.heading}</p>
        <div className="container mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={change}></textarea>
        </div>
    <button className="tn btn-primary  mx-3" onClick={click}>
        click here
        </button>
        <button className="tn btn-primary  mx-3" onClick={reset}>
        Reset
        </button>
        <button className="tn btn-primary  mx-3" onClick={lower}>
        Lowercase
        </button>
      </div>
    );
}
export default Form;