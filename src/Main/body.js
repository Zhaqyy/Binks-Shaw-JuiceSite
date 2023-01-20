import React from "react";
import "../Main/body.css";
import passion from "../img/passion.png";
import pome from "../img/pomegranate.png";
import kiwi from "../img/kiwi.png";

const body = () => {
  return (
    <section>
      <div className="container">
        <div className="card-intro">
          <h1>Our Exotic Juices</h1>
          <p>
            {/* Here you'll find delicious and healthy fruit juices made from the freshest and highest
          quality fruits, and never from concentrate. We offer a variety of
          flavors including apple, orange, pineapple, mango, and mixed fruit
          juice, perfect for kids and adults. Whether you're looking for a
          refreshing drink, a tasty ingredient for a recipe, or a healthy boost
          to your day, we've got you covered.{" "} */}
            Here you'll find a variety of exotic flavors including passion fruit,
            kiwi, pomegranate and more. Our exotic juice is perfect for those
            who are looking for something new and different. Whether you're
            looking for a refreshing drink, a tasty ingredient for a recipe, or
            a healthy boost to your day, we've got you covered.
          </p>
        </div>

        <div className="cards-list">
          <div className="card">
            <div className="face face1">
              <h2 className="passion">Passion</h2>
              <p className="passion">
                Passion fruit, also known as granadilla, is a tropical fruit
                that is often used to make juice, smoothies, and cocktails. It
                has a unique, tangy flavor and is packed with vitamins and
                minerals such as Vitamin C, Vitamin A, and potassium. Passion
                fruit is also a great source of antioxidants, making it a
                healthy addition to any drink.
              </p>
            </div>
            <div className="face face2">
              <img src={passion} alt="passion" />
              <h3>Passion Fruit</h3>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <h2 className="pome">pomegranate</h2>
              <p className="pome">
                Pomegranate is a red fruit with a hard outer shell and a juicy,
                seed-filled interior. The seeds, also known as arils, are packed
                with antioxidants and are a good source of Vitamin C, Vitamin K,
                and potassium. The juice has a tart, slightly sweet flavor that
                makes it a great addition to any drink.
              </p>
            </div>
            <div className="face face2">
              <img src={pome} alt="Pomegranate" />
              <h3>Pomegranate</h3>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <h2 className="kiwi">Kiwi Fruit</h2>
              <p className="kiwi">
                Kiwi fruit, also known as Chinese gooseberry, is a small, fuzzy
                fruit with a bright green flesh and small black seeds. It is
                high in Vitamin C and potassium, and also contains Vitamin K and
                Vitamin E. It is known for its unique and tangy taste, making it
                a great addition to any drink.
              </p>
            </div>
            <div className="face face2">
              <img src={kiwi} alt="kiwi" />
              <h3>Kiwi Fruit</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default body;
