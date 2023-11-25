import React, { useEffect } from 'react'
import { useState } from 'react'
import Project from './Project'

const Projects = () => {
  // useEffect(() => {
  //   fetch('https://front-end-developer-server.vercel.app/projects')
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data))
  // }, [])

  const demoData = [
    {
      _id: '63963c82137c1a3763ab94f2',
      picture: 'https://i.ibb.co/0FnpkDG/p-4-short.png',
      fullPicture: 'https://i.ibb.co/XX3TmPr/p-4-long.png',
      name: 'Quiz Hero',
      about:
        'This is a quiz website named Quiz Hero. There are 4 topics in the quiz section, you can chose any section and start testing your skills. Please visit the live site link to view this site.',
      technology: 'React, Node, Express, MongoDB, Firebase',
      functionality: [
        'You can select a category as your wish, quiz question will appear as your selected category.',
        'If you select a Wrong ans , then you will see a toster saying that your answer is incorrect.',
        'If you select right answer, then you will see a toster saying that your answer is right.',
        'In the question page , there is an eye button on every question, if you click on it, you will see the right answer for that question.',
        'You can see Statistics about topic and number of question.',
        'In the blog page you will see some frequently asked question answer.',
        'Every page have its own title (react helmet)',
        'This website is fully responsive in desktop, tablet and mobile devices.',
      ],
      liveLink: 'https://quiz-hero-by-anik.netlify.app/',
      stack: 'MREN Stack',
      clientRepo: 'https://github.com/anikahammedkhan/quiz-hero',
      serverRepo: '',
      status: 'Completed',
      date: '2021-05-01',
    },
    {
      _id: '63963c82137c1a3763ab94ef',
      picture: 'https://i.ibb.co/nB74yzv/p-1-short.png',
      fullPicture: 'https://i.ibb.co/hCB1Q3F/p-1-long.png',
      name: 'Reseliya',
      about:
        'Reseliya is a resale website where users can post there used product and seller can book product from here. Stripe payment gateway added to make payment. There are many special feature added to user / buyer / admin.',
      technology: 'React, Node, Express, MongoDB, Firebase, Stripe',
      functionality: [
        'Reseliya have a wonderful user friendly UI to feel best UI experience to our user.',
        'Our website is mainly selling used mobile phone, there are about 6 brand categories.',
        'Each category have some product, A buyer can choose product from category and click on See details button to see more details about our product. Here a buyer can see Book button.',
        'After clicking book button, a modal will pop up and user can put his meeting location and phone number to place booking.',
        'After placing booking, a booking will be added to user dashboard and a booking will be added to seller dashboard.',
        'A seller can see his all booking from his dashboard and he can accept or reject booking.',
        'After accepting booking, a booking will be added to admin dashboard and a booking will be added to user dashboard.',
        'Any user can register as Seller or Buyer',
        'A seller can add product from his dashboard and he can see his all product from his dashboard.',
        'A seller can delete his product from his dashboard.',
        'A seller can update his product from his dashboard.',
        'React Helmet Used to dynamically change title of the page',
      ],
      liveLink: 'https://reseliya.web.app/',
      stack: 'MREN Stack',
      clientRepo: 'https://github.com/anikahammedkhan/reseliya-client',
      serverRepo: 'https://github.com/anikahammedkhan/reseliya-server',
      status: 'Completed',
      date: '2021-05-01',
    },
    {
      _id: '63963c82137c1a3763ab94f4',
      picture: 'https://i.ibb.co/HHCbNFp/p-6-short.png',
      fullPicture: 'https://i.ibb.co/3BrBGJY/p-6-long.png',
      name: 'Fake Amazon',
      about:
        'This is a fake amazon website. You can add product to cart and checkout. You can also see your order history.',
      technology: 'React, Node, Express, MongoDB, Firebase',
      functionality: [
        'This website has a wonderful home page design with some interactive section with some Lottie Image.',
        'Our website have a responsive navigation menu with our logo. In Tablet and Mobile mode navigation menu will shrink.',
        'In products page, there is aside navigation bar. Products page has 6 professional products listed on both aside nav and products card view.',
        'In product details page you can also Download the details by clicking the top right corner Download Preview button.',
        'If you are a registered user and you are logged in , you can Get Premium Access from clicking button.',
        'If you click on Get Premium Access button , then you will be navigate to Checkout Page.(if you are logged in , otherwise you will be routed to login page)',
        'Every page have its own title (react helmet)',
        'If you are a logged in user, then your profile picture will be shown at navbar and if you click on your profile, you will see your name. There is a toggle button on the navbar to toggle between dark and light mode. In Login page, You will see 3 Login method. Email password, Google Login and Github Login. You can toggle between register and login page.',
        'This website is fully responsive on both desktop,mobile and tablet',
      ],
      liveLink: 'https://fake--auth.web.app/',
      stack: 'MREN Stack',
      clientRepo: 'https://github.com/anikahammedkhan/fake-amazon',
      serverRepo: '',
      status: 'Completed',
      date: '2021-05-01',
    },
    {
      _id: '63963c82137c1a3763ab94f5',
      picture: 'https://i.ibb.co/7jMgKH9/p-8-short.png',
      fullPicture: 'https://i.ibb.co/xSs9Tzd/p-8-long.png',
      name: 'Kabir & Associates',
      about:
        'Kabir & Associates is a law firm website. There are many special feature added to user / admin.',
      technology: 'React, Node, Express, MongoDB, Firebase',
      functionality: [
        'Kabir & Associates has a wonderful home page design with some interactive section with some Lottie Image.',
        'Our website have a responsive navigation menu with our logo. In Tablet and Mobile mode navigation menu will shrink.',
        'In services page, there is aside navigation bar. Services page has 6 professional services listed on both aside nav and services card view.',
        'In service details page you can also Download the details by clicking the top right corner Download Preview button.',
        'If you are a registered user and you are logged in , you can Get Premium Access from clicking button.',
        'If you click on Get Premium Access button , then you will be navigate to Checkout Page.(if you are logged in , otherwise you will be routed to login page)',
        'Every page have its own title (react helmet)',
        'If you are a logged in user, then your profile picture will be shown at navbar and if you click on your profile, you will see your name. There is a toggle button on the navbar to toggle between dark and light mode. In Login page, You will see 3 Login method. Email password, Google Login and Github Login. You can toggle between register and login page.',
        'This website is fully responsive on both desktop,mobile and tablet',
      ],
      liveLink: 'https://anikahammedkhan.github.io/kabirandassociates/',
      stack: 'MREN Stack',
      clientRepo: 'https://github.com/anikahammedkhan/kabirandassociates',
      serverRepo: '',
      status: 'Completed',
      date: '2021-05-01',
    },
    {
      _id: '63963c82137c1a3763ab94f1',
      picture: 'https://i.ibb.co/v3HV0Rf/p-3-short.png',
      fullPicture: 'https://i.ibb.co/sbJVQq2/p-3-long.png',
      name: 'Learn With Anik360',
      about:
        'Learn With Anik360 is a learning website where users can learn about programming and web development. There are many special feature added to user / admin.',
      technology: 'React, Node, Express, MongoDB, Firebase',
      functionality: [
        'Learn with Anik360 has a wonderful home page design with some interactive section with some Lottie Image.',
        'Our website have a responsive navigation menu with our logo. In Tablet and Mobile mode navigation menu will shrink.',
        'In courses page, there is aside navigation bar. Courses page has 9 professional courses listed on both aside nav and courses card view.',
        'In course details page you can also Download the details by clicking the top right corner Download Preview button.',
        'If you are a registered user and you are logged in , you can Get Premium Access from clicking button.',
        'If you click on Get Premium Access button , then you will be navigate to Checkout Page.(if you are logged in , otherwise you will be routed to login page)',
        'Every page have its own title (react helmet)',
        'If you are a logged in user, then your profile picture will be shown at navbar and if you click on your profile, you will see your name. There is a toggle button on the navbar to toggle between dark and light mode. In Login page, You will see 3 Login method. Email password, Google Login and Github Login. You can toggle between register and login page.',
        'This website is fully responsive on both desktop,mobile and tablet',
      ],
      liveLink: 'https://learn-with-anik360.web.app/',
      stack: 'MREN Stack',
      clientRepo:
        'https://github.com/anikahammedkhan/learn-with-anik360-client',
      serverRepo:
        'https://github.com/anikahammedkhan/learn-with-anik360-server',
      status: 'Completed',
      date: '2021-05-01',
    },
    {
      _id: '63963c82137c1a3763ab94f3',
      picture: 'https://i.ibb.co/xYd0JPd/p-5-short.png',
      fullPicture: 'https://i.ibb.co/fCd66GY/p-5-long.png',
      name: 'Fit for Life',
      about:
        'Fit for Life is a fitness website where users can get fitness related services. There are many special feature added to user / admin.',
      technology: 'React, Node, Express, MongoDB, Firebase',
      functionality: [
        'Fit for Life has a wonderful home page design with some interactive section with some Lottie Image.',
        'Our website have a responsive navigation menu with our logo. In Tablet and Mobile mode navigation menu will shrink.',
        'In services page, there is aside navigation bar. Services page has 6 professional services listed on both aside nav and services card view.',
        'In service details page you can also Download the details by clicking the top right corner Download Preview button.',
        'If you are a registered user and you are logged in , you can Get Premium Access from clicking button.',
        'If you click on Get Premium Access button , then you will be navigate to Checkout Page.(if you are logged in , otherwise you will be routed to login page)',
        'Every page have its own title (react helmet)',
        'If you are a logged in user, then your profile picture will be shown at navbar and if you click on your profile, you will see your name. There is a toggle button on the navbar to toggle between dark and light mode. In Login page, You will see 3 Login method. Email password, Google Login and Github Login. You can toggle between register and login page.',
        'This website is fully responsive on both desktop,mobile and tablet',
      ],
      liveLink: 'https://fit-for-life-by-anik.netlify.app/',
      stack: 'MREN Stack',
      clientRepo: 'https://github.com/anikahammedkhan/fit-for-life',
      serverRepo: '',
      status: 'Completed',
      date: '2021-05-01',
    },
    // {
    //   _id: '63963c82137c1a3763ab94f0',
    //   picture: 'https://i.ibb.co/QPNshnc/p-2-short.png',
    //   fullPicture: 'https://i.ibb.co/RzFQSHM/p-2-long.png',
    //   name: 'Printigo',
    //   about:
    //     'Printigo is an online based Individual Printing Service Provider Website. Printigo have 6 Professional services that can help you to channel creativity, colors, copy and print facility to help my customer with better branding',
    //   technology: 'React, Node, Express, MongoDB, Firebase',
    //   functionality: [
    //     'Printigo have a wonderful user friendly UI to feel best UI experience to our user.',
    //     'Printigo has a wonderful home page design with some interactive section with some Lottie Image.',
    //     'User can easily register from register page , we use firebase authentication to this login and sign up functionality',
    //     'Logged in user will get access to few more private route like My reviews and Add Services',
    //     'User can see detailed view of services on clicking See Details button on each of the card',
    //     'In any user click on any service card image or details page image , the image will pop up in full size (react photo view)',
    //     'Every page have its own title (react helmet)',
    //     'This website is fully responsive on both desktop,mobile and tablet',
    //   ],
    //   liveLink: 'https://printigo-ea932.web.app',
    //   stack: 'MREN Stack',
    //   clientRepo: 'https://github.com/anikahammedkhan/printigo-client',
    //   serverRepo: 'https://github.com/anikahammedkhan/printigo-server',
    //   status: 'Completed',
    //   date: '2021-05-01',
    // },
  ]

  const [projects, setProjects] = useState(demoData)
  return (
    <div className='px-10 mb-20'>
      <div className='flex justify-between items-center'>
        <div className='lg:text-[36px] text-[30px] font-bold'>Projects</div>
        <div className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-2 lg:py-3 px-4 lg:px-8 rounded-full mr-2'>
          View All
        </div>
      </div>
      <p className='text-[20px] font-medium'>Things I&apos;have built so far</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center items-center'>
        {projects?.map((project) => (
          <Project project={project} key={project._id}></Project>
        ))}
      </div>
    </div>
  )
}

export default Projects
