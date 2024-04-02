import Image from "next/image";
import React from "react";

const BASE_CALSS = "project";

export default function Project() {
  return (
    <div className={`${BASE_CALSS} fade-in-element`}>
      <h1>Project</h1>
      <div className={`${BASE_CALSS}_wrap`}>
        <li className={`${BASE_CALSS}_wrap_card`}>
          <div>
            <a target="_blank" href="https://mry-ciccc.me">
              <Image
                src="/assets/mry.png"
                alt="photography website"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div>Cornerstone Program Management Application </div>
          <label>
            <div>
              <a
                target="_blank"
                href="https://github.com/Cornerstone-CICCC/program-project-mry"
              >
                Git Link
              </a>
            </div>
            Next.js, SCSS, Nest.js, TypeScript, PostegreSQL, AWS
          </label>
        </li>
        <li className={`${BASE_CALSS}_wrap_card`}>
          <div>
            <a target="_blank" href="http://3.133.174.99/">
              <Image
                src="/assets/photo.png"
                alt="photography website"
                width={500}
                height={500}
              />
            </a>
          </div>

          <div>Gallery Management Web Application </div>
          <label>
            <div>
              <a
                target="_blank"
                href="https://github.com/limyums/yumi-photography"
              >
                Git Link
              </a>
            </div>
            Node.js, TypeScript, Express, MVC model, SCSS, MongoDB, AWS S3, EC2,
            Github Action
          </label>
        </li>
        <li className={`${BASE_CALSS}_wrap_card`}>
          <div>
            <a
              target="_blank"
              href="https://main.d3m4pomxarfguy.amplifyapp.com/"
            >
              <Image
                src="/assets/restaurant.png"
                alt="photography website"
                width={500}
                height={500}
              />
            </a>
          </div>

          <div>Restaurant Website</div>
          <label>
            <div>
              <a target="_blank" href="https://github.com/limyums/Joodam">
                Git Link
              </a>
            </div>
            Next.js, TypeScript, SCSS, AWS Amplify
          </label>
        </li>
      </div>
    </div>
  );
}
