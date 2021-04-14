
import { render } from "@testing-library/react";
import React, {Component} from "react"
import Test from "./Test"

export default class App extends Component
{
    constructor(){
      super();
      this.state = {
        count:6
      };
      this.name="diapk";
    }
    display=()=>{
      return (<h1>{this.name}</h1>)
    }
    
    incrementCounter=()=>{
      console.log("increment");
        this.setState({
          count: this.state.count+1
        })
    }
    render(){
      return(
        <div>
          {this.display()}
          <Test count={this.state.count} incrementCounter={this.incrementCounter}/>
        </div>
      )
    }
}