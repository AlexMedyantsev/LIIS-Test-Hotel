import styled from "styled-components"
import yellowStar from "../images/yellow-star.svg"
import grayStar from "../images/gray-star.svg"
import heartImage from "../images/heart.svg"

const StyledItem = styled('li')`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-top: 16px;
  padding-bottom: 15px;

  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
  // border-bottom-left-radius: 1px;
`

const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width:  ${props => props.width};
`

const StyledHotelImage = styled('div')`
  width: 64px;
  height: 64px;

  margin-right: 24px;
  background-color: #41522E0D;
  border-radius: 50%;
`

const StyledHotelName = styled('span')`
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
`

const StyledDateInfo = styled('span')`
  padding-bottom: 10px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;

  color: #878787;
`

const StyledDateDash = styled('div')`
  height: 1px;
  width: 9px;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  background-color: #C4C4C4;
`

const StyledStar = styled('div')`
  width: 17px;
  height: 17px;
  margin-right: 3px;

  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
`

const StyledHeart = styled('div')`
  width: 21px;
  height: 18px;

  // margin-top: 10px;
  margin-right: 25px;

  background-image: url(${heartImage});
  background-repeat: no-repeat;
  background-size: contain
  cursor: pointer;
`

const StyledPrice = styled('span')`
  position: absolute;
  content: 'hey';
  bottom: 19px;
  right: 18px;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: right;

`

function HotelsItem({hotel, hasImage}) {

  const drawRatingStars = (rating) => {
    const starsArray = [];
    const grayStarsAmount = 5 - rating;

    let i = 0
    while (i < rating) {
      starsArray.push('yellow')
      i++
    }

    let x = 0
    while (x < grayStarsAmount) {
      starsArray.push('gray')
      x++
    }

    return starsArray
  }

  return (
    <StyledItem>
      <StyledWrapper>
        {hasImage &&
          <StyledHotelImage></StyledHotelImage>
        }
      </StyledWrapper>

      <StyledWrapper width={'100%'} flexDirection="column" alignItems={'flex-start'}>

        <StyledWrapper width={'100%'} justifyContent={'space-between'}>
          <StyledHotelName>{hotel.name}</StyledHotelName>
          <StyledHeart></StyledHeart>
        </StyledWrapper>

        <StyledWrapper alignItems={'center'}>
          <StyledDateInfo>{hotel.date}</StyledDateInfo>
          <StyledDateDash></StyledDateDash>
          <StyledDateInfo>{hotel.daysAmount} день</StyledDateInfo>
        </StyledWrapper>
        <StyledWrapper>
          {drawRatingStars(hotel.rating).map((star) => {
            return <StyledStar backgroundImage={star === 'yellow' ? yellowStar : grayStar} />
          })}
        </StyledWrapper>
      </StyledWrapper>
      <StyledPrice>{hotel.price} ₽</StyledPrice>
    </StyledItem>
  )
}

export default HotelsItem