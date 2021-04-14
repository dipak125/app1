import React, {Component} from "react"

export default class Dipak1 extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.decrement}>click for decrementing</button>
                <h2>count: {this.props.count}</h2>
            </div>
        )
    }
}

