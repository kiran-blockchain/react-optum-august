import * as yup from 'yup';
import {ref} from 'yup';
export const loginSchema = yup.object({
    username: yup.string()
        .max(10, 'User name cannot be more than 10 characters')
        .required('User name required'),
    password: yup.string()
        .required('Password required'),
  confirmPassword :yup.string()
  .required('Please re-enter your password')
  .oneOf([ref('password')],'Passwords does not match')

})