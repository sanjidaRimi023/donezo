import Lottie from "lottie-react";
import animationData from "../assets/login.json";

const LoginAnimation = () => {
  return (
    <div>
      <Lottie autoplay={true} animationData={animationData} loop={true} />
    </div>
  );
};

export default LoginAnimation;
