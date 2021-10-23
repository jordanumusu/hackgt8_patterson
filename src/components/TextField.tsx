import React from "react";
import { FieldHookConfig, useField } from "formik";

interface TextFieldProps {
  label: string;
}

function TextField({ label, ...props } : TextFieldProps & FieldHookConfig<string>): JSX.Element {
  const [field, meta] = useField(props);
  return (
    <div className="border-2 border-gray-200 focus-within:border-green-600 py-4 mb-8 relative rounded ">
      <input className="peer outline-none w-full " {...field} />
      <label
        htmlFor="email"
        className="-top-3 absolute bg-white text-sm text-gray-400 font-bold left-2 peer-focus:text-green-600"
      >
        {label}
      </label>
      
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextField;
