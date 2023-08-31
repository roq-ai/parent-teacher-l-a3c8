import * as yup from 'yup';

export const conversationValidationSchema = yup.object().shape({
  topic: yup.string().required(),
  message: yup.string().required(),
  date_time: yup.date().required(),
  parent_id: yup.string().nullable().required(),
  teacher_id: yup.string().nullable().required(),
});
