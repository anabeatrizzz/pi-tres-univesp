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
    .required('Informe seu e-mail'),
  password: Yup
    .string()
    .required('Informe sua senha')
})

export {
  initialValues,
  validationSchema
}