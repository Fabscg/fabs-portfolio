import React from 'react';
import profileImg from '../../assets/profileImg/Fabs.jpg';





function About(props) {
  return (
    <section className="center">
      <div>
        <h1 id="about" className="">About me</h1>
      </div>

      <div className="info-about row">
        <div className="aboutImg col-lg-6 col-md-6">
          <img src={profileImg} className="profile-image" alt="my-avatar" />
        </div>

        <div className="col-lg-6 col-md-6">
          <p className="profile-image">
            People find me to be an upbeat self-motivated team player with excellent
            communication skills. For the past several years, I have worked in customer service and hospitality, and
            have also spearheaded my own business. Having held a lifelong affinity for coding and programming, I
            endeavoured to equip myself with the knowledge and skillset to pursue a career as a developer. Over the
            last two
            years, I independently dedicated myself to deepening my studies and experience in web development and
            acquired
            proficiency in the breadth of programming languages. I am a curious and driven individual, and excited
            for an opportunity to specialize in this dynamic industry.
          </p>
        </div>
      </div>






    </section>

  )
}

export default About;