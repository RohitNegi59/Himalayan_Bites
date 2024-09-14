import React from 'react'
import { useState } from 'react';

const Review = () => {

  const [count, setCount] = useState(0);

  const incresecount = () => {

    if (count < 5) {
      setCount(count + 1);
    } else {
      setCount(0)
    }

  };


  const decresecount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  const reviews = [
    {
      id: 1,
      name: "Rohit Negi",
      img: "/pn.jpg",
      text: "The Himalayan Bites has genuine products and best Quality",
    }, {

      id: 2,
      name: "Rahul Negi",
      img: "/pn1.jpg",
      text: "Pahad se door Pahad ka Khana Khilane ke liye Dhanyabad Team Himalayan Bites  ",
    }, {

      id: 3,
      name: "Puran Singh Negi",
      img: "/puranBhaiya.png",
      text: "Best Food I ever Had so far in my life  but Namak ni cha Sabji ma ",
    }, {

      id: 4,
      name: "Rakesh Negi",
      img: "/rakeshnegi.png",
      text: " Pahad ke Khane ka Swad pahad ke logo ke hatho se hi ata hai aur Muhje jaan ker acha laga ki Himalayan Bites me cook Hamare Pahadi Bhai hai ",
    }, {

      id: 5,
      name: "Rahul Sharma",
      img: "/pn4.jpg",
      text: " Sabse Sasta Sabse Acha The Himalayan Bites",
    }, {

      id: 6,
      name: "Vikrant Singh",
      img: "/VikrantSingh.png",
      text: "I am from Himachal but I love Uttrakhandi Food Great work from Team Himalayan Bites",
    }
  ];



  return (

    <>

      <div className='review_banner'>

        <div className='review_headding'></div>

        <div className='reviewbox'>

          <div className='back'><img onClick={decresecount} src="arrow-circle-left.svg" alt="My SVG" width="60" height="60" /></div>

          <div className='review_content'>

            <div className='reviewcard'>
              <div className='reviewcircle'> <img className='reviewimg' src={reviews[count].img} alt='Reviewer'></img> </div>
              <div className='reviewername'><h1>{reviews[count].name}</h1></div>
            </div>

            <div className='reviewtext'><p>{reviews[count].text}</p></div>

          </div>
          <div className='forward'><img onClick={incresecount} src="arrow-circle-right-svgrepo-com.svg" alt="My SVG" width="60" height="60" /></div>
        </div>

      </div>


    </>
  )
}

export default Review
