import { useState } from "react";

const useCounter = () => {
    const [counterVal, setCounterVal] = useState(0);

    const increment = () => {
        setCounterVal(counterVal + 1);
    }

    return {counterVal, increment};
}

export default useCounter;
