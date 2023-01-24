import React from "react";
import "../hero/hero.css";
import bottle from "../img/bottle.png";

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
        Whether you're looking for a refreshing drink, a tasty ingredient for a recipe, or a healthy boost to your day, we've got you covered.
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
        <img src={bottle} alt="" />
      </div>
      
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
