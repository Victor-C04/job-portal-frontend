import React from 'react';
import { Link } from 'react-router-dom';
import './static.css';

const FindTalents = () => {
  return (
    <div className="find-talents-container">
      <section className="hero-section">
        <div className="container">
          <h1>Discover Top Professionals for Your Business</h1>
          <p className="lead">
            Connect with qualified candidates across industries who are ready to bring their expertise to your organization. 
            Our talent database features verified professionals with diverse skill sets and experience levels.
          </p>
          <div className="search-box">
            <input type="text" placeholder="Search by skill, position, or location" className="search-input" />
            <button className="search-button">Find Talent</button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Search Our Talent Pool</h3>
              <p>Filter by skills, experience, location, and availability</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Review Detailed Profiles</h3>
              <p>Examine portfolios, work history, and verified credentials</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Contact Candidates</h3>
              <p>Reach out directly through our secure messaging system</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Schedule Interviews</h3>
              <p>Use our built-in calendar to arrange meetings</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Hire With Confidence</h3>
              <p>Complete all paperwork and onboarding through our platform</p>
            </div>
          </div>
        </div>
      </section>

      <section className="advanced-features">
        <div className="container">
          <h2>Advanced Search Features</h2>
          <p>
            Our intelligent matching algorithm helps you find not just qualified candidates, 
            but professionals who align with your company culture and long-term objectives. 
            Leverage our AI-powered recommendations to discover talent you might otherwise miss.
          </p>
        </div>
      </section>

      <section className="talent-categories">
        <div className="container">
          <h2>Talent Categories</h2>
          <div className="categories-grid">
            {['Technology & Development', 'Design & Creative', 'Marketing & Communications', 
              'Finance & Accounting', 'Administrative & Support', 'Sales & Business Development', 
              'Human Resources', 'Project Management', 'Healthcare & Medical', 'Legal & Compliance'
            ].map((category, index) => (
              <div className="category-card" key={index}>
                <h3>{category}</h3>
                <Link >
                  Browse Talent
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-tools">
        <div className="container">
          <h2>Premium Recruiter Tools</h2>
          <p>Upgrade to our Premium Recruiter package to access:</p>
          <ul className="premium-features">
            <li>Unlimited candidate searches</li>
            <li>Bulk messaging capabilities</li>
            <li>Advanced screening questions</li>
            <li>AI-assisted candidate ranking</li>
            <li>Applicant tracking system integration</li>
            <li>Customized talent reports</li>
          </ul>
          <button className="upgrade-button">Upgrade Now</button>
        </div>
      </section>
    </div>
  );
};

export default FindTalents;