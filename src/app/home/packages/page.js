import Style from './package.module.css';

function page() {
  return (
    <div className={Style.container}>
      <div className={Style.title}>Packages</div>
      <div className={Style.title_text}>There's a plan for you</div>
      <div className={Style.cardsBox}>
        <div className={Style.card}>
          <div className={Style.top_line} />
          <div className={Style.card_title}>Free</div>
          <div className={Style.card_text}>
            Best for small businesses or <br />
            individuals that want to improve
            <br />
            audience engagement with Live <br />
            Chat and Live Blog on their <br />
            website or digital event.
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.top_line} />
          <div className={Style.card_title}>Starter</div>
          <div className={Style.card_text}>
            Best for small businesses that
            <br />
            want to bring their social
            <br />
            audience back home, create <br />
            deeper engagement with reactions.
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.top_line} />
          <div className={Style.card_title}>Professional</div>
          <div className={Style.card_text}>
            Best for small businesses that <br />
            want to bring their social
            <br />
            audience back home, create <br />
            deeper engagement with <br />
            reactions, polls, Q&amp;A
            <br />
            and automate posting across <br />
            multiple platforms.
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.top_line} />
          <div className={Style.card_title}>Business</div>
          <div className={Style.card_text}>
            Best for companies who need to
            <br />
            hit conversion goals across
            <br />
            large audiences and that need <br />
            to analyze and integrate <br />
            audience insights with other <br />
            systems.
          </div>
        </div>
        <div className={Style.card}>
          <div className={Style.top_line} />
          <div className={Style.card_title}>Enterprise</div>
          <div className={Style.card_text}>
            Best for companies that need <br />
            customizable branding, flexible <br />
            login options, detailed audience <br />
            data and the scale to handle <br />
            any audience size.
          </div>
        </div>
      </div>
      <div className={Style.link}>See packages and pricing</div>
    </div>
  );
}

export default page;
