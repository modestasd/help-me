import React, {useState, useMemo} from 'react'
import {Button, Input} from 'src/components/common';

const hugeCalculation = (calculationProperty: number) => {
    console.log('Entered first')
    return `Amazing first ${calculationProperty}`;
};

const hugeCalculationWithMemo = (calculationProperty: number) => {
    console.log('Entered second')
    return `Amazing second ${calculationProperty}`;
};

const UseCallbackContainer = () => {
    const [count, setCount] = useState(0);
    const [,setName] = useState('');

    const calculationResult = hugeCalculation(count);
    const memoizedCalculationResult = useMemo(() => hugeCalculationWithMemo(count),[count]);

    return (
        <div>
            <Button onClick={()=>setCount(prev=> prev + 1)}>Increment</Button>
            Counter value = {count}

            <Input onChange={(e)=>setName(e.currentTarget.value)}/>
            <p>result: {calculationResult}</p>
            <p>result 2: {memoizedCalculationResult}</p>
        </div>
    )
}

export default UseCallbackContainer;
