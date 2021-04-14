import React, {Component} from "react"
import Dipak1 from "./Dipak1"

export default class DipakApp1 extends Component
{
    constructor()
    {
        super();
        this.state ={
            count:0
        }
        this.name="decrementing ";
    }
    display=()=>{
        return <h1>{this.name}</h1>
    }
    decrement=()=>{
        this.setState({
            count: this.state.count-1
        })

    }
    render(){
        return(
            <div>
            {this.display()}
            <Dipak1 count={this.state.count} decrement={this.decrement}/>
            </div>
        )
    }
}