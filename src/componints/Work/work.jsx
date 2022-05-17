import { Link } from 'react-router-dom';

import "./work.css"
import bookShopImg from "../../images/book-shop.png"
import chatApp from "../../images/chat-app.png"


function Work ({myRef}) {

  function openTab(url) {
    window.open(url);
  }

  return (
    <main className="work-main" ref={myRef}>
      <div className="container">
        <ul className="work-list">
          <li className="work-item">
            <div className="work-img-wrapper">
              <img src={bookShopImg} alt="" />
            </div>
            <div className="work-text-wrapper">
              <h3>Books Shop</h3>
              <p>A site dedicated to selling books, where you can buy books and advertise your own books for sale, there are also payment systems.</p>
              <p>Technologies such as NodeJs, Express.js, MongoDb were used to build the site. Server Side Rendering</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/book-shop-MongoDb")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Github source</span></Link>
                <Link onClick={openTab("https://books-shop-x.herokuapp.com")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Site link</span></Link>
              </div>
            </div>
          </li>
          <li className="work-item">
            <div className="work-img-wrapper">
              <img src={chatApp} alt="" />
            </div>
            <div className="work-text-wrapper">
              <h3>Dev Community</h3>
              <p>A realtime chat app designed to allow researchers in a specific programming language to share ideas and search for solutions together.</p>
              <p>Technologies such as NodeJs, Express.js, Socket.io were used to build the site. Server Side Rendering</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/realtime_chat")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Github source</span></Link>
                <Link onClick={openTab("https://dev-community-chat.herokuapp.com")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Site link</span></Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Work