import React from "react";
import "./About.css"; // CSS fayl alohida

import img1 from "../assets/negr.png"; 
import img2 from "../assets/tom.png"
import img3 from "../assets/lara.png"
import img4 from "../assets/batan.png"

import { useTranslation } from "react-i18next";

const About = () => {

     const { t } = useTranslation();

  return (
     <section className="about-section">
      
      {/* Story Section */}
      <div className="about-story">
        <div className="story-text">
          <h2>{t("our_story")}</h2>
          <p>{t("story_paragraph_1")}</p>
          <p>{t("story_paragraph_2")}</p>
        </div>
        <div className="story-image">
          <img src={img1} alt={t("our_story")} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat-card">
          <h3>10.5k</h3>
          <p>{t("sellers_active")}</p>
        </div>
        <div className="stat-card highlighted">
          <h3>33k</h3>
          <p>{t("monthly_sales")}</p>
        </div>
        <div className="stat-card">
          <h3>45.5k</h3>
          <p>{t("customers_active")}</p>
        </div>
        <div className="stat-card">
          <h3>25k</h3>
          <p>{t("annual_gross")}</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <div className="team-member">
          <img src={img2} alt="Tom Cruise" />
          <h4>{t("tom_cruise")}</h4>
          <p>{t("founder_chairman")}</p>
        </div>

        <div className="team-member">
          <img src={img3} alt="Emma Watson" />
          <h4>{t("emma_watson")}</h4>
          <p>{t("managing_director")}</p>
        </div>

        <div className="team-member">
          <img src={img4} alt="Will Smith" />
          <h4>{t("will_smith")}</h4>
          <p>{t("product_designer")}</p>
        </div>
      </div>

    </section>
  );
};

export default About;
