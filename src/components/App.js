import React, {useEffect, useState} from 'react'

function App() {
    const [isTrue, setIsTrue] = useState(false)
    const [dog, setDog] = useState('')

    useEffect(() => {
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dogs => {
            setIsTrue(true)
            setDog(dogs.message)

        })
    }, [])

  return (
    <div>
    {isTrue ? <img src={dog} alt='A Random Dog'></img> : <p>Loading...</p>}
    </div>
  )
}



export default App