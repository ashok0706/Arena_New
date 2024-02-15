import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import FooterStyle from './footer.module.css';

function page() {
  return (
    <div>
      <section className={FooterStyle.container}>
        <div className={FooterStyle.footer}>
          <div className={FooterStyle.arena}>
            <div>
              <img
                src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/650bd9e21df325d575246318_white-logo.svg"
                className={FooterStyle.logo}
              />
            </div>
            <p>
              Arena is a market-leading communication <br /> platform for
              communities to engage and <br />
              connect in a digital world.
            </p>
            <div className={FooterStyle.icons}>
              <FaFacebookF />
              <FaXTwitter />
              <RiInstagramFill />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
          <div>
            <ul className={FooterStyle.footerList}>
              <li>Products</li>
              <li>Commerce</li>
              <li>Live Blog</li>
              <li>Live Chat</li>
              <li>Pricing</li>
              <li>Shopify integration</li>
            </ul>
          </div>
          <div>
            <ul className={FooterStyle.footerList}>
              <li>Company</li>
              <li>About us</li>
              <li>Contact Sales</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul className={FooterStyle.footerList}>
              <li>Support</li>
              <li>Contact us</li>
              <li>Help center</li>
            </ul>
          </div>
          <div>
            <ul className={FooterStyle.footerList}>
              <li>Solutions</li>
              <li>Media &amp; Publishing</li>
              <li>Second Screen</li>
              <li>Sports</li>
              <li>Ecommerce &amp; Marketplace</li>
              <li>Hybrid Events</li>
            </ul>
          </div>
        </div>
        <div className={FooterStyle.copyRight}>
          Copyright 2024 Arena | All Rights Reserved | Terms and Conditions |
          Privacy Policy
        </div>
      </section>
    </div>
  );
}

export default page;
