import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr.QA Engineer</h4>
                <h5>Petsmart</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and executed manual and automated test cases; built and maintained Selenium-based automation frameworks; performed API testing using Postman/RestAssured; integrated tests into CI/CD pipelines (Jenkins); analyzed defects, performed root cause analysis, and collaborated with developers to resolve issues; supported regression testing and improved overall test coverage
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Automation Engineer</h4>
                <h5>TacoBell</h5>
              </div>
              <h3>2020-2022</h3>
            </div>
            <p>
              Designed and executed manual and automated test cases for web and backend systems; performed API testing and validation; built and enhanced automation frameworks using Selenium/Java; integrated tests into CI/CD pipelines; analyzed defects, conducted root cause analysis, and collaborated with cross-functional teams to ensure high-quality releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Assurance Analyst</h4>
                <h5>Copart </h5>
              </div>
              <h3>2019-2020</h3>
            </div>
            <p>
              Worked on a live car ecommerce platform, validating end-to-end user workflows including vehicle search, bidding, and checkout; designed and executed manual and automated test cases; performed API testing and data validation; built and maintained automation frameworks using Selenium and Java; integrated tests into CI/CD pipelines; analyzed defects, performed root cause analysis, and collaborated with developers to ensure reliable, high-quality releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Intern</h4>
                <h5>Everrest Link</h5>
              </div>
              <h3>2018-2019</h3>
            </div>
            <p>
              Test engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
