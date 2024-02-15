import Style from './badge.module.css';

function page() {
  return (
    <div className={Style.badges}>
      <div className={Style.icons}>
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6548ee0e9457c07e47180f00_GA-Badge-CategoryLeaders-2023-FullColor-Positive%2520(1)-p-1080.webp" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/63179f35209d2d93c40193ad_g2%20users%20love%20us.webp" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/63179f35209d2d736a0193af_sourceforge%20customers%20love%20us.webp" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/653a74c3e7bf9cbe248381ee_svgexport-1.svg" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/653a74b9119d0a210c72337d_users%20love%20us%20SD%20light.svg" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/653a7279d290d07884fdda84_CAP-Badge-Shortlist-2023-FullColor-Positive-p-500.webp" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/653a73e31c66a1eaf5e77146_SA-Badge-FrontRunners-2023-FullColor-p-800.webp" />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6548ee0e9457c07e47180f00_GA-Badge-CategoryLeaders-2023-FullColor-Positive%2520(1)-p-1080.webp" />
      </div>
      <div className={Style.audience}>
        <div className={Style.title}>
          Boost Your Audience Engagement Right Now
        </div>
        <div className={Style.buttons}>
          <a className={Style.demo}>Get a Dome</a>
          <a className={Style.version}>Get The Free Version </a>
        </div>
        <a className={Style.link}>See all packages and pricing</a>
      </div>
    </div>
  );
}

export default page;
