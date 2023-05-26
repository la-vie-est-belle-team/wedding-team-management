import { Link } from 'react-router';

function Header() {
  return (
    <>
      <header>
        <h1>
          <img src="./img/logo.png" alt=""/>
        </h1>
        <div className='login_util'>
          <ul>
            <li className="schedule">
              <img src="./img/ic_calender.svg" alt="" />
            </li>
            <li className="myPage">
              <img src="./img/ic_myPage.svg" alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;