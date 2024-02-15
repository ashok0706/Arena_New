import { IoIosArrowDown } from 'react-icons/io';
import Navstyle from './navbar.module.css';
function navbar() {
  return (
    <div className={Navstyle.navbar}>
      <img
        className={Navstyle.logo}
        src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/627bfc2b16af103b1a59c035_logo-a.svg"
      />
      <div>
        <ul className={Navstyle.navbarList}>
          <li>
            <a>
              Products <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a>
              Solutions
              <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a>
              Templates<span className={Navstyle.sticker}>soon</span>
            </a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>
              Resources
              <IoIosArrowDown />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className={Navstyle.contact}>
          <li>
            <a>Contact Sales</a>
          </li>
          <li className={Navstyle.login}>
            <a>Login</a>
          </li>
          <li className={Navstyle.signup}>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
