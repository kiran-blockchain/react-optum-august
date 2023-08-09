import * as yup from 'yup';
export const loginSchema = yup.object({
    username: yup.string()
        .max(10, 'User name cannot be more than 10 characters')
        .required('User name required'),
    password: yup.string()
        .required('Password required')
})