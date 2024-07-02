import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { AppContext } from '../../App/App';

import { nanoid } from 'nanoid'

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
  const { toast, setToast } = useContext(AppContext);

  const ContactUsSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/)
      .required('Required')
      .min(2),
    email: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    phone: Yup.string()
      .matches(/^[+]?[0-9\s()-]+$/)
      .required('Required'),
    message: Yup.string().required('Required').min(10),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await emailjs.send(
          'service_45u9lcx',
          'template_jrg9y6t',
          values,
          'QC1E43bEDd-hjrFSZ'
        );
        console.info('SUCCESS', response.status, response.text);
        resetForm();
        setToast({
          id: nanoid(),
          status: 'success',
          messageText: 'Your message has been sent.',
        });
      } catch (error) {
        console.error('FAILED...', error.status, error.text);
        setToast({
          id: nanoid(),
          status: 'error',
          messageText: 'The message was not sent. Try again. Thank you.',
        });
      } finally {
        setSubmitting(false);
      }
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
          name="message"
          maxLength={200}
          placeholder="Your message"
          onChange={formik.handleChange}
          value={formik.values.message}
          error={formik.errors.message && formik.touched.message}
        />
        {formik.errors.message && formik.touched.message && (
          <ErrorMessage>Min 10 symbols</ErrorMessage>
        )}
      </Label>
      <BlockBtn>
        <SendBtn type="submit" title="Submit form">
          Send
          <ButtonImg>
            <ArrowRightImg width={'16'} height={'16'} />
          </ButtonImg>
        </SendBtn>
      </BlockBtn>
    </Form>
  );
};
