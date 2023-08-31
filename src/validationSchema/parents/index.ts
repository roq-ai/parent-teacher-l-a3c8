import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  relationship: yup.string().required(),
  contact_number: yup.string().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
