import Bstyle from '@/app/Styles/banner.module.css';

function page() {
  return (
    <div className={Bstyle.banner}>
      <div>
        Introducing <strong>Commerce AI</strong> - Convert Every Conversation
        into Transactions
      </div>
      <button className={Bstyle.butt}>Learn More</button>
    </div>
  );
}

export default page;
