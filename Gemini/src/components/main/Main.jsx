import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Chitransh</span>
                </p>
                <p>How can i help you today?</p>
              </div>
              <div className="cards">
                <div
                  onClick={()=>onSent(
                    "Suggest beautiful plases to see on an upcoming road trip"
                  )}
                  className="card"
                >
                  <p>
                    Suggest beautiful plases to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div
                  onClick={()=>onSent(
                    "Briefly summariz this concept: urban plannig"
                  )}
                  className="card"
                >
                  <p>Briefly summariz this concept: urban plannig</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div
                  onClick={()=>onSent(
                    "Brainstorm team bonding activities for our work retreat"
                  )}
                  className="card"
                >
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div
                  onClick={()=>onSent(
                    "Improve the readability of the following code"
                  )}
                  className="card"
                >
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter prompt here"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccrate info, including about people, so
              double its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
