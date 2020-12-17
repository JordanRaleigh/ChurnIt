import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
//import {Modal} from '../Utility/Modal'

Modal.setAppElement('#app')

const AllCreditCards = () => {
  const [creditCards, setCreditCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [perks, setPerks] = useState([])
  const [creditCardId, setCreditCardId] = useState(0)

  // useEffect(() => {
  //   async function fetchPerks() {
  //     const creditCardPerks = await axios(`/api/creditcards/${creditCardId}`)
  //     console.log('CCPerks', creditCardPerks)
  //     setPerks(creditCardPerks.data)
  //   }
  //   fetchPerks()
  // }, [])
  //use effect to watch for show model if show modal is true make request backend to bring back perks, set perks in state, bring into mmodal component
  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/creditcards')
      // console.log('result.datra', result.data)
      // console.log('result', result)
      setCreditCards(result.data)
    }
    fetchData()
    console.log(creditCards)
  }, [])

  //console.log(creditCards)

  return (
    <React.Fragment>
      <ul>
        {creditCards.map((creditCard, idx) => (
          <li key={creditCard.id}>
            <button
              type="submit"
              onClick={() => {
                setCreditCardId(idx)
                setShowModal(true)
              }}
            >
              {creditCard.issuer} {creditCard.card}
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => setShowModal(false)}>close</button>
        <div>I am a modal</div>
        <div>
          {creditCards[creditCardId] ? (
            <p>
              {' '}
              {creditCards[creditCardId].issuer}
              {creditCards[creditCardId].card}
              {console.log(creditCards[creditCardId])}
            </p>
          ) : (
            ''
          )}
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default AllCreditCards
