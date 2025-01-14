import React from "react";
import { Eye } from "./Eye";
import { StatusBarIpad } from "./StatusBarIpad";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import "verificationpage/style.css";
import vector from "./vector.svg";
import weuiArrowOutlined from "./weui-arrow-outlined.svg";

const VerificationPage = () => {
  return (
    <div className="iphone">
      <div className="div-2">
        <StatusBarIpad
          background
          batteryIconClassName="design-component-instance-node"
          className="status-bar-ipad-instance"
          combinedShape="combined-shape-4.svg"
          date="Mon Jun 10"
          device="ipad-pro-13-m4"
          img="combined-shape-5.svg"
          time="9:41"
        />
        <div className="overlap">
          <div className="text-wrapper-2">MEDTech Future</div>
          <img className="image" alt="Image 1" src={image2} />
          <img className="image-2" alt="Image 2" src={image3} />
        </div>

        <div className="frame">
          <div className="text-wrapper-3">12345</div>
          <div className="overlap-group">
            <Eye className="eye-instance" eye="eye.png" />
            <img className="vector" alt="Vector Icon" src={vector} />
          </div>
        </div>

        <div className="text-wrapper-4">Verification Code</div>
        <div className="text-wrapper-5">Incorrect verification code</div>

        <p className="a-verification-code">
          A verification code has been sent to your email.
          <br />
          Kindly write it down to continue.
        </p>

        <div className="text-wrapper-6">Resend Code</div>
        <img
          className="weui-arrow-outlined"
          alt="Arrow Icon"
          src={weuiArrowOutlined}
        />
      </div>
    </div>
  );
};

export default VerificationPage;
