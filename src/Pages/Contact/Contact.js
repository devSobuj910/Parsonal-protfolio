import React from 'react';
import Navbar from '../../Shared/Navbar';

const Contact = () => {
    return (
        
      <div>
        <Navbar></Navbar>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-3/6 lg:py-0">
     
          
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Contact me
              </h1>
              <form className="space-y-4 md:space-y-6" action="https://getform.io/f/4dfa7d79-e1e2-4979-8c7d-3bd99f61a920" method='POST'>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="text" name="name" id="neme" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="youre name" required />
                  </div>
                
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                  </div>


                  <div>
                      <label htmlFor="textra" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Massege</label>
                      <textarea type="textra" name="textra" id="textra" className="bg-gray-50 h-32 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-4 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Massege" required />
                  </div>

                   
                  
                  <button type="submit" className=" w-36 text-white bg-slate-900 text-white rounded-lg p-3 block m-auto">Send</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
      </div>
    );
};

export default Contact;