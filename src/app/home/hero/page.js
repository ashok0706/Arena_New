// import Hstyle from '@/app/Styles/homeStyles/section1.module.css';

import Hero from './hero.module.css';

export default function page() {
  return (
    <div className={Hero.container}>
      <div className={Hero.boost}>
        <div className={Hero.title}>
          Boost audience <br />
          brengagement &amp; <br />
          conversions
        </div>
        <div className={Hero.text}>
          Arena helps brands create meaningful conversations and <br />{' '}
          transition them into transactions with Commerce AI, Live Blog <br />{' '}
          and Live Chat.
        </div>
        <div className={Hero.buttons}>
          <a className={Hero.demo}>Get a Demo</a>
          <a className={Hero.version}>Get a Free Version</a>
        </div>
        <div className={Hero.seeall}>
          <a>See all packeges and pricing</a>
        </div>
      </div>
      <div className={Hero.video}>
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
