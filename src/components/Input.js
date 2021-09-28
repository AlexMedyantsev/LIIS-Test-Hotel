import {useState} from 'react'
import styled from 'styled-components'

const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: column;
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

function InputWithLabel({type, labelText, placeholder, name, isRequired}) {
  const [inputValue, setInputValue] = useState('')

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        type={type}
        value={inputValue}
        placeholder={placeholder}
        name={name}
        required={isRequired}
        autoComplete="off"
        onChange={(e) => inputChangeHandler(e)}
      />
    </StyledWrapper>
  )
}

export default InputWithLabel