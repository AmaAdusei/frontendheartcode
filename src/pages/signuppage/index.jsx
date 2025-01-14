import React from "react";
import { Eye } from "./Eye";
import { EyeWrapper } from "./EyeWrapper";
import { StatusBarIpad } from "./StatusBarIpad";
import deviconGoogle from "./devicon-google.svg";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image from "./image.svg";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import "signuppage/style.css";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";

const SignupPage = () => {
  return (
    <div className="iphone">
      <div className="div-2">
        <StatusBarIpad
          background
          batteryIconClassName="design-component-instance-node"
          className="status-bar-ipad-instance"
          combinedShape="combined-shape-5.svg"
          date="Mon Jun 10"
          device="ipad-pro-13-m4"
          img="combined-shape-6.svg"
          time="9:41"
        />
        <div className="overlap">
          <div className="text-wrapper-2">MEDTech Future</div>
          <img className="image" alt="Image 1" src={image2} />
          <img className="image-2" alt="Image 2" src={image3} />
        </div>

        <div className="frame">
          <div className="text-wrapper-3">John Doe</div>
          <img className="vector" alt="Vector Icon" src={vector} />
        </div>

        <div className="text-wrapper-4">Full name</div>

        <div className="frame-2">
          <div className="text-wrapper-3">Enter password</div>
          <Eye className="eye-instance" />
        </div>

        <div className="text-wrapper-5">Password</div>

        <div className="frame-3">
          <div className="text-wrapper-3">+123456789123</div>
          <div className="overlap-group">
            <EyeWrapper className="eye-2" eye="image.png" />
            <img className="vector-2" alt="Vector 2" src={vector2} />
          </div>
        </div>

        <div className="text-wrapper-6">Phone Number</div>

        <div className="frame-4">
          <div className="text-wrapper-3">johndoe@gmail.com</div>
          <div className="overlap-group">
            <EyeWrapper className="eye-2" eye="eye.png" />
            <img className="vector-2" alt="Email Icon" src={image} />
          </div>
        </div>

        <div className="text-wrapper-7">Email Address</div>
        <div className="text-wrapper-8">Invalid email address</div>
        <div className="text-wrapper-9">At least 8 characters</div>

        <div className="div-wrapper">
          <div className="text-wrapper-10">Sign Up</div>
        </div>

        <div className="text-wrapper-11">Login</div>

        <div className="overlap-2">
          <div className="text-wrapper-12">Continue with Google</div>
          <img
            className="devicon-google"
            alt="Google Icon"
            src={deviconGoogle}
          />
        </div>

        <div className="overlap-3">
          <img className="line" alt="Line 1" src={line1} />
          <img className="line-2" alt="Line 2" src={line2} />
          <div className="text-wrapper-13">or</div>
        </div>

        <div className="text-wrapper-14">Already have an account?</div>

        <p className="by-clicking-continue">
          By clicking “Continue with Google” you agree to our <br />
          User Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
