import { useEffect , useRef } from 'react'

export const useObserver = (ref, canLoad, isPostsLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
		if(isPostsLoading) return
		if(observer.current) observer.current.disconnect()

		var cb = (entries, observer) => {
			if(entries[0].isIntersecting && canLoad){
				callback()
			}
		}

		observer.current = new IntersectionObserver(cb)
		observer.current.observe(ref.current)

	}, [isPostsLoading])
}
