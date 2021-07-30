import FacebookIcon from '../../assets/social-icons/facebook-icon.png'
import TwitterIcon from '../../assets/social-icons/twitter-icon.png'
import InstagramIcon from '../../assets/social-icons/instagram-icon.png'
const Footer = () => {
    return (
        <footer>
            <img src={FacebookIcon} alt="facebook" width="50px" ></img>
            <img src={TwitterIcon} alt="twitter" width="50px"></img>
            <img src={InstagramIcon} alt="instagram" width="50px"></img>
            <p>Copyright Zoom Groom 2021</p>
        </footer>
    )
}

export default Footer