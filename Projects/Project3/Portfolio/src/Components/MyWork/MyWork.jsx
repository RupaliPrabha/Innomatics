import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_img.svg";
import mywork_data from "../../Data/MyWork";

const MyWork = () => {
  return (
    <div id="project" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="work_img" key={index}>
              <a target="_blank" href={work.w_link}>
                <img src={work.w_img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
