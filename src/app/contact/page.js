"use client"; // Enables client-side functionality

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state
  const [showPopup, setShowPopup] = useState(false); // To show success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsSubmitting(true); // Set loading state

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Handle response based on success or failure
      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message); // Show success message
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
        setShowPopup(true); // Show pop-up
        setTimeout(() => setShowPopup(false), 3000); // Hide pop-up after 3 seconds
      } else {
        setResponseMessage(result.message || "Failed to send email. Please try again."); // Show error message
      }
    } catch (error) {
      setResponseMessage("Error sending email. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact" className="active">Contact</a>
        </nav>
        <h1>Sports Management</h1>
      </header>

      <main>
        <section id="contact">
          <div className="container contact">
            <h2>Contact Us</h2>
            <p className="contact-sub">Have questions? We're here to help.</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                onChange={handleChange}
                value={formData.message}
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Display the response message */}
            {responseMessage && <p className="response">{responseMessage}</p>}

            {/* Pop-up message for success */}
            {showPopup && (
              <div className="popup">
                <span className="checkmark">✔️</span> Message Sent
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}