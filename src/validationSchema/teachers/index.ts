import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  qualification: yup.string().required(),
  experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
