import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
    name: Yup.string()
        .min(4, 'Name must be at least 4 characters')
        .required('Name is required'),

    city: Yup.string()
        .min(2, 'City must be at least 2 characters')
        .required('City is required'),

    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Only numbers allowed')
        .length(10, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),


    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
});
