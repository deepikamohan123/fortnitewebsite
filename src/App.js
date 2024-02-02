
import './App.css';
import Fortnite from "./Images/fortnite.png"
import First from "./Images/1.png"
import Second from "./Images/2.png"
import Third from "./Images/3.png"
function App() {
  return (
    <div className="home-container">
      <div className="heading-section">
        <h1 classname="epic-games">
        Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
        </h1>
        </div>
        <div >
        <img src ={Fortnite} alt="" className="fortnite"/>
      </div>
      <div>
        <p1 className="paragraph">
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p1>
      </div>
      <div>
        <button className="visit">
          Visit Website
        </button>
      </div>
      <div className="first1">
        <img className="first-container" src={First} alt=""/>
        <div>
          <h2  className="first">
          Explore large, destructible environments where no two games are ever the same.
          </h2>
        </div>
        </div>
       
      <div className="second2">
        <img  className="second-container" src={Second} alt=""/>
        <div>
          <h3 className="second">
          Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
          </h3>
        </div>
        </div>
        <div className="third3">
        <img className="third-container" src={Third} alt=""/>
        <div>
          <h4 className="third">
          Discover even more ways to play across thousands of creator-made game genres
          </h4>
        </div>
        </div>
        <div >
          <h classname="conclusion">
          Our Contribution
          </h>
          <p2 className="our-core">
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
          </p2>
        </div>
        <div classname ="first-money-container">
       <div className="first-money">
       <h6>
       5M
       </h6>
       <p >
       Daily User Engagements 

       </p>
       </div>
       <div className="second-money">
       <h6>
       $500K
       </h6>
       <p >
       Revenue Surge for an
Platform
 

       </p>
       </div>
       <div className="third-money">
       <h6>
       10X
       </h6>
       <p >
       ROAS on all our 
marketing campaigns

       </p>
       </div>
      
        </div>
      </div>
      
  
  );
}

export default App;
