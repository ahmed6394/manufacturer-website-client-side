import React from "react";
import img from "../../src/images/photo.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="my-12">
      <h1 class="text-3xl font-bold text-primary text-center">Portfolio</h1>
      <div className="container">
        <div>
          <img className="my-img" src={img} alt="" />
        </div>
        <h1 className="heading text-dark">G M MAHABUB AHMED</h1>
        <h2 className="sub-heading">Junior Web Developer</h2>
        <h2 className="sub-heading">mahabub.ahmed.eee@gmail.com</h2>

        <div>
          <p className="paragraph">
            Hi! I am Mahabub Ahmed. Working with HTML5, ES6, CSS3, JS, Node,
            Express, React, MongoDb. My goal is to be a successful frontend
            developer. I complete my bachelor in Electrical and Electronic
            Engineering from Ahsanullah University of Science and Technology.
            Right now I am in Germany, doing my mastar's degree program and I am
            planning to grab the opportunity to develop my skills and experience
            in this field by working in international companies.
          </p>
        </div>
        <div>
          <p className="paragraph">
            To be a capable developer I am working day and night. I believe in
            skill, so trying to grab all the opportunities to develop my skills.
            Now I am almost completing the resourceful web developing course by
            a very skilled and famous developer Jhanker Mahbub successfully.
            Besides that, I finished some basic programming courses from
            Coursera, and start a new course in freecodecomp on frontend
            developing. I also practice and learn from so many genius developers
            on youtube and other blogs. In the future, I want to work with more
            advanced frameworks and libraries like Mongoose and django.
          </p>
        </div>
        <div>
          <p className="paragraph">
            <h2>The live site link of three project completed by me:</h2>
            <li>
              <a href="https://mr-appler.web.app/">Mr. Appler</a>
            </li>
            <li>
              <a href="https://travel-with-me-8daa1.firebaseapp.com/">
                Travel with me
              </a>
            </li>
            <li>
              <a href="https://shamso-electronics-4b223c.netlify.app/dashboard">
                Sham Electronics
              </a>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
