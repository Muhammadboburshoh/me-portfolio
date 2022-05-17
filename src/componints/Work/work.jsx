import { Link } from 'react-router-dom';

import "./work.css"
import bookShopImg from "../../images/book-shop.png"
import chatApp from "../../images/chat-app.png"
import foodOrder from "../../images/food-order.png"
import foodDashboard from "../../images/food-dashboard.png"
import messageNode from "../../images/message-node.png"



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
              <p>This site dedicated to selling books, where you can buy books and advertise your own books for sale, there is also payment system.</p>
              <p>Technologies such as NodeJs, Express.js, MongoDb were used to build the site. Server Side Rendering.</p>
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
              <p>Realtime chat app designed to allow researchers in a specific programming language to share ideas and search for solutions together.</p>
              <p>Technologies such as NodeJs, Express.js, Socket.io were used to build the site. Server Side Rendering.</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/realtime_chat")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Github source</span></Link>
                <Link onClick={openTab("https://dev-community-chat.herokuapp.com")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Site link</span></Link>
              </div>
            </div>
          </li>
          <li className="work-item">
            <div className="work-img-wrapper">
              <img src={foodOrder} alt="" />
            </div>
            <div className="work-text-wrapper">
              <h3>Food Order</h3>
              <p>This site designed to take online orders from customers in kitchens. there is a separate dashboard for the chef to take orders from customers.</p>
              <p>Technologies such as NodeJs, Express.js, Socket.io, PosgreSQL were used to build the site. Client Side Rendering.</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/realtime_chat")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Server source</span></Link>
                <Link onClick={openTab("https://dev-community-chat.herokuapp.com")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Client source</span></Link>
              </div>
            </div>
          </li>
          <li className="work-item">
            <div className="work-img-wrapper">
              <img src={foodDashboard} alt="" />
            </div>
            <div className="work-text-wrapper">
              <h3>Food Order Dashboard</h3>
              <p>Was the dashboard of the site above.</p>
              <p>Technologies such as ReactJS were used to build the site. Client Side Rendering.</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/realtime_chat")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Github source</span></Link>
              </div>
            </div>
          </li>
          <li className="work-item">
            <div className="work-img-wrapper">
              <img src={messageNode} alt="" />
            </div>
            <div className="work-text-wrapper">
              <h3>Message Node</h3>
              <p>This platform designed for industry professionals to share their knowledge.</p>
              <p>Technologies such as NodeJs, Express.js, MongoDb were used to build the site. Client Side Rendering.</p>
              <div>
                <Link onClick={openTab("https://github.com/Muhammadboburshoh/realtime_chat")} to="" target="_blank" className="work-btn green-button github-btn"><span className="white-button-span">Github source</span></Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Work