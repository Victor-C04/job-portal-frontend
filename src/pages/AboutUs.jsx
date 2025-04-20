import React from 'react';
import './static.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <div className="container">
          <h1>About Us</h1>
          <div className="mission-statement">
            <h2>Our Mission</h2>
            <p>
              We connect exceptional talent with forward-thinking companies, 
              creating meaningful professional relationships that drive mutual success and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our job portal emerged from a simple observation: the traditional hiring process was broken. 
            Job seekers struggled to showcase their true potential, while employers wasted valuable time sifting through unsuitable applications.
          </p>
          <p>
            Our founders, former HR executives and tech entrepreneurs, combined their expertise to build a platform 
            that prioritizes quality connections over quantity of applications. Starting with just three team members and a 
            handful of local businesses, we've grown to serve thousands of companies and job seekers worldwide.
          </p>
        </div>
      </section>

      <section className="what-sets-us-apart">
        <div className="container">
          <h2>What Sets Us Apart</h2>
          
          <div className="for-employers">
            <h3>For Employers</h3>
            <ul>
              <li>
                <strong>Quality-Focused Matching:</strong> Our advanced algorithms prioritize relevant skills and cultural fit
              </li>
              <li>
                <strong>Streamlined Hiring Process:</strong> Reduce time-to-hire by up to 40%
              </li>
              <li>
                <strong>Diverse Talent Pool:</strong> Access candidates from various backgrounds, perspectives, and skill sets
              </li>
              <li>
                <strong>End-to-End Support:</strong> From job posting to onboarding, we support every step of your hiring journey
              </li>
            </ul>
          </div>
          
          <div className="for-job-seekers">
            <h3>For Job Seekers</h3>
            <ul>
              <li>
                <strong>Career Advancement:</strong> Connect with employers who value your unique skills
              </li>
              <li>
                <strong>Personalized Job Recommendations:</strong> Receive alerts for positions that match your expertise and preferences
              </li>
              <li>
                <strong>Skill Development Resources:</strong> Access training materials to enhance your professional profile
              </li>
              <li>
                <strong>Transparent Application Process:</strong> Track your application status in real-time
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <h2>Our Team</h2>
          <p>
            Our diverse team brings together expertise in human resources, technology, data science, and customer success. 
            United by our passion for transforming the recruitment landscape, we work tirelessly to improve our platform 
            and provide exceptional service.
          </p>
          <div className="team-members">
            {/* Team member components would go here */}
            {/* This is a placeholder for when you have actual team members to display */}
          </div>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We maintain the highest ethical standards in all our interactions</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously seek better ways to connect talent with opportunity</p>
            </div>
            <div className="value-card">
              <h3>Inclusion</h3>
              <p>We believe diverse perspectives drive better outcomes</p>
            </div>
            <div className="value-card">
              <h3>Impact</h3>
              <p>We measure our success by the positive changes we create for our users</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;