const Statistics = (props) => {
    return (
      <div>
        <p>
        good {props.good} <br/>neutra {props.neutral}<br/>bad {props.bad}<br/>
      all {props.all}<br/> average {props.average}<br/>positive {props.positive}%
      </p>
      </div>
    )
  }
  export default Statistics