import BannerStyle from './banner.module.css';

function page() {
  return (
    <div className={BannerStyle.banner}>
      <div>
        Introducing <strong>Commerce AI</strong> - Convert Every Conversation
        into Transactions
      </div>
      <a className={BannerStyle.button}>Learn More</a>
    </div>
  );
}

export default page;
