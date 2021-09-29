import styled from 'styled-components'
import Button from "./Button"
import InputWithLabel from "./InputWithLabel"
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik';

const StyledForm = styled('form')`
  width: 100%;
`

const validate = values => {
  const errors = {};

  if (!values.checkInDate) {
    errors.checkInDate = 'Заполните это поле';
  } else if (values.checkInDate.length < 7) {
    errors.checkInDate = 'В Пароле должно быть минимум 8 символов ';
  } else if (/[а-яА-ЯЁё]/.test(values.checkInDate)) {
    errors.checkInDate = 'В пароле нельзя использовать киррилицу'
  }

  if (!values.location) {
    errors.location = 'Заполните это поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.location)) {
    errors.location = 'Некорректная почта';
  }

  if (!values.daysAmount) {
    errors.daysAmount = 'Заполните это поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.daysAmount)) {
    errors.daysAmount = 'Некорректная почта';
  }

  return errors;
};

function HotelSearchForm() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      location: '',
      password: '',
      daysAmount: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate,
    onSubmit: values => {
      dispatch({type: 'CHANGE_IS_AUTHENTICATED'})
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputWithLabel
        type="text"
        name="location"
        labelText="Локация"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.location}
        error={formik.errors.location}
      />

      <InputWithLabel
        type="date"
        name="checkInDate"
        labelText="Дата Заселения"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.checkInDate}
        error={formik.errors.checkInDate}
      />

      <InputWithLabel
        type="number"
        name="daysAmount"
        labelText="Количество Дней"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.daysAmount}
        error={formik.errors.daysAmount}
      />
      <Button text={'Войти'} type={'submit'} />
    </StyledForm>
  )
}

export default HotelSearchForm