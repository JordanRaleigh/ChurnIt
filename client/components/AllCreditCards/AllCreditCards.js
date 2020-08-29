import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AllCreditCards = () => {
  const [creditCards, setCreditCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/creditcards')
      // console.log('result.datra', result.data)
      // console.log('result', result)
      setCreditCards(result.data)
    }
    fetchData()
  }, [])

  console.log(creditCards)

  return (
    <ul>
      {creditCards.map(creditCard => (
        <li key={creditCard.id}>
          <a>
            {creditCard.issuer} {creditCard.card}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default AllCreditCards
