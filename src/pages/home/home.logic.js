import { useState } from "react"

const useHome = () => {
    const [isIntroTextCollapsed, setIsIntroTextCollapsed] = useState(true);

    const toggleIntroText = () => {
        setIsIntroTextCollapsed(!isIntroTextCollapsed);
    }

    return {isIntroTextCollapsed, toggleIntroText};
}

export default useHome;
