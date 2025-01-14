import React from "react";
import { StatusBarIpad } from "./StatusBarIpad";
import ellipse1 from "./ellipse-1.svg";
import ellipse2 from "./ellipse-2.svg";
import ellipse3 from "./ellipse-3.svg";
import ellipse4 from "./ellipse-4.svg";
import ellipse5 from "./ellipse-5.svg";
import ellipse6 from "./ellipse-6.svg";
import ellipse7 from "./ellipse-7.svg";
import ellipse8 from "./ellipse-8.svg";
import ellipse9 from "./ellipse-9.svg";
import ellipse10 from "./ellipse-10.svg";
import ellipse11 from "./ellipse-11.svg";
import ellipse12 from "./ellipse-12.svg";
import fa6SolidHeartPulse from "./fa6-solid-heart-pulse.svg";
import healthiconsCpr from "./healthicons-cpr.svg";
import iconamoonProfileFill from "./iconamoon-profile-fill.svg";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import "homescreen_temp/style.css";
import vector from "./vector.svg";
import weuiArrowOutlined from "./weui-arrow-outlined.svg";

const HomeScreenPage = () => {
  return (
    <div className="homescreen-page">
      <div className="div-2">
        <StatusBarIpad
          background
          batteryIconClassName="status-bar-ipad-2"
          className="status-bar-ipad-instance"
          combinedShape="combined-shape-4.svg"
          date="Mon Jun 10"
          device="ipad-pro-13-m4"
          img="combined-shape-5.svg"
          time="9:41"
          timeClassName="design-component-instance-node"
        />
        <div className="overlap">
          <div className="text-wrapper-2">MEDTech Future</div>
          <div className="daily-update">Daily Update</div>
          <img className="image" alt="Display 1" src={image2} />
          <img className="image-2" alt="Display 2" src={image3} />
          <img
            className="weui-arrow-outlined"
            alt="Weui arrow"
            src={weuiArrowOutlined}
          />
          <div className="rectangle" />
          <img className="ellipse" alt="Ellipse" src={ellipse1} />
          <div className="text-wrapper-3">86</div>
          <div className="text-wrapper-4">Average BPM</div>
          <img className="ellipse-2" alt="Ellipse" src={ellipse2} />
          <div className="text-wrapper-5">58</div>
          <div className="text-wrapper-6">Lowest BPM</div>
          <img className="ellipse-3" alt="Ellipse" src={ellipse3} />
          <div className="text-wrapper-7">97</div>
          <div className="text-wrapper-8">High BPM</div>
          <img className="ellipse-4" alt="Ellipse" src={ellipse4} />
          <div className="text-wrapper-9">1</div>
          <div className="text-wrapper-10">Alert No.</div>
        </div>
        <div className="overlap-group">
          <img
            className="solid-heart"
            alt="Heart icon"
            src={fa6SolidHeartPulse}
          />
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <img
            className="iconamoon-profile"
            alt="Profile icon"
            src={iconamoonProfileFill}
          />
          <img
            className="healthicons-cpr"
            alt="CPR icon"
            src={healthiconsCpr}
          />
          <img className="vector" alt="Vector icon" src={vector} />
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-11">Weekly Update</div>
          <div className="rectangle-5" />
          <img className="ellipse-5" alt="Ellipse" src={ellipse5} />
          <div className="text-wrapper-12">75</div>
          <div className="text-wrapper-13">Average BPM</div>
          <img className="ellipse-6" alt="Ellipse" src={ellipse6} />
          <div className="text-wrapper-14">58</div>
          <div className="text-wrapper-15">Lowest BPM</div>
          <img className="ellipse-7" alt="Ellipse" src={ellipse7} />
          <div className="text-wrapper-16">112</div>
          <div className="text-wrapper-17">High BPM</div>
          <img className="ellipse-8" alt="Ellipse" src={ellipse8} />
          <div className="text-wrapper-18">6</div>
          <div className="text-wrapper-19">Alert No.</div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-11">Monthly Update</div>
          <div className="rectangle-6" />
          <img className="ellipse-9" alt="Ellipse" src={ellipse9} />
          <div className="text-wrapper-20">89</div>
          <div className="text-wrapper-21">Average BPM</div>
          <img className="ellipse-10" alt="Ellipse" src={ellipse10} />
          <div className="text-wrapper-22">57</div>
          <div className="text-wrapper-23">Lowest BPM</div>
          <img className="ellipse-11" alt="Ellipse" src={ellipse11} />
          <div className="text-wrapper-24">112</div>
          <div className="text-wrapper-25">High BPM</div>
          <img className="ellipse-12" alt="Ellipse" src={ellipse12} />
          <div className="text-wrapper-26">8</div>
          <div className="text-wrapper-27">Alert No.</div>
        </div>
        <div className="text-wrapper-28">Alerts</div>
        <div className="overlap-4">
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="element-BPM">58 BPM 12.20.2024 10:54:45</div>
          <div className="element-BPM-2">58 BPM 12.20.2024 10:54:45</div>
          <div className="element-BPM-3">58 BPM 12.20.2024 10:54:45</div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default HomeScreenPage;
