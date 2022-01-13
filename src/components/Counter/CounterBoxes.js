import React from "react";
import CounterBox from "./CounterBox";

const CounterBoxes = (props) => {
    const displayBoxes = () => {
        const output = [];
        for (let count = 0; count < props.count; count++) {
        output.push(
            <CounterBox count={count+1} key={count} />
        )
    }
    return output;

    }

    return (
        <div style={{
        display: 'flex',
        flexDirection: "row",
        flex: 1,
        flexWrap: 'wrap'
    }}>
    {displayBoxes()}
    </div>
    )
}    

export default CounterBoxes;
