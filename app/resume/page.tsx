import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const BASE_CALSS = "resume";
export default function Resume() {
  return (
    <div className={`${BASE_CALSS} fade-in-element`}>
      <h1>Resume</h1>
      <div className={`${BASE_CALSS}_wrap`}>
        <div className={`${BASE_CALSS}_wrap_card edu`}>
          <h2>
            <div className="edu_icon">
              <GraduationCap size={30} />
            </div>
            Education
          </h2>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2023 - Present</label>
            <p>Web Application Development Diploma </p>
            <label>Cornerstone International College, Vancouver, Canada</label>
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2008 - 2013</label>
            <p>Bachelor’s degree in Computer Science</p>
            <label>Koomin University Seoul, Korea</label>
          </div>
        </div>

        <div className={`${BASE_CALSS}_wrap_card experience`}>
          <h2>
            <div className="experience_icon">
              <Briefcase size={30} />
            </div>
            Experience{" "}
          </h2>

          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2019. 05 - 2022. 07</label>
            <p>Studio Teal – Owner and Main Photographer</p>
            <label>
              - Scheduling and Marketing for Portrait Photography Studio <br />-
              Main Photographer
            </label>
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2016. 02 - 2016. 08</label>
            <p>Hyundai Glovis Russia - IT Team / IT Manager</p>
            <label>
              - Provide guidance, and support to team members, fostering
              collaboration and ensuring that projects are completed on time
              <br />
              - Build a new product pipeline, enhanced company customs website
              with outsourcing company
              <br />- As a Headquarters Communications Manager, Applying the new
              system of the headquarters to the Russia branch
            </label>
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2015. 05 - 2015. 10</label>
            <p>Ubion – Web Development & Management Team / Web Developer</p>
            <label>
              - ASP.Net, MS SQL, Javascript, Jquery, Bootstrap
              <br />
              - Develop landschool Social Learning Service front-end
              <br />- Maintenance Web Site
            </label>
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <label>2013. 02 - 2015. 04</label>
            <p>
              Samsung Electronics - VD department Platform S/W group / Software
              Engineer
            </p>
            <label>
              - C++, Orsay Platform, Tizen Platform
              <br />
              - Middleware Development Bluetooth HID Profile in Smart TV
              <br />- UI Development Bluetooth HID Profile in Smart TV
              <br />
              - Development Bluetooth Power on
              <br />- Development Android Media Test Application in Google TV
            </label>
          </div>
        </div>
      </div>
      <div className={`${BASE_CALSS}_skills`}>
        <h2>Skils</h2>
        <div className={`${BASE_CALSS}_skills_list`}>
          <div>
            <h4> Front End</h4>
            <label>REACT</label>
            <label>Next</label>
            <label>TypeScript</label>
            <label>SASS</label>
            <label>Tailwind</label>
          </div>
          <div>
            <h4> Back End</h4>
            <label>Node</label>
            <label>Express</label>
            <label>MongoDB</label>
            <label>postegreSQL</label>
          </div>
          <div>
            <h4> Language</h4>
            <label>C++</label>
            <label>C</label>
            <label>Java</label>
          </div>
          <div>
            <h4> Infrastructure</h4>
            <label>AWS EC2</label>
            <label>AWS S3</label>
            <label>Github Action</label>
          </div>
          <div>
            <h4> Graphic Environments</h4>
            <label>Adobe Photoshop</label>
            <label>Adobe Lightroom</label>
            <label>Figma</label>
          </div>
        </div>
      </div>
    </div>
  );
}
