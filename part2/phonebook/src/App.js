import React, {useEffect, useState} from 'react';

import axios from 'axios'

const PersonForm = ({ addPerson, newName, newNumber, handlePersonChange, handleNumberChange }) =>
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

const Persons = ({ persons }) => {
	return (
		persons.map(person => <span key={person.id}>{person.name}&nbsp;{person.number}<br /></span>)
	)
}

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(response => setPersons(response.data))
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		const person = {name: newName, number: newNumber}
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
			<h3>Add a new</h3>
			<PersonForm
				addPerson={addPerson}
				newName={newName}
				newNumber={newNumber}
				handlePersonChange={handlePersonChange}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} />
		</div>
	)
}

export default App;
