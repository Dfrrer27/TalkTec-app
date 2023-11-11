import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar";
import { Helmet } from "react-helmet"
import "./styles/home-styles.css"
import { comments, feedOne, feedTwo, feeling, likeBlue, liveVideo, photo, profile, share } from "../ImportImages"

const HomePage = () => {
  return (
    <div className="container-home">

      <Helmet>
        <title>TalkTec | Home</title>
      </Helmet>
      
      <LeftSidebar />

      <div className="main-content">

        <div className="write-post-container">
            <div className="user-profile">
                <img src={profile} />
                <div>
                    <p>Diego Ferrer</p>
                    <small>Public</small>
                </div>
            </div>

            <div className="post-input-container">
                <textarea rows="3" placeholder="What's on your mid, Jhon"></textarea>
                <div className="add-post-links">
                    <a href="#"><img src={liveVideo} />Live video</a>
                    <a href="#"><img src={photo} />Photo/Video</a>
                    <a href="#"><img src={feeling} />Feeling/Activity</a>
                </div>
            </div>

        </div>

        <div className="post-container">
            <div className="post-row">
                <div className="user-profile">
                    <img src={profile} />
                    <div>
                        <p>Diego Ferrer</p>
                        <span>Octubre 19 2023, 3:30 pm</span>
                    </div>
                </div>
                <a href="#"></a>
            </div>
            
            <p className="post-text">Ya se acerca el T&C WEEK
                <br />
                <a href="#">#Tecsup</a> <a href="#">#SoyunFrontend</a> <a href="#">#T&CWEEK</a>
            </p>
                <img src={feedOne} className="post-img" />

                <div className="post-row">
                    <div className="activity-icons">
                        <div><img src={likeBlue} />120</div>
                        <div><img src={comments} />45</div>
                        <div><img src={share} />20</div>
                    </div> 
                </div>
        </div>

        <div className="post-container">
            <div className="post-row">
                <div className="user-profile">
                    <img src={profile} />
                    <div>
                        <p>Benjamín Veli Mariano</p>
                        <span>Octubre 25 2023, 11:30 am</span>
                    </div>
                </div>
                <a href="#"></a>
            </div>
            
            <p className="post-text">Tecnología digital va  ganando en la mayoría de juegos de gymkana.
                <br /> 
                <a href="#">#Tecsup</a> <a href="#">#Asistirporlospuntos</a> <a href="#">#ArribaTD</a><a href="#">#T&CWEEK</a>
            </p>
                <img src={feedTwo} className="post-img" />

                <div className="post-row">
                    <div className="activity-icons">
                        <div><img src={likeBlue} />120</div>
                        <div><img src={comments} />45</div>
                        <div><img src={share} />20</div>
                    </div> 
                </div>
        </div>



      </div>

      <RightSidebar />

    </div>
  )
}

export default HomePage