import Section1 from '@/app/Styles/homeStyles/section1.module.css';
import Section3 from '@/app/Styles/homeStyles/section3.module.css';

function section3() {
  return (
    <div className={Section3.section3}>
      <div className={Section3.title}>
        Add Audience Engagement Features To Your <br /> Website, App, Event
        &amp; More
      </div>
      <div className={Section3.grid_container}>
        <div className={Section3.grid_item}>
          <div className={Section3.sub_title}>Arena Live Chat</div>
          <div className={Section3.text}>
            Arena lets you easily create Live Chat experiences
            <br /> that drive engagement and conversions on any
            <br /> platform you manage.
          </div>
          <div className={Section1.seeall}>
            <a>Learn more about Live Chat &gt;</a>
          </div>
        </div>
        <div className="grid-item">
          <video
            id="6a313f74-9cfe-3f9e-0b7d-b23646f5c212-video"
            autoPlay
            loop
            style={{
              backgroundImage:
                'url("https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474d13371ac3e2d252f0c7e_[site]-the-great-upgrade-home-page-live-chat-600x380-v05-poster-00001.jpg")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474d13371ac3e2d252f0c7e_[site]-the-great-upgrade-home-page-live-chat-600x380-v05-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474d13371ac3e2d252f0c7e_[site]-the-great-upgrade-home-page-live-chat-600x380-v05-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="grid-item">
          <video
            id="6a313f74-9cfe-3f9e-0b7d-b23646f5c21d-video"
            autoPlay
            loop
            style={{
              backgroundImage:
                'url("https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6ae96040b5fe424c42e_[site]-the-great-upgrade-home-page-live-blog-600x380-v03-poster-00001.jpg")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6ae96040b5fe424c42e_[site]-the-great-upgrade-home-page-live-blog-600x380-v03-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6ae96040b5fe424c42e_[site]-the-great-upgrade-home-page-live-blog-600x380-v03-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="grid-item">
          <div className={Section3.sub_title}>Arena Live Blog</div>
          <div className={Section3.text}>
            Arena lets anyone create Live Blog experiences <br />
            that increase engagement, conversions and SEO.
          </div>
          <div className={Section1.seeall}>
            <a>Learn more about Live Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default section3;
