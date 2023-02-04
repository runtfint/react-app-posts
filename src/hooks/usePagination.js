import { useMemo } from "react"

export const usePagination = (totalPages) => {

    const pagesArr = useMemo(() => {
		if (totalPages) {
			return Array(totalPages).fill().map((e, i) => i + 1)
		}
		return [1]
	}, [totalPages])
    
    return pagesArr;
}