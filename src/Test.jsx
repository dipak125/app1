
import React, {Component} from "react"

export default class Test extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.incrementCounter}>click button</button>
                <h1>count:{this.props.count}</h1>
            </div>
        )
    }
}