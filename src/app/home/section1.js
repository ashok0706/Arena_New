import Hstyle from '@/app/Styles/homeStyles/section1.module.css';

export default function home1() {
  return (
    <div className={Hstyle.container}>
      <div className={Hstyle.boost}>
        <div className={Hstyle.title}>
          Boost audience <br />
          brengagement &amp; <br />
          conversions
        </div>
        <div className={Hstyle.text}>
          Arena helps brands create meaningful conversations and <br />{' '}
          transition them into transactions with Commerce AI, Live Blog <br />{' '}
          and Live Chat.
        </div>
        <div className={Hstyle.buttons}>
          <a className={Hstyle.btn1}>Get a Demo</a>
          <a className={Hstyle.btn2}>Get a Free Version</a>
        </div>
        <div className={Hstyle.seeall}>
          <a>See all packeges and pricing</a>
        </div>
      </div>
      <div className={Hstyle.video}>
        <video
          id="2f16b940-065a-d2d4-de7b-66f0d45ba94f-video"
          autoPlay
          loop
          style={{
            backgroundImage:
              'url("https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6c73baea2ab91953a2a_[site]-the-great-upgrade-home-page-hero-video-580x548-v03-poster-00001.jpg")',
          }}
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6c73baea2ab91953a2a_[site]-the-great-upgrade-home-page-hero-video-580x548-v03-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6474a6c73baea2ab91953a2a_[site]-the-great-upgrade-home-page-hero-video-580x548-v03-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
      </div>
    </div>
  );
}
