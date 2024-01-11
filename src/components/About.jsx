import React from 'react'

const About = () => {
  return (
    <div
        name="about" 
        className='w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          explicabo quasi magni ratione corrupti. Consequatur odit dolores nam
          ad reiciendis quam quaerat sunt consequuntur ipsa, aliquam rerum
          soluta velit fugit nostrum veritatis natus dolore odio. Officia
          voluptate porro minus dolore ab aut expedita placeat, eaque corrupti,
          ipsum nobis vel laboriosam.
        </p>
        <br />

        <p className='text-xl'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias odio
        quam, commodi facere sapiente illum praesentium quasi, maxime fugiat
        ducimus corrupti eligendi atque a blanditiis impedit dignissimos ea
        culpa esse omnis rerum? Commodi, vero! Quod reiciendis nemo id quo
        corrupti soluta, eum quia laudantium dolorem, nobis officia molestiae
        vel consectetur.
      </p>


      </div>

    </div>
  );
}

export default About