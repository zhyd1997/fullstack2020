import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ value, text }) => <span>{text}&nbsp;{value}<br /></span>

const Statistics = ({ good, neutral, bad }) => {
    let all = good + neutral + bad, average, positive

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    } else {
        if (all === 0) {
            average = 0
            positive = 0
        } else {
            average = (good - bad) / all
            positive = good / all * 100 + '%'
        }
        return (
            <div>
                <h1>statistics</h1>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={average} />
                <Statistic text="positive" value={positive} />
            </div>
        )
    }
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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
