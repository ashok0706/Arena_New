import Fstyle from '@/app/Styles/footer.module.css';

function page() {
  return (
    <div>
      <section className={Fstyle.section}>
        <div className={Fstyle.footer}>
          <div className={Fstyle.arena}>
            <div>
              <img
                src=" https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/650bd9e21df325d575246318_white-logo.svg"
                className={Fstyle.logo}
              />
            </div>
            <p>
              Arena is a market-leading communication <br /> platform for
              communities to engage and <br />
              connect in a digital world.
            </p>
          </div>
          <div>
            <ul className={Fstyle.footerli}>
              <li>Products</li>
              <li>Commerce</li>
              <li>Live Blog</li>
              <li>Live Chat</li>
              <li>Pricing</li>
              <li>Shopify integration</li>
            </ul>
          </div>
          <div>
            <ul className={Fstyle.footerli}>
              <li>Company</li>
              <li>About us</li>
              <li>Contact Sales</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <ul className={Fstyle.footerli}>
              <li>Support</li>
              <li>Contact us</li>
              <li>Help center</li>
            </ul>
          </div>
          <div>
            <ul className={Fstyle.footerli}>
              <li>Solutions</li>
              <li>Media &amp; Publishing</li>
              <li>Second Screen</li>
              <li>Sports</li>
              <li>Ecommerce &amp; Marketplace</li>
              <li>Hybrid Events</li>
            </ul>
          </div>
        </div>
        <div className={Fstyle.Copyright}>
          Copyright © 2024 Arena | All Rights Reserved | Terms and Conditions |
          Privacy Policy
        </div>
      </section>
    </div>
  );
}

export default page;
