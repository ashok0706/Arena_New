import Badges from './home/badges/page';
import Blogs from './home/blogs/page';
import Brands from './home/brands/page';
import Customers from './home/customers/page';
import Goals from './home/goals/page';
import Hero from './home/hero/page';
import LiveChat from './home/livechat/page';
import Package from './home/packages/page';
export default function Home() {
  return (
    <div>
      <Hero />
      <Customers />
      <LiveChat />
      <Goals />
      <Brands />
      <Package />
      <Blogs />
      <Badges />
    </div>
  );
}
