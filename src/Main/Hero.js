import React from "react";
import "../Main/hero.css";
import bottle from "../img/bottle.png";
import fruit from "../img/fruitstack.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Binks <span className="amp">&</span>
          <br />
          <span className="float-right">Shaw</span>
        </h1>
        <h3>
          Our juices are made from the freshest and highest quality
          fruits, and are never from concentrate.
        </h3>
        <p>
          Have a wild fruit fight right in your mouth with every sip... <br />
          <span>A Fruit punch, if you will</span>
        </p>
        <a href="/" className="btn">
          BUY
        </a>
      </div>
      <div className="hero-right">
        {/* <h1>Freeesssh !</h1> */}
        <img src={bottle} alt="" />
      </div>
      {/* <div className="hero-img">
        <img src={bottle} alt="bottle" />
      </div> */}
      <div class="hero-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
