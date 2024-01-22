import './App.css';

import { puppyList } from './data';
import { useState } from 'react';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find(pup => pup.id === featPupId);

  return (
    <>
      <div className='main'>
        {
          puppies.map(puppy => {
            return <p key={puppy.id} onClick={() => {
              setFeatPupId(puppy.id);
            }}>{puppy.name}</p>;
          })
        }
      </div>
      {
        featPupId && (
          <div className='featured'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default App
