import { Camera, Code, Cpu, LayoutPanelLeft, Minus } from "lucide-react";

const BASE_CALSS = "about";

export default function Home() {
  return (
    <div className={`${BASE_CALSS} fade-in-element`}>
      <h1>About</h1>
      <div className="description">
        I'm
        <b>
          a Software engineer with 3+ years of experience and Photographer with
          5+ years of experience
        </b>
        , <br />
        who focuses on Frontend with <b>Next JS</b> and <b>TypeScript</b> now.
        <br />
        With experience running a photography studio and developing embedded
        middleware for mass production, <br />I have a high understanding of
        <b>
          strong visualization, user-friendly development, and analysis of data.
        </b>
        <br />
        Dedicated to learning web development for a year, <br />I invested my
        time in acquiring the skills needed and successfully matched my career
        with web development
        <br />
        <b> Strong Point </b>"Fast understanding of new project code" ,
        "Communication Skills with UX/UI and backend developer"
      </div>
      <h2>What I Do!</h2>
      <div className={`${BASE_CALSS}_wrap`}>
        <div className={`${BASE_CALSS}_wrap_card web`}>
          <div className="code">
            <Code size={30} />
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <h4>Web Development</h4>
            <p>
              Dynamic and skilled Web Developer in designing and developing
              responsive websites and web applications.
            </p>
          </div>
        </div>
        <div className={`${BASE_CALSS}_wrap_card board`}>
          <div className="cpu">
            <Cpu size={30} />
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <h4>Embedded Development</h4>
            <p>
              Dedicated Embedded C++ Developer with experience implementing
              embedded middleware software.
            </p>
          </div>
        </div>
        <div className={`${BASE_CALSS}_wrap_card photo`}>
          <div className="camera">
            <Camera size={30} />
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <h4>Photography</h4>
            <p>
              A portrait photographer is a professional who specializes in
              capturing images of individuals or groups, often focusing on their
              facial expressions, emotions, and personalities.
            </p>
          </div>
        </div>
        <div className={`${BASE_CALSS}_wrap_card uxui`}>
          <div className="ux">
            <LayoutPanelLeft size={30} />
          </div>
          <div className={`${BASE_CALSS}_wrap_card_info`}>
            <h4>UX/UI Design</h4>
            <p>
              As a self-taught UX/UI designer, I bring a modern blend of passion
              and visually appealing user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
