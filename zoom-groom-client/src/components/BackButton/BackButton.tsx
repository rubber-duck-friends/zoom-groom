import { useHistory } from 'react-router-dom'

const BackButton = () => {
    let history = useHistory()
    const handleClick = (e) => {
        e.preventDefault()
        history.goBack()
    }
    return (
        <button onClick={handleClick}>Back</button>
    )
}

export default BackButton