import React from "react";
import { Button } from "react-bootstrap";
import "./LoseModal.css";
import close from "../../images/close.png";
import lose from "../../images/losemodal.png";
import { Link } from "react-router-dom";
const LoseModal = () => {
  return (
    <div className="losemodal ">
      <div style={{ marginTop: "82px" }}>
        <img className="lose" src={lose} alt="" />
        <h2 className="leader">LOSE MODAL</h2>
        <p className="text-white">lose you game</p>

        <Link to="/win">
          <Button className="playbtn">Play Again</Button>
        </Link>
        <Link to="/">
          <img className="close" src={close} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default LoseModal;
