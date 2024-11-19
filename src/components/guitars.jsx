import guitar1 from "../assets/Guitar1.jpg";
import guitar2 from "../assets/guitar2.jpg";
import guitar3 from "../assets/guitar3.jpg";
import guitar4 from "../assets/guitar4.jpg";
// import guitar5 from "../assets/guitar5.jpg";
import guitar6 from "../assets/guitar6.jpg";
import guitar7 from "../assets/guitar7.jpg";
import guitar8 from "../assets/guitar8.jpg";
import guitar9 from "../assets/guitar9.jpg";

import "/guitars.css";

function Guitar(props) {
  return (
    <>
      <div className="guitars">
        <div className="guitar1-container guitar-container ">
          <img
            className="guitar1-img guitar-img"
            src={guitar1}
            alt="flamenco-guitar1"
            target="_self"
          />
          <h2 className="guitar1-brand">{props.guitar1Brand}</h2>
          <p className="guitar1-price">{props.guitar1Price}</p>
        </div>
        <div className="guitar2-container guitar-container">
          <img
            className="guitar2-img  guitar-img"
            src={guitar2}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar2-brand">{props.guitar2Brand}</h2>
          <p className="guitar2-price">{props.guitar2Price}</p>
        </div>
        <div className="guitar3-container guitar-container">
          <img
            className="guitar3-img  guitar-img"
            src={guitar3}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar3-brand">{props.guitar3Brand}</h2>
          <p className="guitar3-price">{props.guitar3Price}</p>
        </div>
        <div className="guitar4-container guitar-container">
          <img
            className="guitar4-img  guitar-img"
            src={guitar4}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar3-brand">{props.guitar4Brand}</h2>
          <p className="guitar4-price">{props.guitar4Price}</p>
        </div>
        <div className="guitar8-container guitar-container">
          <img
            className="guitar8-img  guitar-img"
            src={guitar8}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar8-brand">{props.guitar8Brand}</h2>
          <p className="guitar8-price">{props.guitar8Price}</p>
        </div>
        <div className="guitar6-container guitar-container">
          <img
            className="guitar6-img guitar-img"
            src={guitar6}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar6-brand">{props.guitar6Brand}</h2>
          <p className="guitar6-price">{props.guitar6Price}</p>
        </div>
        <div className="guitar7-container guitar-container">
          <img
            className="guitar7-img  guitar-img"
            src={guitar7}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar7-brand">{props.guitar7Brand}</h2>
          <p className="guitar7-price">{props.guitar7Price}</p>
        </div>
        <div className="guitar8-container guitar-container">
          <img
            className="guitar8-img  guitar-img"
            src={guitar8}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar8-brand">{props.guitar8Brand}</h2>
          <p className="guitar8-price">{props.guitar8Price}</p>
        </div>
        <div className="guitar9-container guitar-container">
          <img
            className="guitar9-img  guitar-img"
            src={guitar9}
            alt="flamenco-guitar2"
          />
          <h2 className="guitar9-brand">{props.guitar9Brand}</h2>
          <p className="guitar9-price">{props.guitar9Price}</p>
        </div>
      </div>
    </>
  );
}

export default Guitar;
