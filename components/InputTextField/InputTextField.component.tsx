import React, { Fragment, InputHTMLAttributes } from "react";
import { useField } from "formik";
import { Input } from "./InputTextField.styles";

type InputTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    width: string;
};

const InputTextField: React.FC<InputTextFieldProps> = (props) => {
    const [field] = useField(props);

    return (
        <Fragment>
            <Input {...field} id={field.name} width={props.width} />
        </Fragment>
    );
};

export default InputTextField;
