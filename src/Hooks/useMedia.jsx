import React from 'react'

const useMedia = (media) => {
    const [match, setMatch] = React.useState(null)
    React.useEffect(() => {
        function handleMatch() {
            const { matches } = window.matchMedia(media)
            setMatch(matches)
        }
        handleMatch()
        window.addEventListener('resize', handleMatch)
        return () => {
            window.removeEventListener('resize', handleMatch)
        }
    }, [media])
    return match
}

export default useMedia