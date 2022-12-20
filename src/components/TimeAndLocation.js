import React from 'react';


function TimeAndLocation({weather: {location}}) {
  
  return (
    <div>
        

        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-3xl font-medium'>
                {location.name}, {location.country}
            </p>
        </div>

        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
               Local Date: {location.localtime} 
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation;