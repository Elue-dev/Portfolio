import './Hero.scss'
import BackImg from '../../assets/frontend-development-img.png'

export default function Hero() {
  return (
    <div className='hero' style={{ background: `url(${BackImg})`, backgroundSize: 'cover' }}>
        <div className="hero_text">
            <h2>This space belongs to <br /><span>Elue Wisdom</span></h2>
            <p>I'm a Frontend Developer</p>
        </div>
    </div>
  )
}
