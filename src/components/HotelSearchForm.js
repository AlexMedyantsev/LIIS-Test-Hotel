import styled from 'styled-components'
import Button from "./Button"
import InputWithLabel from "./InputWithLabel"
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const StyledForm = styled('form')`
  width: 100%;
`

const validate = values => {
  const errors = {};

  if (!values.location) {
    errors.location = 'Заполните это поле';
  } 

  if (!values.checkInDate) {
    errors.checkInDate = 'Заполните это поле';
  } 

  if (!values.daysInHotelAmount) {
    errors.daysInHotelAmount = 'Заполните это поле';
  } 

  return errors;
};

function HotelSearchForm() {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.UI.search)

  const formik = useFormik({
    initialValues: {
      location: '',
      checkInDate: '',
      daysInHotelAmount: '',
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
      dispatch({type: 'CHANGE_SEARCH_DATA', payload: {location: values.location, checkInDate: values.checkInDate, daysInHotelAmount: values.daysInHotelAmount}})
    },
  });

  useEffect(() => {
    dispatch({type: 'GET_HOTELS'})
  }, [searchValue])

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
        name="daysInHotelAmount"
        labelText="Количество Дней"
        isRequired={true}
        onChangeHandler={formik.handleChange}
        onBlurHandler={formik.handleBlur}
        value={formik.values.daysInHotelAmount}
        error={formik.errors.daysInHotelAmount}
      />
      <Button text={'Найти'} type={'submit'} />
    </StyledForm>
  )
}

export default HotelSearchForm