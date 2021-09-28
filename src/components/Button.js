import styled from "styled-components";
import {motion} from 'framer-motion'

const StyledButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;

  background: linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  border: 0;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: pointer;
  }
`
function Button({text, type}) {
  return (
    <StyledButton
      whileHover={{
        scale: 1.02,
        transition: {type: "Inertia", duration: 0.2},
      }}
      whileTap={{
        scale: 0.98,
        transition: {type: "Inertia", duration: 0.2},
      }}
      type={type}
    >
      {text}
    </StyledButton>
  )
}

export default Button;