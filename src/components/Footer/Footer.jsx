import twIcon from '../../assets/footer-icons/twitter.png'
import fbIcon from '../../assets/footer-icons/facebook.png'
import igIcon from '../../assets/footer-icons/instagram.png'
import ghIcon from '../../assets/footer-icons/github.png'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <a href='https://twitter.com/crisxchan' target='_blank'>
                <img className='footer-img' src={twIcon} />
            </a>
            <a href='https://www.facebook.com/tian179/' target='_blank'>
                <img className='footer-img' src={fbIcon} />
            </a>
            <a href='https://www.instagram.com/crisxxchan/' target='_blank'>
                <img className='footer-img' src={igIcon} />
            </a>
            <a href='https://github.com/crisxchan' target='_blank'>
                <img className='footer-img' src={ghIcon} />
            </a>
        </footer>
    )
}