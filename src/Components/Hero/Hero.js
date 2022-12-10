import React from 'react';
import pdf from "../.././asets/pdf/Mahmudul-resume.pdf"
import profile from "../.././asets/baner/profile-pic.png"

const Hero = () => {
    return (
        <div className="hero min-h-screen  bg-slate-900  text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className='flex justify-center'>
          <img  className=' round rounded-full w-3/6 h-3/4' src={profile}/>
         
          </div>
          <div>
            <h3 className='text-2xl'>Hello ,Iam</h3>
            <h1 className="text-5xl font-bold">Mahmudl hasan</h1>
            <h2 className='text-3xl'>full stack   developer</h2>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br></br> In deleniti eaque aut repudiandae et a id nisi.</p>
              <div className='flex   lg:flex-row  flex-col'>
             <a href={pdf} download="mahmudul.pdf">
             <button className="btn  mr-4">Get resume</button>
             </a>
            <button className="btn ">contact</button>
              </div>
            
          </div>
        </div>
      </div>
    );
};

export default Hero;

