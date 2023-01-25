import React from "react";
import "../juice/exotic.css";
import orange from "../img/orange.png";
import currant from "../img/currant.png";
import lime from "../img/lime.png";
import melon from "../img/melon.png";
import pine from "../img/pine.png";
import strawberry from "../img/strawberry.png";
import passion from "../img/passion.png";
import pome from "../img/pomegranate.png";
import kiwi from "../img/kiwi.png";
import frame from "../img/frame.png";

const Exotic = () => {
  return (
    <section id="#juice">
      <div className="container regular" id="#regular">
        <div className="card-intro" data-aos="fade-up" data-aos-duration="1000">
          <h1 data-aos="fade-up" data-aos-delay="300">
            Our Regular Juices
          </h1>
          <p data-aos="fade-up" data-aos-delay="500">
            Here you'll find deliciound healthy fruit juices made from the
            freshest and highest quality fruits, and never from concentrate. We
            offer a variety of flavors including apple, orange, pineapple,
            mango, and mixed fruit juice, perfect for kids and adults. Whether
            you're looking for a refreshing drink, a tasty ingredient for a
            recipe, or a healthy boost to your day, we've got you covered.
          </p>
          <img src={frame} alt="frame" />
        </div>

        <div className="cards-list">
          <div className="card" data-aos="fade-right" data-aos-duration="1000">
            <div className="face face1">
              <h2 className="orange">Orange</h2>
              <p className="orange">
                Oranges are a citrus fruit that are known for their sweet and
                tangy flavor. They are a great source of Vitamin C, which helps
                support a healthy immune system, and also contain other vitamins
                and minerals such as folate and potassium. Oranges are a popular
                ingredient in juice, as well as other drinks, desserts and
                culinary dishes.
              </p>
            </div>
            <div className="face face2">
              <img src={orange} alt="orange" />
              <h3>Orange</h3>
            </div>
          </div>
          <div
            className="card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="face face1">
              <h2 className="currant">Black Currants</h2>
              <p className="currant">
                Black currants is a type of berry high in vitamin C,
                antioxidants, and other essential nutrients. Black currant juice
                has a tart flavor and its known for its many health benefits,
                including boosting immunity, improving digestion, and reducing
                inflammation.
              </p>
            </div>
            <div className="face face2">
              <img src={currant} alt="currant" />
              <h3>Black Currant</h3>
            </div>
          </div>
          <div
            className="card"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="face face1">
              <h2 className="lime">Lime</h2>
              <p className="lime">
                Limes are a small green citrus fruit that are known for their
                sour and acidic taste. They are a great source of Vitamin C,
                which helps support a healthy immune system, and also contain
                other vitamins and minerals such as folate and potassium. Limes
                are commonly used to add a tangy flavor to drinks, desserts, and
                culinary dishes.
              </p>
            </div>
            <div className="face face2">
              <img src={lime} alt="Lime" />
              <h3>Lime </h3>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <div className="face face1">
              <h2 className="melon">Melon</h2>
              <p className="melon">
                Watermelon is a sweet and refreshing fruit that is low in
                calories and high in hydration, making it a great choice for a
                thirst-quenching drink. Watermelon is also a good source of
                Vitamin C, Vitamin A, and potassium. Additionally, it contains
                lycopene, an antioxidant that has been linked to heart health
                and cancer prevention.
              </p>
            </div>
            <div className="face face2">
              <img src={melon} alt="melon" />
              <h3>Melon</h3>
            </div>
          </div>

          <div
            className="card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <div className="face face1">
              <h2 className="pine">Pineapple</h2>
              <p className="pine">
                Pineapple is a tropical fruit that is known for its sweet and
                tangy flavor. It is a great source of Vitamin C and manganese,
                which helps support a healthy immune system and bone health.
                Pineapple also contains other vitamins and minerals such as
                Vitamin B1, Vitamin B6, Vitamin A and potassium.
              </p>
            </div>
            <div className="face face2">
              <img src={pine} alt="pine" />
              <h3>Pineapple</h3>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            <div className="face face1">
              <h2 className="strawberry">Strawberry</h2>
              <p className="strawberry">
                Strawberries are a sweet and juicy fruit that are often used in
                drinks, desserts, and culinary dishes. They are a good source of
                Vitamin C, manganese and folate, and also contains antioxidants.
                Strawberries have a bright red color and a sweet, distinctive
                flavor. They are a versatile ingredient that can be enjoyed
                fresh, frozen, or in juice form.
              </p>
            </div>
            <div className="face face2">
              <img src={strawberry} alt="strawberry" />
              <h3>Strawberry</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container exotic" id="#exotic">
        <div className="card-intro" data-aos="fade-up" data-aos-duration="1000">
          <h1 data-aos="fade-up" data-aos-delay="300">
            Our Exotic Juices
          </h1>
          <p data-aos="fade-up" data-aos-delay="500">
            Here you'll find a variety of exotic flavors including passion
            fruit, kiwi, pomegranate and more. Our exotic juice is perfect for
            those who are looking for something new and different. Whether
            you're looking for a refreshing drink, a tasty ingredient for a
            recipe, or a healthy boost to your day, we've got you covered.
          </p>
          <img src={frame} alt="frame" />
        </div>

        <div className="cards-list">
          <div className="card" data-aos="fade-right" data-aos-duration="1000">
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
          <div
            className="card"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
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
          <div
            className="card"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
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
export default Exotic;
