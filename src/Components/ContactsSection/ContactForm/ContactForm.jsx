import React, { useState } from 'react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Input,
  ErrorMessage,
  InputMessage,
  BlockBtn,
  SendBtn,
  ButtonImg,
} from './ContactForm.styled';

import { ArrowRightImg } from 'assets/icons/IconsComponent';

export const ContactForm = () => {
  const [contact, setContact] = useState([]);

  const ContactUsSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/)
      .required('Required')
      .min(2),
    email: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    phone: Yup.string()
      .matches(/^[+]?[0-9\s()-]+$/)
      .required('Required'),
    description: Yup.string().min(10),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },

    onSubmit: values => {
      setContact([...contact, { id: nanoid(), values }]);
      formik.resetForm();
    },
    validationSchema: ContactUsSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        * Full name:
        <Input
          name="name"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name && formik.touched.name}
        />
        {formik.errors.name && formik.touched.name && (
          <ErrorMessage>Wrong name</ErrorMessage>
        )}
      </Label>
      <Label>
        * E-mail:
        <Input
          name="email"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && formik.touched.email}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorMessage>Wrong Email</ErrorMessage>
        )}
      </Label>
      <Label>
        * Phone:
        <Input
          name="phone"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone && formik.touched.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <ErrorMessage>Wrong Phone</ErrorMessage>
        )}
      </Label>
      <Label>
        Message:
        <InputMessage
          name="description"
          maxLength={200}
          placeholder="Your message"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.errors.description && formik.touched.description}
        />
        {formik.errors.description && formik.touched.description && (
          <ErrorMessage>Min 10 symbols</ErrorMessage>
        )}
      </Label>
      <BlockBtn>
        <SendBtn type="submit" title='Submit form'>
          Send
          <ButtonImg>
            <ArrowRightImg width={'16'} height={'16'} />
          </ButtonImg>
        </SendBtn>
      </BlockBtn>
    </Form>
  );
};
