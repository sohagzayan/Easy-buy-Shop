import React from "react";
import "./FollowBtn.css";
const FollowBtn = () => {
  return (
    <div>
      <div className="center-btn">
        <button className="btn-follow">
          <svg
            className="svg"
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="bg-line"
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="hl-line"
            />
          </svg>
          <span>HOVER ME</span>
        </button>
      </div>
    </div>
  );
};

export default FollowBtn;
