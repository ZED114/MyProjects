import React, { useState } from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import Stem_About_UsImg from "../Components/Assets/Stem_About_UsImg.jpg";
import STEM_2ND_PIC from "../Components/Assets/STEM_2ND_PIC.jpeg";
import STEM_3RD_PIC from "../Components/Assets/STEM_3RD_PIC.jpeg";
import STEM_4TH_PIC from "../Components/Assets/STEM_4TH_PIC.jpeg";
import STEM_5TH_PIC from "../Components/Assets/STEM_5TH_PIC.jpeg";
import STEM_6TH_PIC from "../Components/Assets/STEM_6TH_PIC.jpeg";
import STEM_7TH_PIC from "../Components/Assets/STEM_7TH_PIC.jpeg";
import STEM_8TH_PIC from "../Components/Assets/STEM_8TH_PIC.jpeg";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  //This is the functionality of the modal when the button is clicked
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: "",
    description: "",
  });

  const handleShow = (header, description) => {
    setModalContent({ header, description });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="projects-container">
        <h1 className="projectsHeader">Projects</h1>
        <div className="gridContainer">
          <div className="project-card">
            <h4>Balkan Olympiad in Informatics 2023</h4>
            <img src={Stem_About_UsImg} alt="Project" />
            <div className="description">
              <p>
                With the representative team of Albania in Maribor, Slovenia in
                the 30th edition of the Olympiad Balkan Informatics-BOI 2023.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "Balkan Olympiad in Informatics 2023",
                        "We are thrilled to announce that the representative team of Albania has proudly participated in the prestigious 30th edition of the Balkan Olympiad in Informatics (BOI) 2023, held in the vibrant city of Maribor, Slovenia. This event marks a significant milestone in our journey, showcasing the exceptional talent and dedication of our young Albanian programmers on an international stage.",
                        "The BOI 2023 is a celebration of ingenuity, problem-solving, and technological prowess, bringing together the brightest minds from across the Balkan region. Our team, a testament to hard work and passion, competed fiercely, embodying the spirit of innovation and collaboration."
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>CodeWeek Hackathon 2023</h4>
            <img src={STEM_2ND_PIC} alt="Project" />
            <div className="description">
              <p>
                During three days in Albania CodeWeek hackathon as part of EU
                Code Week that comes from European Commission.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "CodeWeek Hackathon 2023",
                        "3 days marathon September 8-10. 10 challenges at the national level. 50 energetic and passionate competitors about technology that they are giving you solutions to the challenges of our country to represent us in Brussels"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>Junior Balkan Olympiad 2022</h4>
            <img src={STEM_3RD_PIC} alt="Project" />
            <div className="description">
              <p>
                With the representative team of Albania in Maribor, Slovenia in
                the 30th edition of the Olympiad Balkan Informatics-BOI 2023.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "Junior Balkan Olympiad 2022",
                        "The competition typically features several challenging problems that test the participants' skills in areas such as algorithms, data structures, and computational complexity."
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>National Informatics Olympiad 2023</h4>
            <img src={STEM_5TH_PIC} alt="Project" />
            <div className="description">
              <p>
                During the competition of the National Olympics Informatics for
                children in the age group of 12-15 years in Albania to select
                the representatives in the Junior Balkan Olympiad in Informatics
                for children.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "National Informatics Olympiad 2023",
                        "The competition involves a series of challenging problems designed to test the participants' abilities in algorithmic thinking, problem-solving, and programming skills."
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>Startup Hackthon 2023</h4>
            <img src={STEM_4TH_PIC} alt="Project" />
            <div className="description">
              <p>
                Startup Hackathon 2023 “Youth Empowerment and the Community
                through Innovation and Technology” took place on 21 June 22,
                2023 in Tirana. 88 participants from 23 high schools divided
                into 17 teams from all over Albania.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "Startup Hackthon 2023",
                        "The hackathon was designed to encourage young minds to leverage technology and innovation to address community challenges and drive positive change. "
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>Startup Hackathon</h4>
            <img src={STEM_6TH_PIC} alt="Project" />
            <div className="description">
              <p>
                Startup Hackathon “Technology and Community” our annual
                tradition, this time comes to cooperation with the U.S.
                Embassy-Tirana, Albania STEM, IDM Albania and the Albanian ICT
                Academy in the framework of Europe Code Week and euRobotics –
                European Robotics.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "Startup Hackathon",
                        "Held on June 21-22, 2023, in Tirana, this year’s hackathon emphasized the theme of Youth Empowerment and the Community through Innovation and Technology. It attracted 88 participants from 23 high schools across Albania, who were divided into 17 teams. "
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>ICT FESTIVAL 2022</h4>
            <img src={STEM_7TH_PIC} alt="Project" />
            <div className="description">
              <p>
                70 young people started the 3-month marathon today in Tirana at
                the ICT Festival!! ICT Festival is an annual activity which aims
                to promote young people and enthusiasts in the field of ICT and
                STEM in the entire territory of Albania.
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "ICT FESTIVAL 2022",
                        "This festival is designed to foster a spirit of creativity and innovation among the youth, encouraging them to explore the vast possibilities within ICT and STEM disciplines. "
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h4>National Informatics Olympiad 2022</h4>
            <img src={STEM_8TH_PIC} alt="Project" />
            <div className="description">
              <p>
                Taking place for the first time, the National Informatics
                Olympiad for Children in Albania the laboratory of
                albanianictacademy!
              </p>
              <div className="like-section">
                <div>
                  <button onClick={toggleLike} className="like-button">
                    <FontAwesomeIcon
                      icon={liked ? faSolidHeart : faRegularHeart}
                    />
                  </button>
                  <span>{likeCount}</span>
                </div>
                <div className="learnMore_section">
                  <button
                    className="learnMore_button"
                    onClick={() =>
                      handleShow(
                        "National Informatics Olympiad 2022",
                        "The National Informatics Olympiad for Children specifically targeted students aged 12-15, providing them with an early opportunity to engage deeply with informatics and programming. The competition was designed to test and enhance their skills in algorithmic thinking, problem-solving, and coding."
                      )
                    }
                  >
                    Learn more
                  </button>
                  <Modal
                    show={showModal}
                    handleClose={handleClose}
                    header={modalContent.header}
                    description={modalContent.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
