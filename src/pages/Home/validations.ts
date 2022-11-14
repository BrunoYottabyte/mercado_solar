import * as yup from 'yup';

const monthSchema = yup.object({
  january_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  february_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  march_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  april_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  may_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  june_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  july_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  august_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  september_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  october_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  november_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
  december_consumption_avg: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
});

const budgetRequestSchema = yup.object({
  client_name: yup.string().required('Obrigatório'),
  client_email: yup.string().email('E-mail inválido').required('Obrigatório'),
  client_phone: yup.string().required('Obrigatório'),
  client_postal_code: yup
    .string()
    .required('Obrigatório')
    .matches(/^[0-9]{5}[0-9]{3}$/, 'CEP inválido')
    .max(8, 'CEP inválido'),
  // client_type: yup.string().required('Obrigatório'),
  client_imovel: yup.string().required('Obrigatório'),
  client_type: yup.string().required('Obrigatório'),
  need_representative: yup.string().required('Obrigatório'),
});

const averageConsumptionSchema = yup.object({
  average_consumption: yup
    .number()
    .required('Obrigatório')
    .typeError('Obrigatório')
    .transform(value => (isNaN(value) ? undefined : value)),
});

export {monthSchema, budgetRequestSchema, averageConsumptionSchema};
