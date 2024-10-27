import React, { useState } from "react";
import "./index.css";
import Heading from "../../components/heading";
import Text from "../../components/text";
import FormInput from "../../components/formInput";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text className="contact-text">
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormInput
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
              style="half"
            />
            <FormInput
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
              style="half"
            />
          </div>
          <FormInput
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            style="full"
          />
          <FormInput
            type="text"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            placeholder="What Service are you interested in?"
            required
            style="full"
          />
          <button type="submit" className="submit-btn">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
