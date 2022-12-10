import React from 'react';

const project = ({project}) => {
     const {name,img}=project
    
    return (
        

        <div className="card   image-full "style={{ backgroundImage: `url(${img})` }}>
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     
        

      



    );
};

export default project;