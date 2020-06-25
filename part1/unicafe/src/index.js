import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    return (
        <div>
            <h1>statistics</h1>
            <span>good&nbsp;{props.good}</span><br />
            <span>neutral&nbsp;{props.neutral}</span><br />
            <span>bad&nbsp;{props.bad}</span>
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good+1)
    const handleNeutralClick = () => setNeutral(neutral+1)
    const handleBadClick = () => setBad(bad+1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <History good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));