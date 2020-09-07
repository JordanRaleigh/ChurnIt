import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Modal} from '../Utility/Modal'

const AllCreditCards = () => {
  const [creditCards, setCreditCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [perks, setPerks] = useState([])
  const [creditCardId, setCreditCardId] = useState('')

  useEffect(() => {
    async function fetchPerks() {
      const creditCardPerks = await axios(`/api/creditcards/${creditCardId}`)
      console.log('CCPerks', creditCardPerks)
      setPerks(creditCardPerks.data)
    }
    fetchPerks()
  }, [])
  //use effect to watch for show model if show modal is true make request backend to bring back perks, set perks in state, bring into mmodal component
  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/creditcards')
      // console.log('result.datra', result.data)
      // console.log('result', result)
      setCreditCards(result.data)
    }
    fetchData()
  }, [])

  //console.log(creditCards)

  return (
    <React.Fragment>
      <ul>
        {creditCards.map(creditCard => (
          <li key={creditCard.id}>
            <button
              type="submit"
              onClick={() =>
                //setCreditCardId(creditCard.id)
                setShowModal(true)
              }
            >
              {creditCard.issuer} {creditCard.card}
            </button>
          </li>
        ))}
      </ul>
      {showModal && <Modal modalIsOpen={showModal} />}
    </React.Fragment>
  )
}

export default AllCreditCards
