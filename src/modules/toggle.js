import { useState } from "react"

const useToggle = (initial) => {
    const [isOn, setIsOn] = useState(initial);

    const toggle = () => {
        setIsOn(!isOn);
    }

    return {isOn, toggle};
}

export default useToggle;