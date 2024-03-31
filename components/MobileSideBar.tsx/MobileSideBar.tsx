import React from "react";
import "../SideBar/SideBar.scss";
import Image from "next/image";
import {
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
const BASE_CALSS = "sidebar";
export default function MobileSideBar() {
  return (
    <div className={BASE_CALSS}>
      <div className={`${BASE_CALSS}_info`}>
        <div className={`${BASE_CALSS}_info_left`}>
          <Image
            className=""
            src="/assets/profile.jpeg"
            alt="profile"
            width={150}
            height={150}
          />
          <div className="mobile_info">
            <h2> Yumi Lim </h2>
            <div className="subtitle">Web Developer</div>
            <div className="social">
              <a
                target="_blank"
                href="https://www.instagram.com/space.caroline/"
              >
                <Instagram size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yumi-lim-173b772ab/"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="download">
              <button type="button">
                <Download size={20} /> CV
              </button>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact_list">
            <div className="phone">
              <Smartphone size={20} />
            </div>
            <div>
              <label>Phone</label>
              <p>+1 403-389-5368</p>
            </div>
          </div>
          <div className="contact_list">
            <div className="mail">
              <Mail size={20} />
            </div>
            <div>
              <label>Email</label>
              <p>limyums.blue@gmail.com</p>
            </div>
          </div>
          <div className="contact_list">
            <div className="pin">
              <MapPin size={20} />
            </div>
            <div>
              <label>Location</label>
              <p>Calgary, AB, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
