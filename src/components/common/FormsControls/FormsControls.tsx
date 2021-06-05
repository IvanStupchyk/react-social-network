import React from "react"
import s from './FormsControls.module.scss'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({meta: {error, touched}, children, ...props}) => {
    const hasError = error && touched

    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}




