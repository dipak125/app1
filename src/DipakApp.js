import React, {Component} from "react"
import Dipak from "./Dipak"


export default class DipakApp extends Component
{
    constructor()
    {
        super();
        this.state={
            count: 0
           
        }
        this.name="incrementing";
    }
    display=()=>{
        return <h1>{this.name}</h1>
    }
    increment=()=>{
        this.setState({
            count: this.state.count+1
            
        })
    }
    render(){
        return(
           <div>
               {this.display()}
               <Dipak count={this.state.count}increment={this.increment}/>
           </div>

        )
    }
}
