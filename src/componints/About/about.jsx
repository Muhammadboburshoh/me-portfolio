import { Link } from 'react-router-dom'
import "./about.css"
import MeImg from "../../images/meImg.jpg"
import Telegram from "../../images/telegram-app.svg"
import Github from "../../images/github.svg"



function About ({myRef}) {

  return (
    <main ref={myRef} id='about' className="about">
      <div className="container about__continer">
        <div className="about__lift">
          <p>
            Name: <span className="about__left-text">Bobur Sharopov, son of Abdulatif <br /></span> 
            Date of birth: <span className="about__left-text"> 20.01.2002 <br /></span>
            Profession: <span className="about__left-text">Backend (NodeJS)<br /></span><br />
          </p>
          <p className="about__left-text">I am a backend programmer in the <span className="about__me-name">JavaScript</span> programming language. I use <span className="about__me-name">NodeJS</span> technology in the backend.</p>
          <p className="about__left-text">The main technologies I know are <span className="about__me-technologies">HTML, CSS, JavaScript, TypeScript, NodeJS, Express.JS, Postgres, MongoDB.</span></p>

          <div className="about__social_networks">
            <Link to="//t.me/nodedeveloper" target="_blank" className="about__social_network">
              <img className="about__social_networ-icon" src={Telegram} alt="social_networ-icon" />
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