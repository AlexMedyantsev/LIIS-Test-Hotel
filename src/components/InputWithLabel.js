import styled from 'styled-components'
import moment from 'moment'

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
  color: ${props => props.color}
`

const StyledInput = styled('input')`
  display: flex;
  position: relative;

  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 16px;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  border-radius: 4px;
  border: 1px solid ${props => props.borderColor};
`

const StyledErrorMessage = styled('div')`
  bottom: 5px;
  left: 5px;
  color: #EB1717;
`


function InputWithLabel({type, labelText, placeholder, name, isRequired, onChangeHandler, onBlurHandler, value, error}) {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name} color={error ? '#EB1717' : '#424242'}>{labelText} </StyledLabel>
      <StyledInput
        type={type}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={value}
        placeholder={placeholder}
        name={name}
        required={isRequired}
        autoComplete="off"
        min={ type === 'date' ? moment().format('YYYY-MM-DD') : 1}
        borderColor={error ? '#EB1717' : '#C9CACC'}
      />
      {error ? <StyledErrorMessage>{error}</StyledErrorMessage> : null}
    </StyledWrapper >
  )
}

export default InputWithLabel