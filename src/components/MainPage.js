import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'

function MainPage() {
  const dispatch = useDispatch()

  const logoutClickHandler = () => {
    dispatch({type: 'CHANGE_IS_AUTHENTICATED'})
  }

  return (
    <>
      <div className=""> Main
        <div>
          <section></section>
          <section></section>
        </div>
        <div>
          <section></section>
        </div>
      </div>
      <div onClick={logoutClickHandler}>Выйти</div>
    </>
  )
}

export default MainPage