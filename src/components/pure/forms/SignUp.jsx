import React from "react";
import { Formik, Field, Form } from "formik";

export const SignUp = () => {
  return (
    <div
      style={{ display: "grid", placeItems: "center", height: "90vh" }}
      className={"container"}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          //   await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
          alert("Not ready yet...");
        }}
      >
        <Form>
          <div style={{ display: "grid", placeItems: "center" }}>
            <h2 style={{ color: "#e8f48c" }}>Sign Up</h2>
            <Field
              id="email"
              name="email"
              placeholder="Email..."
              className={"form-row form-control"}
              required
            />
            <Field
              id="password"
              name="password"
              placeholder="Password..."
              type="password"
              className={"form-row form-control"}
              required
            />
          </div>
          <div style={{ display: "grid", placeContent: "center" }}>
            <button type="submit" className={"btn btn-primary btn-lg"}>
              Enter
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
