import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import * as Yup from 'yup';
import {DataProductType} from "../../../../DAL/api";
import {Button, TextField} from "@mui/material";
import style from './FormModal.module.scss';

interface FormFormikProps {
    onSubmit: (formData: DataProductType) => void
}

interface MyFormProps {
    initTitle?: string,
    initPrice?: string,
    initCategory?: string,
    initDescription?: string,
    initImage?: string,
    onSubmit: (formData: DataProductType) => void
}

const Form: FC<FormFormikProps & FormikProps<DataProductType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            title: props.initialValues.title,
            image: props.initialValues.image,
            category: props.initialValues.category,
            price: props.initialValues.price,
            description: props.initialValues.description,
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().min(2).required('Required'),
            category: Yup.string().min(3).required('Required'),
            price: Yup.number().positive('Value must be a positive number.').required('Required'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <h1>Product</h1>
            <TextField {...formik.getFieldProps('title')}
                       label={formik.errors.title ? 'Error' : 'Name Product'}
                       error={formik.errors.title !== undefined}
                       helperText={formik.errors.title ? formik.errors.title : null}/>
            <TextField {...formik.getFieldProps('category')}
                       label={formik.errors.category ? 'Error' : 'Category'}
                       error={formik.errors.category !== undefined}
                       helperText={formik.errors.category ? formik.errors.category : null}/>
            <TextField {...formik.getFieldProps('price')}
                       label={formik.errors.price ? 'Error' : 'Price Product'}
                       error={formik.errors.price !== undefined}
                       helperText={formik.errors.price ? formik.errors.price : null}/>
            <TextField {...formik.getFieldProps('image')} label={'Image URL'}/>
            <TextField {...formik.getFieldProps('description')} label={'Description product'}/>
            <div>
                <Button type="submit" variant={"outlined"} color={"primary"}>
                    Save
                </Button>
            </div>
        </form>
    )
})

export const FormContainer = withFormik<MyFormProps, DataProductType>({
    mapPropsToValues: props => {
        return {
            title: props.initTitle || '',
            image: props.initImage || '',
            category: props.initCategory || '',
            price: props.initPrice || '',
            description: props.initDescription || '',
            onSubmit: props.onSubmit
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
