import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import TextField from "../components/TextField";
import axios from "axios";
import createHMAC from "../api/hmacSnippet";
interface LoginValues {
  email: string;
  password: string;
  remember: boolean;
}

function LoginView() {
  const date = new Date();

  const hmacAccessKey = createHMAC({
    sharedKey: "2aa1e579a125402aa89c7ffa702af1f7",
    date: date,
    secretKey: "74d13f63b96245c8bb45c5700e8614d3",
    httpMethod: "GET",
    requestURL: "https://gateway-staging.ncrcloud.com/order/3/orders/1",
    nepOrganization: "test-drive-47aaf36264c049fca8341",
    contentType: "application/json",
  });

  const headers = {
    Allow: "application/json",
    accept: "application/json",
    "nep-organization": "ur-hack",
    "Content-Type": "application/json",
    Authorization: `AccessKey ${hmacAccessKey}`,
  };

  const initialValues: LoginValues = {
    email: "",
    password: "",
    remember: false,
  };

  const history = useHistory();


  return (
    <div className="overflow-hidden grid grid-cols-9 w-screen h-screen ">
      {/* Login Side */}
      <div className="col-span-4 h-full w-full flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-green-700 pb-12 font-bold">Patterson</h1>

        {/* Explore better validators?? */}
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            history.push("/dashboard");
            //axios.get("https://gateway-staging.ncrcloud.com/order/3/orders/1", {headers: headers});
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="flex flex-col max-w-4xl">
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="text" />
              <button
                className="bg-green-700 text-white h-12 rounded font-bold"
                type="submit"
              >
                Submit
              </button>
              <div className="flex items-center justify-between">
                <div className="my-2 flex items-center">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="rounded bg-white focus:ring-0 text-green-700 h-5 w-5 border-gray-300"
                  />
                  <label className="text-black p-2 font-medium">
                    Remember Me
                  </label>
                </div>
                <div>
                  <p>Forgot Password?</p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Image Side */}
      <div className="col-span-5 bg-cover bg-no-repeat bg-green-700"></div>
    </div>
  );
}

export default LoginView;
