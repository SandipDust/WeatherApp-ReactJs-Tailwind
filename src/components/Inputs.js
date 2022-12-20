import {useState, React} from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs(props) {
  const [city, setCity] = useState("");

  const handleSearchClick=() =>{
    const newQuery = {q:city};
    props.setNewQuery(newQuery);
    
  }

  
  return (
    <div className="flex flex-row justify-center my-6">

        <div className="flex flex-row w-3/4 items-center 
        justify-center space-x-4">

            <input type="text" className="text-xl font-light p-2 w-full 
            shadow-xl focus:outline-none capitalize placeholder:lowercase"
            placeholder='search for city...'
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            />
            <UilSearch size={25} className="text-white cursor-pointer 
            transition ease-out hover:scale-125"
              onClick={handleSearchClick}
            />
            {/* <UilLocationPoint  size={25} className="text-white cursor-pointer 
            transition ease-out hover:scale-125"/> */}
        </div>

        {/* <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric"className='text-xl text-white font-light'>
                °C
            
            </button>
            <p className='mx-1'>|</p>
            <button name="imperial" className='text-xl text-white font-light'>
            °F
            </button>

        </div> */}
    </div>
  )
}

export default Inputs