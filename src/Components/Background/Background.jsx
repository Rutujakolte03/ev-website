import React from 'react';
import '/home/rutuja/ev-website/src/Components/Background/Background.css';
import video1 from '/home/rutuja/ev-website/src/assets/video1.mp4';
import image1 from '/home/rutuja/ev-website/src/assets/image1.png';
import image2 from '/home/rutuja/ev-website/src/assets/image2.png';
import image3 from '/home/rutuja/ev-website/src/assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className='background' alt="background image 1" />;
  } else if (heroCount === 1) {
    return <img src={image2} className='background' alt="background image 2" />;
  } else if (heroCount === 2) {
    return <img src={image3} className='background' alt="background image 3" />;
  } else {
    return null;
  }
}

export default Background;
