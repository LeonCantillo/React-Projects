import iconGoBack from './assets/left-chevron.svg'
import './styles/GoBack.css'

const GoBack = () => {
    return(
        <a href='/' className='GoBack'><img src={iconGoBack} alt="go-back" /></a>
    )
}

export default GoBack