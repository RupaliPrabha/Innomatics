import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_img.svg";
import email_logo from "../../assets/email-logo.png";
import lindin_logo from "../../assets/linkdin-logo.png";
import github_logo from "../../assets/github-logo.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96cc62b5-46d6-41f5-99d6-e11d383f56f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success === "") {
      setResult("Fill the form first");
    }
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm available for new opportunities, projects, or collaborations!
            Feel free to reach out if you have any work or ideas you'd like to
            discuss. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_logo} alt="email" />
              <a target="_blank" href="">
                prabharupali@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <img src={lindin_logo} alt="" />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rupali-prabha-bunkar/"
              >
                Rupali-Prabha-Bunkar
              </a>
            </div>
            <div className="contact-detail">
              <img src={github_logo} alt="" />
              <a target="_blank" href="https://github.com/RupaliPrabha">
                RupaliPrabha
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact_right">
          <label htmlFor="name">Your Name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            required
            type="text"
            placeholder="enter your email"
            name="email"
            id="email"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            required
            name="message"
            rows="4"
            placeholder="Enter your message"
            id="message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>

          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
