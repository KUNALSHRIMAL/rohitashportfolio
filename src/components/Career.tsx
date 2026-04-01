import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic &amp; UI Designer</h4>
                <h5>Pure Cosmeceuticals Pvt. Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing visuals for social media, Amazon listings, and website
              banners. Focused on clean layouts and creative designs that
              elevate the brand's digital presence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Healthletic Lifestyle Pvt. Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on static and motion design projects using Photoshop,
              Illustrator, Figma, and After Effects. Delivered creative and
              trend-based designs aligned with brand guidelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Arts</h4>
                <h5>Maharaja University, Bikaner</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed a Bachelor of Arts degree, building a strong foundation
              in communication, critical thinking, and creative expression that
              informs every design decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

