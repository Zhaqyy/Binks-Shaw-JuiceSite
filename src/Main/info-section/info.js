import React from "react";
import "./info.css";

const Info = () => {
  return (
    <section id="#about">
      <div className="info-sec">
        <div className="health-right" data-aos="fade-right"
            data-aos-duration="1000"
            >
          <h2 data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="300">Health Benefits</h2>
        </div>

        <div className="health-left" data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500">
          <p data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="700">
            At Binks & Shaw, we believe in the power of nature to nourish and
            heal the body. Our juices are packed with essential
            vitamins and minerals that can provide a range of health benefits.
            <br />
            We also conduct regular health research on our juices and are always
            looking for new ways to improve the nutritional value of our
            products. Our juices are also free of preservatives and additives,
            which makes them a natural and healthy choice for you and your
            family.
          </p>
        </div>

        <div className="about-left" data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="900">
          <h2 data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1100">About Us</h2>
        </div>
        <div className="about-right" data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1300">
          <p data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="1500">
            A Company committed to providing our customers with the highest
            quality and healthy juices. We are dedicated to producing juices that are not only delicious but also beneficial to your health.
            <br />
            Our juices are medically approved and registered nationally, which
            means that it has been evaluated by a panel of medical experts and
            has been deemed safe for consumption.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Info;
