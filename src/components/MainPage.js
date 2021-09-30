import {useDispatch} from 'react-redux'
import {useEffect} from "react"
import moment from "moment"
import styled from 'styled-components'
import logoutIcon from "../images/logout-icon.svg"
import HotelSearchForm from "./HotelSearchForm"
import Favorites from "./Favorites"
import SearchResults from "./SearchResults"

const StyledMainContainer = styled('div')`
  display: flex;
  justify-content: center;

  width: 100vw;
  padding-top: 92px;

  background-color: #E5E5E5;
`

const StyledCenterWrapper = styled('div')`
  display: flex;
`

const StyledFlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;

  width: ${props => props.width};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  padding: 32px;
  padding-top: ${props => props.paddingTop};

  background-color: #ffffff;
  border-radius: 16px;
`

const StyledLogo = styled('h1')`
  position: absolute;
  top: 32px;
  left: 32px;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`

const StyledLogoutButton = styled('button')`
  position: absolute;
  top: 36px;
  right: 68px;
  border: 0;
  background: none;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.40799999237060547px;
  text-align: right;

  &:after {
    position: absolute;
    content: "";
    top: 2px; 
    right: -22px;

    width: 18px;
    height: 18px;
    background-image: url(${logoutIcon});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

function MainPage() {
  const dispatch = useDispatch()

  const logoutClickHandler = () => {
    dispatch({type: 'CHANGE_IS_AUTHENTICATED'})
  }

  // useEffect(() => {
  //   dispatch({type: 'CHANGE_SEARCH_DATA', payload: {location: 'Moscow', checkInDate: moment().format('YYYY-MM-DD'), daysInHotelAmount: 1}})
  // }, []);

  useEffect(() => {
    dispatch({type: 'GET_HOTELS'})
  }, [])

  return (
    <>
      <StyledMainContainer>
        <StyledLogo>Simple Hotel Check</StyledLogo>
        <StyledLogoutButton onClick={() =>logoutClickHandler()}>Выйти</StyledLogoutButton>
        <StyledCenterWrapper>
          <StyledFlexContainer>

            {/* Форма поиска отелей */}
            <StyledSection
              width={'360px'}
              marginBottom={'24px'}
            >
              <HotelSearchForm />
            </StyledSection>

            {/* Список Избранных отелей */}
            <StyledSection
              width={'360px'}
            >
              <Favorites />
            </StyledSection>
          </StyledFlexContainer>
          <StyledFlexContainer>

            {/* Форма отображающая найденные отели */}
            <StyledSection
              width={'664px'}
              marginLeft={'24px'}
              paddingTop={'48px'}
            >
              <SearchResults />
            </StyledSection>
          </StyledFlexContainer>
        </StyledCenterWrapper>
        {/* <div onClick={logoutClickHandler}>Выйти</div> */}
      </StyledMainContainer>
    </>
  )
}

export default MainPage