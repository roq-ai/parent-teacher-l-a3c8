import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createConversation } from 'apiSdk/conversations';
import { conversationValidationSchema } from 'validationSchema/conversations';
import { ParentInterface } from 'interfaces/parent';
import { TeacherInterface } from 'interfaces/teacher';
import { getParents } from 'apiSdk/parents';
import { getTeachers } from 'apiSdk/teachers';
import { ConversationInterface } from 'interfaces/conversation';

function ConversationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ConversationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createConversation(values);
      resetForm();
      router.push('/conversations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ConversationInterface>({
    initialValues: {
      topic: '',
      message: '',
      date_time: new Date(new Date().toDateString()),
      parent_id: (router.query.parent_id as string) ?? null,
      teacher_id: (router.query.teacher_id as string) ?? null,
    },
    validationSchema: conversationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Conversations',
              link: '/conversations',
            },
            {
              label: 'Create Conversation',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Conversation
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.topic}
            label={'Topic'}
            props={{
              name: 'topic',
              placeholder: 'Topic',
              value: formik.values?.topic,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.message}
            label={'Message'}
            props={{
              name: 'message',
              placeholder: 'Message',
              value: formik.values?.message,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="date_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.date_time ? new Date(formik.values?.date_time) : null}
              onChange={(value: Date) => formik.setFieldValue('date_time', value)}
            />
          </FormControl>
          <AsyncSelect<ParentInterface>
            formik={formik}
            name={'parent_id'}
            label={'Select Parent'}
            placeholder={'Select Parent'}
            fetcher={getParents}
            labelField={'relationship'}
          />
          <AsyncSelect<TeacherInterface>
            formik={formik}
            name={'teacher_id'}
            label={'Select Teacher'}
            placeholder={'Select Teacher'}
            fetcher={getTeachers}
            labelField={'subject'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/conversations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'conversation',
    operation: AccessOperationEnum.CREATE,
  }),
)(ConversationCreatePage);
