import * as Yup from 'yup';

const initialValues = {
  title: "",
  description: ""
}

const validationSchema = Yup.object({
  title: Yup
    .string()
    .required('Informe o título'),
  description: Yup
    .string()
    .required('Informe a descrição'),
})

export {
  initialValues,
  validationSchema
}