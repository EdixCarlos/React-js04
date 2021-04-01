import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <h2>give feedbacks <br/> </h2>
      <button onClick={votoGood}>Good</button>
      <button onClick={votoNeutral}>Neutral</button>
      <button onClick={votoBad}>Bad</button>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)