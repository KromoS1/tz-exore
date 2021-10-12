import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import {Button, Paper, TextField} from "@mui/material";
import style from './Login.module.scss';

export interface ValuesType {
    userName: string
    password: string
}
interface FormFormikProps {
    onSubmit: (formData: ValuesType) => void
}
interface MyFormProps {
    initialUserName?: string;
    initialPassword?: string;
    onSubmit: (formData: ValuesType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            userName: props.initialValues.userName,
            password: props.initialValues.password,
        },
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <Paper elevation={8} className={style.paper}>
                <h1>Login</h1>
                <TextField label={"UserName"}
                           {...formik.getFieldProps("userName")}/>
                <TextField label={"Password"}
                           type={"password"}
                           {...formik.getFieldProps("password")}/>
                <Button type="submit" variant={"outlined"} color={"primary"}>
                    Submit
                </Button>
            </Paper>
        </form>
    )
})

export const FormLoginContainer = withFormik<MyFormProps, ValuesType>({
    mapPropsToValues: props => {
        return {
            userName: props.initialUserName || '',
            password: props.initialPassword || '',
            onSubmit: props.onSubmit
        };
    },
    handleSubmit: (values,form) => {
        form.props.onSubmit(values);
    },
})(Form);


