/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Axios from 'axios';

function App() {
  const [dog, setDog] = useState({
    name: '',
    imgs: [],
  })
  const [dogBreed, setDogBreed] = useState('')

  function searchDogBreed() {
    const options = {
      method: 'GET',
      url: `https://dog.ceo/api/breed/${dogBreed}/images/random/3`,
    }

    Axios.request(options).then(function (response) {
      console.log(response)
      setDog({ name: dogBreed, imgs: response.data.message })
    }).catch(function (error) {
      console.error(error)
      alert("Oops. We couldn't find that one. Please try again.")
    })
  }

  const handleChange = e => {
    setDogBreed(e.target.value)
  }

  return (
    <div className="flex flex-col w-3/4 m-auto mt-10 p-3 items-center text-center">
      <div>
        <p className="text-5xl font-bold">What<span className="text-blue-500">Dog</span></p>
        <p className="text-s mt-2">Fur all things dog-related!</p>
        <div className="mt-12 items-center">
          <input
            className="bg-gray-100 p-2"
            value={dogBreed}
            placeholder="enter dog breed..."
            name='text'
            onChange={handleChange}
          />
          <button className='bg-blue-500 p-2 m-1 text-white hover:bg-blue-700' onClick={searchDogBreed}>search</button>
          <p className="mt-3 text-xs">Search through our dog breed database and get cute pictures!</p>
        </div>
      </div>

      {dog.imgs.length === 0 ? <p></p> :
        <div className="m-10 bg-gray-50 p-5 rounded w-full shadow-md">
          <p className="text-center text-l mb-5">Here are some photos of a {dog.name}!</p>
          <div className="grid grid-cols-3 gap-3">
            {dog.imgs.map((item) => (
              <img className="object-cover h-96 w-96 mb-2" src={item}></img>
            ))}
          </div>

        </div>}

    </div>
  )
}

export default App;