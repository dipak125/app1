import React from "react";
import * as tab from "./Calc";

function App3()
{
    return (
        <>
            <h1>sum is {tab.add(40,4)}</h1>
            <h1>sub is {tab.sub(40,4)}</h1>
            <h1>mult is {tab.mult(40,4)}</h1>
            <h1>div is {tab.div(40,7)}</h1>
        </>
    );
}
export default App3;