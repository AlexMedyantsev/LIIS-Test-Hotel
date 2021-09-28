import styled from 'styled-components'
import Button from "./Button"
import InputWithLabel from "./Input"

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
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  margin-bottom: 32px;
  border: 1px solid #000000
`

function AuthModule() {
  return (
    <StyledForm method="post" autoComplete="off">
      <StyledTitle>Simple Hotel Check</StyledTitle>
      <InputWithLabel type="email" name="email" labelText="Логин" isRequired={true}/>
      <InputWithLabel type="password" name="password" labelText="Пароль" isRequired={true}/>
      <Button text={'Войти'} type={''}/>
    </StyledForm>
  )
}

export default AuthModule