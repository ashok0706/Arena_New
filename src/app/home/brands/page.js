import BrandStyle from './brands.module.css';
function page() {
  return (
    <div className={BrandStyle.container}>
      <div className={BrandStyle.heder}>
        <div className={BrandStyle.title}>
          See How Arena Has Helped Global Brands
        </div>
        <div className={BrandStyle.buttons}>
          <div className={BrandStyle.leftArrow}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644e67703fc5f_arrow.svg" />
          </div>
          <div className={BrandStyle.rightArrow}>
            Next
            <span>
              <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644e67703fc5f_arrow.svg" />
            </span>
          </div>
        </div>
      </div>
      <div className={BrandStyle.slider}>
        <div className={BrandStyle.box}>
          <div className={BrandStyle.icon}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644cc2a03fc5b_quote-icon.svg" />
            <img />
          </div>
          <div className={BrandStyle.logo}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a964437af03fc5c_microsoft-testimonial-logo.svg" />
          </div>
          <div className={BrandStyle.description}>
            “Arena Chat is a powerful platform. We use it
            <br />
            for our global events and our community loves
            <br /> it. Great moderation tools.”
          </div>
          <div className={BrandStyle.text}>
            Lead Cloud Engineer at Microsoft
          </div>
        </div>
        <div className={BrandStyle.box}>
          <div className={BrandStyle.icon}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644cc2a03fc5b_quote-icon.svg" />
            <img />
          </div>
          <div className="logo">
            {' '}
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a964420be03fc5d_logo%20fox.svg" />
          </div>
          <div className={BrandStyle.description}>
            “Arena powers our core digital products via a<br />
            reliable and elegant live chat and live blog <br />
            tool. Our engagement went up by 64%,
            <br /> we won’t go back to Adobe.”
          </div>
          <div className={BrandStyle.text}>Head of Product at Fox</div>
        </div>
        <div className={BrandStyle.box}>
          <div className={BrandStyle.icon}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644cc2a03fc5b_quote-icon.svg" />
            <img />
          </div>
          <div className={BrandStyle.logo}>
            <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a9644126c03fc5e_sony-testimonial-logo.svg" />
          </div>
          <div className={BrandStyle.description}>
            “With Arena Chat API, we were quickly able to <br />
            build a custom chat experience integrated
            <br /> with Spotify. Best product in the market, hands down!
          </div>
          <div className={BrandStyle.text}>Marketing Manager at Sony</div>
        </div>
      </div>
    </div>
  );
}

export default page;
