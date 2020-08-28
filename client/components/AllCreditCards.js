import React, {useState, useEffect} from 'react'
import axios from 'axios'

function compare(a, b) {
  if (a.category.toUpperCase() < b.category.toUpperCase()) {
    return -1
  }
  if (a.category.toUpperCase() > b.category.toUpperCase()) {
    return 1
  }
  return 0
}

const AllCreditCards = () => {
  const [data, setData] = useState({hits: []})

  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/creditcards')
      // console.log('result.datra', result.data)
      // console.log('result', result)
      setData(result.data)
    }
    fetchData()
  }, [])

  console.log(data)

  return (
    <ul>
      {data.map(creditCard => (
        <li key={creditCard.id}>
          <a>{creditCard.issuer}</a>
        </li>
      ))}
    </ul>
  )
}

export default AllCreditCards
