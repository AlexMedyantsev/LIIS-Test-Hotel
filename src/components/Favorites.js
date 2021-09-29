import styled from 'styled-components'
import {hotels} from "../utils/const"
import HotelsList from "./HotelsList"

const StyledTitle = styled('h2')`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`

function Favorites() {
  return (
    <>
      <StyledTitle>Избранное</StyledTitle>
      <HotelsList hotels={hotels} hasImage={false}/>
    </>
  )
}

export default Favorites;