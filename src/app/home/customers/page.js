import CustomerStyle from './cutomer.module.css';

function page() {
  return (
    <div className={CustomerStyle.container}>
      <div className={CustomerStyle.text}>
        Trusted By Thousands of Customers in 100+ Countries
      </div>
      <div className={CustomerStyle.logos}>
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e41800792fdc101d9759_logo%20vans.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e41800792f712c1d975c_logo%20vimeo.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e41800792f0f5b1d975a_logo%20fox.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282c1b944c55e2e3a9d7bc8_logo%20figma.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e41800792f2a311d975b_logo%20adobe.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e41800792f7e081d975d_logo%20meta.svg" />
        <img />
        <img src="https://assets-global.website-files.com/627bfc08107c6a6fc647c28b/6282e4482a964437af03fc5c_microsoft-testimonial-logo.svg" />
        <img />
      </div>
    </div>
  );
}

export default page;
