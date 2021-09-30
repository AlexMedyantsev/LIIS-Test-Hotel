import styled from 'styled-components'
import Button from "./Button"
import InputWithLabel from "./InputWithLabel"
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik';
import {Link} from "react-router-dom"

const validate = values => {
  const errors = {};

  if (!values.login) {
    errors.login = 'Заполните это поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
    errors.login = 'Некорректная почта';
  }

  if (!values.password) {
    errors.password = 'Заполните это поле';
  } else if (values.password.length < 7) {
    errors.password = 'В Пароле должно быть минимум 8 символов ';
  } else if (/[а-яА-ЯЁё]/.test(values.password)) {
    errors.password = 'В пароле нельзя использовать киррилицу'
  }

  return errors;
};

const StyledForm = styled('form')`
  width: 409px;
  height: auto;
  padding: 32px;
  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: visible;
`


const StyledTitle = styled('h1')`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  margin-bottom: 32px;
  color: #424242;
  -webkit-text-stroke: 1px #000;
`

function AuthModule() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate,
    onSubmit: values => {
      dispatch({type: 'CHANGE_IS_AUTHENTICATED'})
    },
  });

  return (
    <StyledForm
      onSubmit={formik.handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <StyledTitle>Simple Hotel Check</StyledTitle>
      <InputWithLabel
        type="text"
        name="login"
        labelText="Логин"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.login}
        error={formik.errors.login}
      />
      <InputWithLabel
        type="password"
        name="password"
        labelText="Пароль"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button text={'Войти'} type={'submit'} />
    </StyledForm>
  )
}

export default AuthModule