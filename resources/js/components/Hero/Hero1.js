import React from 'react';
import ReactDOM from 'react-dom';
// import './style.scss';

const Hero1 = () => {
    return (
        <section className="hero hero-90 flex items-center">
            <div className="hero-background">
                <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    src="\assets\video\tutorial-jkt-3.mp4"
                />
            </div>
            <div className="hero-content">
                <div className="content-container">
                    <h2 className="title">Cy-Brightening Moisturizer Cream</h2>
                    <h3 className="sub-title">Skin Care Keina</h3>
                </div>
            </div>
            {/* <div className="section-wrapper w-full"><div className="container-fluid"><div className="row"><div className="col-md-5 mt-20"><h1 className="text-5xl font-bold mb-3">Raka D Prakoso</h1><p className="text-lg mb-4">Want to know more about me ?</p><a className="bg-primary-100 px-3 py-2 text-lg font-semibold rounded-lg text-gray-50 shadow-lg inline">Get to Know<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="ml-5 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z" /></svg></a></div></div></div></div> */}

        </section>
    )
}

export default Hero1;
