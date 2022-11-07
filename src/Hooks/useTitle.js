import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Excursion`;
    }, [title]);
}

export default useTitle;