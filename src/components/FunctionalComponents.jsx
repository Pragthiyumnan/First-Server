import React from "react";
import {useState} from "react";

function FunctionalComponent (props){
    let [count,setCount] = useState(props.names[0].n);
    const change = () => {
      setCount(count+1);
      console.log(count);
    };
   let IDchange = (e) => {
     props.setid(e.target.value);
   }

    return (
      <div>    
      <button className="btn" onClick={change}>{count}</button>
       <p>This is a text from Functional Component</p>
       <h3>This is my ID No. Please dont copy it😐</h3>
       <input type="text" onChange={IDchange} style={{color:"black"}}/>
       <h5>{props.id}</h5>
      </div>
)
};

export default FunctionalComponent;