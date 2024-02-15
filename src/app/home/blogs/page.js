import Style from './blog.module.css';

function page() {
  return (
    <div className={Style.blogContainer}>
      <div className={Style.title}>Check Out Our Blog</div>
      <div className={Style.blogs}>
        <div className={Style.blog}>
          <div className={Style.blogName}>Announcement</div>
          <img
            className={Style.image}
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/656f7b40f73b7812795e35d1_card_arena_ai.webp"
          />
          <div className={Style.text}>Arena Announces Commerce AI</div>
        </div>
        <div className={Style.blog}>
          <div className={Style.blogName}>Marketing &amp; Growth</div>
          <img
            className={Style.image}
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/656de8e0b443d1750949181b_card-generative-ai-arena.webp"
          />
          <div className={Style.text}>
            5 Use Cases for Generative AI <br />
            in Publishing Right Now
          </div>
        </div>
        <div className={Style.blog}>
          <div className={Style.blogName}>Live Chat</div>
          <img
            className={Style.image}
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6318f3f2f58b773e04768e2a_card%20-%20live%20chat.webp"
          />
          <div className={Style.text}>
            What is Live Chat? Your Complete Guide
          </div>
        </div>
        <div className={Style.blog}>
          <div className={Style.blogName}>Live Blog</div>
          <img
            className={Style.image}
            src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6318f41aa4d7f6f1616bbfcb_card%20-%20live%20blog.webp"
          />
          <div className={Style.text}>What is a Live Blog?</div>
        </div>
      </div>
    </div>
  );
}

export default page;
