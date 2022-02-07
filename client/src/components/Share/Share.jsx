import "./share.css";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Share = () => {
  return <div className="share-container">
      <div className="share-content-wrapper">
          <div className="share-content-top">
              <img className="share-profile-pic" src="/assets/images/profile-demo.jpg" alt="Profile pic"/>
              <input placeholder="Whatchu thinking about?..." className="share-input" />
          </div>
          <hr className="share-hr"/>
          <div className="share-content-bottom">
              <div className="share-options">
                  <div className="share-option">
                      <UploadFileIcon htmlColor="gold" className="share-icon"/>
                    <span className="share-option-text">Photo or Video</span>
                  </div>
              </div>
              <button className="share-btn">
                Share
              </button>
          </div>
      </div>
  </div>;
};

export default Share;
