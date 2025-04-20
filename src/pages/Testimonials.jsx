import React from 'react';
import './static.css';

const Testimonials = () => {
  const employerTestimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Director at TechInnovate",
      testimonial: "Since partnering with this platform, we've reduced our hiring time by 35% while improving candidate quality. The intelligent matching system consistently presents us with candidates who not only have the right skills but also align with our company culture."
    },
    {
      name: "Marcus Chen",
      position: "CEO of GreenStart",
      testimonial: "As a growing startup, finding the right talent quickly is crucial to our success. This job portal has become our primary recruitment channel, delivering exceptional candidates who are ready to contribute from day one. The platform's intuitive interface and responsive support team make the entire process seamless."
    },
    {
      name: "Priya Patel",
      position: "Talent Acquisition Manager at Global Finance Corp",
      testimonial: "The quality of candidates we've found through this platform far exceeds what we've experienced with other job boards. The detailed profiles and skill verification features save our team countless hours in the screening process. It's transformed how we build our teams."
    }
  ];

  const jobSeekerTestimonials = [
    {
      name: "James Rodriguez",
      position: "Software Developer",
      testimonial: "Unlike other job sites where my applications disappeared into a black hole, this platform connected me with employers who were genuinely interested in my skills. The personalized job matches and application tracking features made my job search focused and efficient. I found my dream position within three weeks!"
    },
    {
      name: "Aisha Washington",
      position: "Marketing Specialist",
      testimonial: "The platform's skills assessment tools helped me showcase my expertise in ways a traditional resume never could. Employers reached out to me directly, and I felt valued throughout the process. The career development resources also helped me prepare for interviews and salary negotiations."
    },
    {
      name: "Thomas Schmidt",
      position: "Project Manager",
      testimonial: "After months of frustrating job hunting on other sites, I joined this platform and received three quality interviews in the first week. The transparency in job descriptions and company profiles helped me target positions where I could truly thrive. I'm now six months into a role I love at a company that appreciates my contributions."
    }
  ];

  const successStories = [
    {
      title: "Startup Success",
      story: "When CloudNative needed to rapidly scale their engineering team to meet growing demand, they turned to our platform. Within 45 days, they successfully hired 12 qualified developers, allowing them to meet critical product deadlines and secure their next round of funding."
    },
    {
      title: "Career Transformation",
      story: "After 15 years in retail management, Dana was looking to transition into corporate training. Through our platform's skill mapping and career transition resources, she connected with employers who valued her transferable skills. Within two months, she secured a position as a corporate learning specialist with a 30% salary increase."
    },
    {
      title: "Global Talent Acquisition",
      story: "Facing talent shortages in their local market, manufacturing firm Precision Parts used our global talent search to build a remote technical support team across three continents. The diversity of perspectives has led to innovative customer service approaches and expanded their business hours coverage."
    }
  ];

  const recognitions = [
    "\"Top Recruitment Platform\" - HR Technology Awards 2024",
    "\"Best User Experience\" - Recruiting Innovation Summit 2023",
    "\"Most Effective Matching Algorithm\" - Talent Acquisition Technology Excellence 2024",
    "Featured in Forbes' \"Transforming the Future of Work\" special report"
  ];

  return (
    <div className="testimonials-container">
      <section className="hero-section">
        <div className="container">
          <h1>Testimonials</h1>
          <p className="lead">What Our Clients Say</p>
        </div>
      </section>

      <section className="employer-testimonials">
        <div className="container">
          <h2>Employers</h2>
          <div className="testimonials-grid">
            {employerTestimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p>"{item.testimonial}"</p>
                </div>
                <div className="testimonial-author">
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="job-seeker-testimonials">
        <div className="container">
          <h2>Job Seekers</h2>
          <div className="testimonials-grid">
            {jobSeekerTestimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p>"{item.testimonial}"</p>
                </div>
                <div className="testimonial-author">
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="success-stories">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div className="story-card" key={index}>
                <h3>{story.title}</h3>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-recognition">
        <div className="container">
          <h2>Industry Recognition</h2>
          <ul className="recognition-list">
            {recognitions.map((recognition, index) => (
              <li key={index}>{recognition}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;