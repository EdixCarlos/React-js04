import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positive, setPositive] = useState(0.0)
  const votoGood = () => {
    setGood(good+1)
    averageS()
    positiveS()
    allS()
  }
  const votoNeutral = () => {
    setNeutral(neutral+1)
    averageS()
    positiveS()
    allS()
  }
  const votoBad = () => {
    setBad(bad+1)
    averageS()
    positiveS()
    allS()
  }
  const averageS = () => {
    setAverage((good + neutral - neutral - bad)/(good + neutral + bad))
  }
  const positiveS = () => {
    setPositive((good/(good + neutral + bad))*100)
  }
  const allS = () => {
    setAll(good + neutral + bad)
  }

  return (
    <div className="App">
      <h2>give feedbacks <br/> </h2>
      <button onClick={votoGood}>Good</button>
      <button onClick={votoNeutral}>Neutral</button>
      <button onClick={votoBad}>Bad</button>
      {statistic ?<Statistics average={average} all={all} positive={positive}  good={good} neutral={neutral} bad={bad}  /> : <h2>No hay nada para mostrar</h2>}

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)