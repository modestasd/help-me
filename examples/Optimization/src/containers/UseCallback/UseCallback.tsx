import React, {useState, useCallback} from 'react'
import {Button} from 'src/components/common';

const withoutCallBackSet = new Set<()=>void>();
const withCallBackSet = new Set<()=>void>();

const UseCallbackContainer = () => {
    const [count, setCount] = useState(0);

    const incrementByOne = () => {
        setCount((prev) => prev + 1);
    };

    const incrementByThree = useCallback(() => {
        setCount((prev) => prev + 3);
    },[]);

    withoutCallBackSet.add(incrementByOne);
    withCallBackSet.add(incrementByThree);

    return (
        <div>
            <Button onClick={incrementByOne}>Increment by one</Button>
            <Button onClick={incrementByThree}>Increment by three</Button>
            counter = {count}

            <p>without callback size: {withoutCallBackSet.size}</p>
            <p>with callback size: {withCallBackSet.size} </p>

        </div>
    )
}

export default UseCallbackContainer;
