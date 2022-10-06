import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  password: ""
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .required('Informe seu nome'),
    email: Yup
  .string()
    .email('Informe um e-mail válido')
    .required('Informe um e-mail'),
  password: Yup
    .string()
    .required('Informe uma senha')
})

export {
  initialValues,
  validationSchema
}