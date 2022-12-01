import * as Yup from 'yup';

const initialValues = {
  img: "",
  name: "",
  description: ""
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .required('Informe o nome'),
  description: Yup
    .string()
    .required('Informe a descrição'),
})

export {
  initialValues,
  validationSchema
}