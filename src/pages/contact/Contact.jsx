import React, { useState } from "react";
import { Modal } from "../../components/pure/Modal";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  message: "",
};

const inputStyle = {
  color: "#6f00ff",
  fontWeight: "bold",
};

export const Contact = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    setModal(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return modal ? (
    <Modal>
      <div
        // no es necesario el style
        className={"text-center"}
      >
        <h3 style={{ color: "white" }}>Message sent ;)</h3>
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  ) : (
    <div className={"text-center container"}>
      <h1 style={{ color: "white" }}>Contact</h1>
      <form
        onSubmit={handleSubmit}
        className={""}
        style={{ display: "grid", placeItems: "center" }}
      >
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder={"Name..."}
          className={"form-control form-row m-2"}
          style={inputStyle}
          required
        />
        <input
          type="text"
          value={form.lastname}
          name="lastname"
          onChange={handleChange}
          placeholder={"Lastname..."}
          className={"form-control form-row m-2"}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={"Email..."}
          className={"form-control form-row m-2"}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder={"Message..."}
          className={"form-control form-row m-2"}
          style={inputStyle}
          required
        ></textarea>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
};
