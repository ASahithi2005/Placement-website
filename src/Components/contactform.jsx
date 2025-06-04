import React, { useState } from 'react';
import '../Styles/ContactForm.css';
import Swal from 'sweetalert2';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdlzPDhs-BZr6n6YJQlJDRvpHK0VolFFD5xitxw7IFYpcKmmw/formResponse";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION_URL;
    form.method = "POST";
    form.target = "hidden_iframe";

    const addInput = (name, value) => {
      const input = document.createElement("input");
      input.name = name;
      input.value = value;
      input.hidden = true;
      form.appendChild(input);
    };

    // Replace entry.xxxxxx with actual form entry IDs
    addInput("entry.238882434", formData.name);
    addInput("entry.213710210", formData.contactNumber);
    addInput("entry.1122646272", formData.email);
    addInput("entry.1570954660", formData.companyName);
    addInput("entry.654582053", formData.message);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    Swal.fire({
      icon: 'success',
      title: 'Submitted Successfully!',
      text: 'Thank you for your inquiry. We will get back to you soon.',
    });

    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-header">Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" required placeholder="e.g. 9876543210" value={formData.contactNumber} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" required placeholder="Your company" value={formData.companyName} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Type your message here" rows={3} value={formData.message} onChange={handleChange} style={{ overflow: 'auto', resize: 'vertical' }}></textarea>
          </div>

          <div className="form-field">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>

        {/* Hidden iframe for form submission */}
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
