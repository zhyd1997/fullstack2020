import React, {useState} from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{name: 'Arto Hellas', text: '040-1234567'}
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const addPerson = (event) => {
		event.preventDefault()
		const person = {name: newName, text: newNumber}
		setPersons(persons.concat(person))
		console.log(persons)
		alert(`${newName} ${newNumber} are already added to phonebook`)
		setNewName('')
		setNewNumber('')
	}

	const handlePersonChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handlePersonChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(i => <span key={i.name}>{i.name}&nbsp;{i.text}<br /></span>)}
		</div>
	)
}

export default App;
