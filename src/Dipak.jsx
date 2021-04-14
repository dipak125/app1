import React, {Component} from "react"

export default class Dipak extends Component
{
    constructor(props)
    {
        super(props);
    }
   render(){
       return(
           <div>
               <button onClick={this.props.increment}>click for incrememt</button>
               <h2>count: {this.props.count}</h2>
           </div>
       )
   }
}
