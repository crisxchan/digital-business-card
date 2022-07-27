import profilePic from '../../assets/self.jpg'
import mailIcon from '../../assets/Mail.png'
import linkedInIcon from '../../assets/linkedin.png'
import './info.css'

export default function Info() {
    return (
        <div id='info'>
            <img src={profilePic} className='profile-picture' alt='Profile Picture' />
            <h1>Christian Gonzales</h1>
            <h4 className='career'>Frontend Developer</h4>
            <h6>chrisgonzales.online@gmail.com</h6>

            <nav>
                <button id='email'>
                    <img src={mailIcon} />
                    <h4>Email</h4>
                </button>
                <button id='linkedin'>
                    <img src={linkedInIcon} />
                    <h4>LinkedIn</h4>
                </button>
            </nav>
        </div>
    )
}