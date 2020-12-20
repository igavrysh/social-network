import React from 'react'
import preloader from './../../../assets/images/tenor.gif'

type PropsType = {
}

const Preloader: React.FC<PropsType> = (props) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={ preloader } alt=''/>
    </div>
  );
}

export default Preloader;