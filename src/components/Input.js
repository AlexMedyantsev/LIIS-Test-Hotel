import {useState} from 'react'
import styled from 'styled-components'
import { useFormik } from "formik"

const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledLabel = styled('label')`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 7px;
`

const StyledInput = styled('input')`
  display: flex;

  width: 100%;
  height: 50px;
  margin-bottom: 27px;
  padding: 16px;

  font-weight: 300;
  border-radius: 4px;
  border: 1px solid #C9CACC
`

const StyledErrorMessage = styled('div')`
  bottom: 5px;
  left: 5px;
  color: #EB1717;
`

function InputWithLabel({type, labelText, placeholder, name, isRequired, onChangeHandler, onBlurHandler, value, error}) {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        placeholder={placeholder}
        name={name}
        required={isRequired}
        autoComplete="off"
      />
      {error ? <StyledErrorMessage>{error}</StyledErrorMessage> : null}
    </StyledWrapper>
  )
}

export default InputWithLabel