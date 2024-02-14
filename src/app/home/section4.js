import Section4 from '@/app/Styles/homeStyles/section4.module.css';

function section4() {
  return (
    <div className={Section4.section4}>
      <div className={Section4.title}>
        Hit Your Conversion Goals With Arena's 'No <br />
        Code' Solutions Powered By First Party Data
      </div>
      <div className={Section4.grid_container}>
        <div className={Section4.grid_item}>
          <img
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/63179f078a6d965ddcc5788a_kpi-p-500.webp"
            alt
          />
        </div>
        <div>
          <div className={Section4.sub_title}>
            Smash your engagement &amp; conversion KPIs
          </div>
          <div className={Section4.text}>
            Youve got numbers to hit, and Arena can help. On <br />
            average, Arena customers convert 42% of
            <br />
            anonymous visitors to known users, and see a 64% <br />
            increase in engagement, 28% increase in <br />
            conversions and 40% decrease in paid spend to
            <br />
            reach the same KPIs.
          </div>
        </div>
        <div>
          <div className={Section4.sub_title}>
            Make first-party data feel <br />
            like a party
          </div>
          <div className={Section4.text}>
            Gather first-party data with experiences your <br />
            audience will actually want to engage with. Arena <br />
            Personas captures actions, interests and intent to <br />
            build rich customer profiles that power detailed
            <br />
            segmentation.
          </div>
        </div>
        <div className={Section4.grid_item}>
          <img
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/63179f078a6d961e75c57883_Make%2520first%2520party%2520data%2520feel%2520like%2520a%2520party-p-500.webp"
            alt
          />
        </div>
        <div className={Section4.grid_item}>
          <img
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/63179f078a6d9660bec57887_setup%2520and%2520deply%2520in%2520minuts-p-500.webp"
            alt
          />
        </div>
        <div>
          <div className={Section4.sub_title}>Setup and deploy in minutes</div>
          <div className={Section4.text}>
            If you can copy &amp; paste, you can set up Arena. Our <br />
            No Code solution means anyone can add Live Chat and Live <br />
            Blog to their website, app, or event
            <br />
            in minutes - no IT team required.
          </div>
        </div>
      </div>
    </div>
  );
}

export default section4;
