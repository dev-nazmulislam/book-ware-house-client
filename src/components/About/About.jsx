import React from "react";

import profileImg from "../../assets/images/nazmul.png";
const About = () => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column flex-lg-row gap-4">
        <img className="rounded" src={profileImg} alt="" />
        <div>
          <h3>Working Together</h3>
          <p>
            In these times of digital saturation, how do we grab peoples
            attention and direct them to what we want them to see?
          </p>
          <p>
            I don't have all the answers, but over the past 20 years, I have
            learned that collaborating with creatives and clients that share the
            same end goal is key to a successful commission, where clear and
            concise discussions and decision making be it on location or
            in-studio will produce results that are honest, progressive and with
            a production value everybody can feel proud of.
          </p>
          <h3>Planning Your Shoot</h3>
          <p>
            Shoot planning can be daunting, especially if this isn't your day
            job, but it's critical in achieving optimum results.
          </p>
          <p>
            I'm a firm believer that best results come from an honest,
            collaborative approach, so whether you're an experienced creative,
            head of brand, an SME or a start-up, the pre-production of the shoot
            will be tailored to your needs.
          </p>
          <h3>On Location</h3>
          <p>
            Once shooting is underway, I will normally travel and work with a
            single assistant who will run the digital capture for the job and
            assist with the requirements of the production. This enables me to
            concentrate on the needs of the art director and the client. On
            larger shoots, an additional lighting or second assistant may be
            required to ensure the shoot list isn't placed under unnecessary
            pressure.
          </p>
        </div>
      </div>
      <p className="my-2 p-2">
        If you would like to discuss a new photography project email
        <mark>dev.nazmulislam@gmail.com</mark> or call{" "}
        <mark>+8801518350140</mark>
      </p>
    </div>
  );
};

export default About;
