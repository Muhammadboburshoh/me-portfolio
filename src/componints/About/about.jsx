import { Link } from 'react-router-dom'

import "./about.css"
import MeImg from "../../images/meImg.jpg"
import Telegram from "../../images/telegram-app.svg"
import Github from "../../images/github.svg"
import Twitter from "../../images/twitter.svg"



function About () {

  return (
    <main className="about">
      <div className="container about__continer">
        <div className="about__lift">
          <p className="about__left-text">My name is <span className="about__me-name">Sharofov Muhammadbobur</span>, I am 19 years old. I currently live in Tashkent and study at the Najot Ta'lim training center.</p>
          <p className="about__left-text">During my studies, I created various websites. The main technologies I know are <span className="about__me-technologies">HTML, CSS, Bootstrap, Scss, JavaScript, NodeJS, Rest API Express, Postgres.</span></p>
          <p className="about__left-text">If you want to know more, write to my telegram: <br/><Link to="//t.me/MuhammadboburDeveloper" target="_blank" className="about__me-telegram">t.me/MuhammadboburDeveloper</Link></p>
          <p className="about__left-text">Subscribe to my social media blogs:</p>

          <div className="about__social_networks">
            <Link to="//t.me/MuhammadboburUz" target="_blank" className="about__social_network">
              <img className="about__social_networ-icon" src={Telegram} alt="social_networ-icon" />
            </Link>
            <Link to="//twitter.com/Muhamma_Bobur" target="_blank" className="about__social_network">
            <img className="about__social_networ-icon" src={Twitter} alt="social_networ-icon" />
            </Link>
            <Link to="//github.com/muhammadboburshoh" target="_blank" className="about__social_network">
            <img className="about__social_networ-icon" src={Github} alt="social_networ-icon" />
            </Link>
          </div>
        </div>

        <img className="about__me-img" src={MeImg} alt="Me img" width="400" />
      </div>

    </main>
  )
}

export default About