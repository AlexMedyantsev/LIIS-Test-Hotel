import styled from 'styled-components';
import {useSelector} from 'react-redux'
import svg from "../images/arrow-right.svg"
import HotelsList from './HotelsList'
import {hotels} from '../utils/const';

const StyledMainContainer = styled('div')`
  width: 100%;
`

const StyledWrapper = styled('div')`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: 100%;
`

const StyledSearchLocationInfo = styled('span')`
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #424242;
`

const StyledArrow = styled('div')`
  height: 17.3px;
  width: 8.6px;

  margin-top: 6px;
  margin-left: 20px;
  margin-right: 20px;

  background-image: url(${svg});
  background-repeat: no-repeat;
  background-size: contain
`

const StyledSearchDate = styled('span')`
  white-space:nowrap;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: right;
  color: #41522E;
`

const StyledImagesList = styled('ul')`
  display: flex;
  overflow-x: auto;

  margin-top: 28px;
  margin-bottom: 28px;
`

const StyledImagesItem = styled('li')`
flex: 0 0 auto;
  width: 164px;
  height: 149px;
  margin-right: 12px;

  background-image: url('${props => props.backgroundImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 10px;
`

const StyledFavoritesSpan = styled('span')`
  display: block;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: #424242;
`


function SearchResults() {
  const carouselImages = useSelector((state) => state.DATA.carouselImages)
  return (
    <StyledMainContainer>

      {/* Информация о дате поиска и локации */}
      <StyledWrapper justifyContent={'space-between'} alignItems={'center'} >
        <StyledWrapper alignItems={'center'}>
          <StyledSearchLocationInfo>Отели</StyledSearchLocationInfo>
          <StyledArrow />
          <StyledSearchLocationInfo>Москва</StyledSearchLocationInfo>
        </StyledWrapper>
        <StyledSearchDate>07 Июля 2020</StyledSearchDate>
      </StyledWrapper>

      {/* Карусель с картинками*/}
      <StyledImagesList>
        {carouselImages.map((image) => {
          return <StyledImagesItem key="" backgroundImage={image} ></StyledImagesItem>
        })}
      </StyledImagesList>

      {/* Строка с количеством избранных отелей */}
      <StyledFavoritesSpan>Добавлено в Избранное: <b>3</b> отеля</StyledFavoritesSpan>

      {/* Список Отелей*/}
      <HotelsList hotels={hotels} hasImage={true} />
    </StyledMainContainer>
  )
}

export default SearchResults