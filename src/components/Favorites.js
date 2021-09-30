import styled from 'styled-components'
import {useEffect, useState} from "react"
import {hotels} from "../utils/const"
import {useSelector} from 'react-redux'
import HotelsList from "./HotelsList"
import arrowsUp from "../images/up-arrows.svg"
import arrowsDown from "../images/down-arrows.svg"
import arrowsDimmed from "../images/dimmed-arrows.svg"

const StyledWrapper = styled('div')`
  display: flex;
  margin-bottom: ${props => props.marginBottom}
`

const StyledTitle = styled('h2')`
  display: block;
  margin-bottom: 32px;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`

const StyledSortButton = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 8px;
  width: ${props => props.width};
  padding: 6px 14px 6px 4px;
  border-radius: 4px;
  border: 1px solid ${props => props.borderColor};
  background: 0;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  cursor: pointer;
`

const StyledArrows = styled('div')`
display: flex;
  width: 12.5px;
  height: 15px;
  margin-left: 10px;

  background-image url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  // background-size: contain;
`

function Favorites() {
  const [ratingButton, changeRatingButton] = useState({
    isActive: false,
    isOrderUp: true,
  })
  const [priceButton, changePriceButton] = useState({
    isActive: false,
    isOrderUp: true,
  })
  const favoriteHotels = useSelector((state) => state.DATA.favoriteHotels)

  useEffect(() => {
    filterHotels()
  }, [favoriteHotels.length])

  const filterHotels = () => {
    if (!ratingButton.isActive && !priceButton.isActive) {
      return favoriteHotels
    }

    // {RATING ⬆️, PRICE ⬆️}
    if (ratingButton.isActive && ratingButton.isOrderUp &&
        priceButton.isActive && priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => a.stars - b.stars || a.priceAvg - b.priceAvg);
    }
    
    // {RATING ⬇️, PRICE ⬇️}
    if (ratingButton.isActive && !ratingButton.isOrderUp && 
       priceButton.isActive && !priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => b.stars - a.stars || b.priceAvg - a.priceAvg);
    }

    // {RATING ⬆️, PRICE ⬇️}
    if (ratingButton.isActive && ratingButton.isOrderUp && 
        priceButton.isActive && !priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => a.stars - b.stars || b.priceAvg - a.priceAvg);
    }

    // {RATING ⬇️, PRICE ⬆️}
    if (ratingButton.isActive && !ratingButton.isOrderUp &
        priceButton.isActive && priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => b.stars - a.stars || a.priceAvg - b.priceAvg);
    }

    // {RATING ⬇️,  ̶p̶r̶i̶c̶e̶}
    if (ratingButton.isActive && !ratingButton.isOrderUp &&
       !priceButton.isActive) {
      return favoriteHotels.sort((a, b) => b.priceAvg - a.priceAvg);
    }

    // {RATING ⬆️,  ̶p̶r̶i̶c̶e̶}
    if (ratingButton.isActive && ratingButton.isOrderUp &&
       !priceButton.isActive) {
      return favoriteHotels.sort((a, b) => a.stars - b.stars);
    }

    // {r̶a̶t̶i̶n̶g̶, PRICE ⬆️}
    if (!ratingButton.isActive && priceButton.isActive &&
      priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => a.priceAvg - b.priceAvg);
    }

    // {r̶a̶t̶i̶n̶g̶, PRICE ⬇️}
    if (!ratingButton.isActive && priceButton.isActive &&
       !priceButton.isOrderUp) {
      return favoriteHotels.sort((a, b) => b.priceAvg - a.priceAvg);
    }
  }

  const ratingButtonClickHandler = (name) => {
    if (!ratingButton.isActive) {
      return changeRatingButton({...ratingButton, isActive: true})
    }

    if (ratingButton.isActive) {
      return changeRatingButton({...ratingButton, isOrderUp: !ratingButton.isOrderUp})
    }
  }


  const priceButtonClickHandler = (name) => {
    if (!priceButton.isActive) {
      return changePriceButton({...priceButton, isActive: true})
    }

    if (priceButton.isActive) {
      return changePriceButton({...priceButton, isOrderUp: !priceButton.isOrderUp})
    }
  }

  const getRightArrowImage = (button) => {
    if (!button.isActive) {
      return arrowsDimmed
    }

    if (button.isOrderUp === true) {
      return arrowsUp
    } else {
      return arrowsDown
    }
  }
  return (
    <>
      <StyledTitle>Избранное</StyledTitle>
      <StyledWrapper marginBottom={'28px'}>
        <StyledSortButton
          width={'89px'}
          onClick={ratingButtonClickHandler}
          borderColor={ratingButton.isActive ? '#41522E' : '#E5E5E5'}
        >
          Рейтинг
          <StyledArrows backgroundImage={() => getRightArrowImage(ratingButton)}></StyledArrows>
        </StyledSortButton>
        <StyledSortButton
          width={'71px'}
          onClick={priceButtonClickHandler}
          borderColor={priceButton.isActive ? '#41522E' : '#E5E5E5'}
        >
          Цена
          <StyledArrows backgroundImage={() => getRightArrowImage(priceButton)}></StyledArrows>
        </StyledSortButton>
      </StyledWrapper>
      <HotelsList hotels={filterHotels(favoriteHotels)} hasImage={false} />
    </>
  )
}

export default Favorites;