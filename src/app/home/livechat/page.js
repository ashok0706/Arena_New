import Hero from '@/app/home/hero/hero.module.css';
// import Section3 from '@/app/Styles/homeStyles/section3.module.css';
import LiveChat from './liveChat.module.css';
// import Hero from
function page() {
  return (
    <div className={LiveChat.container}>
      <div className={LiveChat.title}>
        Add Audience Engagement Features To Your <br /> Website, App, Event
        &amp; More
      </div>
      <div className={LiveChat.grid_container}>
        <div className={LiveChat.grid_item}>
          <div className={LiveChat.sub_title}>Arena Live Chat</div>
          <div className={LiveChat.text}>
            Arena lets you easily create Live Chat experiences
            <br /> that drive engagement and conversions on any
            <br /> platform you manage.
          </div>
          <div className={Hero.seeall}>
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
          <div className={LiveChat.sub_title}>Arena Live Blog</div>
          <div className={LiveChat.text}>
            Arena lets anyone create Live Blog experiences <br />
            that increase engagement, conversions and SEO.
          </div>
          <div className={Hero.seeall}>
            <a>Learn more about Live Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
