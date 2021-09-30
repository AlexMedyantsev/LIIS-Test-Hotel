import styled from "styled-components"
import HotelsItem from "./HotelsItem"

const StyledList = styled('ul')`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 500px;
  overflow: auto;
`

function HotelsList({hotels, hasImage}) {
  return (
    <StyledList>
      {hotels && hotels.map((hotel) => {
        return <HotelsItem key={hotel.name} hotel={hotel} hasImage={hasImage}/>
      })}
    </StyledList>
  )
}

export default HotelsList