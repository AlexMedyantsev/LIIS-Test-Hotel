import AuthModule from "./AuthModule"
import styled from 'styled-components'
import img_bg from "../images/hotel-test-bg.jpg"

const StyledMain = styled('main')`
  width: 100vw;
  height: 100vh;

  background-image: url(${img_bg});  
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledOverlay = styled('div')`  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
`

function AuthPage() {
  return (
    <StyledMain>
      <StyledOverlay>
        <AuthModule />
      </StyledOverlay>
    </StyledMain>
  )
}

export default AuthPage