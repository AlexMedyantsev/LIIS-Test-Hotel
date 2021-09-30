import styled from 'styled-components';
import {useEffect} from "react"
import {useSelector} from 'react-redux'
import svg from "../images/arrow-right.svg"
import HotelsList from './HotelsList'
import {ScrollingCarousel} from '@trendyol-js/react-carousel';
import {getNews} from "../redux-saga/actions"
import {connect} from 'react-redux';
import {formatData} from "../utils/common"


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

const StyledHotelsNumber = styled('span')`
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
`


function SearchResults({getNews, data}) {
  const carouselImages = useSelector((state) => state.DATA.carouselImages)
  const hotels = useSelector((state) => state.DATA.hotels)
  const searchValue = useSelector((state) => state.UI.search)
  const favoriteHotels = useSelector((state) => state.DATA.favoriteHotels)

  useEffect(() => {
    getNews()
  }, []);

  return (
    <StyledMainContainer>

      {/* Информация о дате поиска и локации */}
      <StyledWrapper justifyContent={'space-between'} alignItems={'center'} >
        <StyledWrapper alignItems={'center'}>
          <StyledSearchLocationInfo>Отели</StyledSearchLocationInfo>
          <StyledArrow />
          <StyledSearchLocationInfo>{searchValue.location}</StyledSearchLocationInfo>
        </StyledWrapper>
        <StyledSearchDate>{formatData(searchValue.checkInDate)}</StyledSearchDate>
      </StyledWrapper>

      {/* Карусель с картинками*/}
      <StyledImagesList>
        <ScrollingCarousel nextIcon="" nextLabel="" show={3.5} slide={3} swiping={true} useArrowKeys={false}>
          {carouselImages.map((image) => {
            return <StyledImagesItem key="image" backgroundImage={image} ></StyledImagesItem>
          })}
        </ScrollingCarousel>
      </StyledImagesList>

      {/* Строка с количеством избранных отелей */}
      <StyledFavoritesSpan>Добавлено в Избранное: <StyledHotelsNumber>{favoriteHotels.length}</StyledHotelsNumber> отеля</StyledFavoritesSpan>

      {/* Список Отелей*/}
      <HotelsList hotels={hotels} hasImage={true} />
    </StyledMainContainer>
  )
}

const mapDispatchToProps = {
  getNews: getNews,
};

export default connect(
  null,
  mapDispatchToProps
)(SearchResults);

// export default SearchResults