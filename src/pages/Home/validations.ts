import * as yup from 'yup';

const monthSchema = yup.object({
  january_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  february_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  march_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  april_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  may_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  june_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  july_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  august_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  september_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  october_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  november_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
  december_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório'),
});

const budgetRequestSchema = yup.object({
  client_name: yup.string().required('Obrigatório'),
  client_email: yup.string().email('E-mail inválido').required('Obrigatório'),
  client_phone: yup.string().required('Obrigatório'),
  client_postal_code: yup
    .string()
    .required('Obrigatório')
    .matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido'),
  // client_type: yup.string().required('Obrigatório'),
  client_imovel_type: yup.string().required('Obrigatório'),
  average_consumption: yup
    .number()
    .optional()
    .typeError('')
    .transform(value => (isNaN(value) ? undefined : value)),
});

export {monthSchema, budgetRequestSchema};
