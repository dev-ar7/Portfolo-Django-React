import React from "react";
import Lottie from 'react-lottie';


const DisplayLottie = ({animationPath}) => {

    const defaultOption = {
        loop: true,
        autoplay: true,
        path: animationPath,
    };

    const buttonStyle = {
        display: 'block',
        width: '70%',
        height: '70%', 
        transform: 'translate3d(0px, 0px, 0px)',
      };

    return (
        <div onClick={() => null}>
            <Lottie style={buttonStyle} options={defaultOption} />
        </div>
    );
}


export default DisplayLottie;