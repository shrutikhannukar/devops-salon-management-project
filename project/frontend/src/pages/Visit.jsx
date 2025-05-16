// import React from 'react'
import axios from "axios";
import { useState } from "react";

const Visit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  let handleVisit = async (e, name, email, phone, category, date, message) => {
    e.preventDefault();
    alert(
      name +
        "== " +
        email +
        " ==" +
        phone +
        " ==" +
        category +
        " ==" +
        date +
        " ==" +
        message
    );

    axios
      .post("/api/book/visit", { name, email, phone, category, date, message })
      .then(() => console.log(" Booking Confirmed"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="visit" id="visit">
      {/* Your visit content here */}
      <h1 className="heading"> book a visit </h1>

      <div className="row">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => {
            handleVisit(e, name, email, phone, category, date, message);
          }}
        >
          <h3>book your first visit today</h3>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="input-field"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input-field"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="inputBox">
            <select
              name="category"
              className="input-field"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="Select category">Select category</option>
              <option value="Beauty & spa">Beauty & spa</option>
              <option value="Body massage">Body massage</option>
              <option value="Shaving & Facial">Shaving & Facial</option>
              <option value="Hair Color">Hair Color</option>
            </select>
          </div>
          <div className="inputBox">
            <input
              type="date"
              name="date"
              required
              className="input-field date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div className="inputBox">
            <textarea
              name="message"
              placeholder="Write Message"
              required
              className="input-field"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>

          <input type="submit" value="Appointment Now" className="btn" />
        </form>

        <div className="image">
          <img src="contact.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Visit;
