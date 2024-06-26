import "./MyApp.css";
import React, { useState } from "react";
import "./Navbar.css";

import { GiMaterialsScience } from "react-icons/gi";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FcEngineering } from "react-icons/fc";
import { TbMath } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import Stem_About_UsImg from "../Components/Assets/Stem_About_UsImg.jpg";
import Stem_mission from "../Components/Assets/Stem_mission.jpg";
import about_us_image1 from "../Components/Assets/about_us_image1.jpeg";
import Stem_ourVision from "../Components/Assets/Stem_ourVision.png";

const MyApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <section className="header">
        <div className="header-content">
          <h1>Welcome to STEM</h1>
          <p>The biggest technology platform</p>
        </div>
      </section>
      <section id="aboutUs" className="about-section light-blue">
        <div className="container">
          <div className="content">
            <h2>About Us</h2>
            <p>
              The STEM Hub Albania Center is an innovation center for best
              practices for the project-based, career-focused, hands-on learning
              activities that often happen in makerspaces, project, and
              workshops. The Hub currently offers opportunities for participants
              of all ages to work on meaningful projects, learn valuable new
              skills, and collaborate with creative STEM makers and tinkerers
              around the state.
            </p>
          </div>
          <div className="image">
            <img src={Stem_About_UsImg} alt="About Us Image" />
          </div>
        </div>
      </section>

      <section className="about-section light-blue-transparent">
        <div className="container">
          <div className="content">
            <h3>Our Mission</h3>
            <p>
              At STEM Hub Albania, we are dedicated to promoting best practices
              in education through experiential learning. Our makerspaces,
              projects, and workshops are designed to cultivate curiosity,
              critical thinking, and creativity in our participants.
            </p>
          </div>
          <div className="image">
            <img src={Stem_mission} alt="Mission Image" />
          </div>
        </div>
        <div className="container">
          <div className="image">
            <img src={about_us_image1} alt="Mission Image" />
          </div>
          <div className="content">
            <h3>Growing Better Together</h3>
            <p>
              The STEM Hub Albania Center is an innovation center for best
              practices for the project-based, career-focused, hands-on learning
              activities that often happen in makerspaces, project, and
              workshops. The Hub currently offers opportunities for participants
              of all ages to work on meaningful projects, learn valuable new
              skills, and collaborate with creative STEM makers and tinkerers
              around the state.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section light-blue">
        <div className="container">
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              The Vision of STEM Hub Center is to provide experiences for youth,
              girls and the public that promote interest and participation in
              regional growth areas of STEM: biotechnology, information
              technology, robotics, advanced materials processes, energy and the
              environment, and nanotechnology. To connect participants with
              leading professionals in a fun, dynamic atmosphere.
            </p>
          </div>
          <div className="image">
            <img src={Stem_ourVision} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Diverse Programs</h2>
        <div className="services-container">
          <div className="card">
            <TbMath color="blue" size={100} className="homePageIcons" />

            <h3>Mathematics</h3>
          </div>
          <div className="card">
            <GiMaterialsScience
              color="red"
              size={100}
              className="homePageIcons"
            />

            <h3>Science</h3>
          </div>
          <div className="card">
            <FaLaptopCode color="green" size={100} className="homePageIcons" />
            <h3>Technology</h3>
          </div>
          <div className="card">
            <FcEngineering size={100} className="homePageIcons" />

            <h3>Engineering</h3>
          </div>
        </div>
      </section>

      <section id="contactUs" className="contactUs-section">
        <h2>Reach Out</h2>
        <div className="container">
          <div className="contact-info">
            <h1>Contact Information</h1>
            <a
              target="_blank"
              href="https://www.google.com/maps/search/Rr.Qemal+Stafa,+Pallati+31,Kati+III+1001+Tirana/@41.3306288,19.8195554,17z/data=!3m1!4b1?authuser=0&entry=ttu"
            >
              <CiLocationOn size={100} color="red" className="homePageIcons" />
            </a>

            <p>
              <strong>Address:</strong>
            </p>
            <p> Rr.Qemal Stafa, Pallati 31,Kati III 1001 Tirana.</p>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              <MdOutlineMail
                size={100}
                color="orange"
                className="homePageIcons"
              />
            </a>
            <p>
              <strong>Email:</strong>
            </p>
            <p> info@stemhubalbania.org</p>
            <MdLocalPhone size={100} color="green" className="homePageIcons" />

            <p>
              <strong>Phone:</strong>
            </p>
            <p> +355 69 585 9758</p>
          </div>
          <div className="form-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyApp;
