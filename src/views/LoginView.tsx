import React from "react";
import { Formik, Form} from "formik";
import TextField from "../components/TextField";
import loginBackground from "../assets/images/loginBackground.jpg"
interface LoginValues {
  email: string;
  password: string;
}

class LoginView extends React.Component {
  render() {
    const initialValues: LoginValues = { email: "", password: "" };
    return (
      <div className="overflow-hidden grid grid-cols-9 w-screen h-screen ">
        {/* Login Side */}
        <div className="col-span-4 h-full w-full flex flex-col justify-center items-center ">
          <h1>Patterson</h1>

          {/* Explore better validators?? */}
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));

                setSubmitting(false);
              }, 400);
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
                <TextField label="Password" name="password" type="text"   />
                <button className="bg-green-700 text-white h-12 rounded font-bold" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Image Side */}
        <div className="col-span-5 bg-cover bg-no-repeat bg-green-700"></div>
      </div>
    );
  }
}

export default LoginView;
