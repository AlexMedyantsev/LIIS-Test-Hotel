import styled from "styled-components"
import HotelsItem from "./HotelsItem"

const StyledList = styled('ul')`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: ${props => props.height};
  overflow-y: auto;
`

function HotelsList({hotels, height, hasImage}) {
  return (
    <StyledList height={height}>
      {hotels && hotels.map((hotel) => {
        return <HotelsItem key={hotel.hotelName + hotel.avgPrice} hotel={hotel} hasImage={hasImage}/>
      })}
    </StyledList>
  )
}

export default HotelsList