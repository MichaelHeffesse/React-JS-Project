import React, { useEffect } from 'react'



const ItemListContainer = ({greetings,user}) => {
  const [coins, setCoins] = useState([])

  useEffect(() =>{
    fetch('https://api.coinranking.com/v2/coins')
      .then(res => res.json())
      .catch(e => console.log("Error: ", e))
      .then(res => setCoins(res.results))

  }, [])
  return (
      <>
        <h1>{greetings}</h1>
        <p>Hola {user}</p>
      </>

  );
}


export {ItemListContainer};