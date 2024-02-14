import Nstyle from '@/app/Styles/navbar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
function navbar() {
  return (
    <div className={Nstyle.navbar}>
      <img
        className={Nstyle.logo}
        src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/627bfc2b16af103b1a59c035_logo-a.svg"
      />
      <div>
        <ul className={Nstyle.navbarli}>
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
              Templates<span className={Nstyle.soon}>soon</span>
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
        <ul className={Nstyle.contact}>
          <li>
            <a>Contact Sales</a>
          </li>
          <li className={Nstyle.login}>
            <a>Login</a>
          </li>
          <li className={Nstyle.Signup}>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default navbar;
