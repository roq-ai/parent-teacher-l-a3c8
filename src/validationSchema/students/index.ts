import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  grade: yup.number().integer().required(),
  performance_data: yup.string().required(),
  routine: yup.string().required(),
  school_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
