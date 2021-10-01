import styled from "styled-components"
import house from "../images/house.svg"
import yellowStar from "../images/yellow-star.svg"
import grayStar from "../images/gray-star.svg"
import heartImage from "../images/heart.svg"
import { useSelector, useDispatch } from "react-redux"
import {formatData} from "../utils/common"

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

  background-image: url(${house});
  background-repeat: no-repeat;
  background-size: 35px 35px;
  background-position: center;

  background-color: #41522E0D;
  border-radius: 50%;
`

const StyledHotelName = styled('span')`
  ;
  max-width: 80%;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
`

const StyledDateInfo = styled('span')`
  padding-bottom: 10px;
  ;
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
  background-size: contain;
  cursor: pointer;
`


const StyledPrice = styled('span')`
  position: absolute;
  content: 'hey';
  bottom: 19px;
  right: 18px;
  ;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: right;

  &:before {
    position: absolute;
    content: 'Price:';
    top: 2.5px;
    left: -40px;
    ;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: #878787;
  }
`

function HotelsItem({hotel, hasImage}) {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.SEARCH.search)
  const favoriteHotels = useSelector((state) => state.DATA.favoriteHotels)

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

  const heartClickHandler = (hotel) => {
    if (favoriteHotels.length > 0 && favoriteHotels.filter(item => item.hotelId === hotel.hotelId).length > 0) {
      dispatch({type: 'REMOVE_HOTEL_FROM_FAVORITES', payload: hotel})
    } else {
      dispatch({type: 'ADD_HOTEL_TO_FAVORITES', payload: hotel})
    }
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
          <StyledHotelName>{hotel.hotelName}</StyledHotelName>
          <StyledHeart
            onClick={() => heartClickHandler(hotel)}
          />
        </StyledWrapper>

        <StyledWrapper alignItems={'center'}>
          <StyledDateInfo>{formatData(searchValue.checkInDate)}</StyledDateInfo>
          <StyledDateDash></StyledDateDash>
          <StyledDateInfo>{searchValue.daysInHotelAmount} день</StyledDateInfo>
        </StyledWrapper>
        <StyledWrapper>
          {drawRatingStars(hotel.stars).map((star, index) => {
            return <StyledStar key={index} backgroundImage={star === 'yellow' ? yellowStar : grayStar} />
          })}
        </StyledWrapper>
      </StyledWrapper>
      <StyledPrice>{Math.floor(hotel.priceAvg)} ₽</StyledPrice>
    </StyledItem>
  )
}

export default HotelsItem