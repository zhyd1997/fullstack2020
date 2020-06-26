import React, {useEffect, useState} from 'react';
import Notification from "./components/Notification"
import personService from './services/persons'

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

const Persons = ({ persons, deletePerson }) => {
	return (
		persons.map(person =>
				person.id !== undefined
					?
					<div key={person.id}>
						<span>
							{person.name}&nbsp;{person.number}&nbsp;
						</span>
						<button onClick={() => deletePerson(person.id)}>delete</button>
						<br/>
					</div>
					:
					''

		)
	)
}

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		personService
			.getAll()
			.then(initialPersons => setPersons(initialPersons))
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		const person = {name: newName, number: newNumber}

		personService
			.create(person)
			.then(returnedPerson => {
				setPersons(persons.concat(returnedPerson))
				setNewName('')
				setNewNumber('')
				setErrorMessage(`Added ${person.name}`)
				setTimeout(() => {
					setErrorMessage(null)
				}, 5000)
			})
	}

	const deletePerson = (id) => {
		const person = persons.find(n => n.id === id)
		if (window.confirm(`Delete someone ?`)) {
			personService
				.remove(id, person)
				.then(returnedPerson => {
					setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
				})
				.catch(error => {
					alert(`the person '${person.name}' was already deleted from server`)
					setPersons(persons.filter(n => n.id !== id))
				})
		}
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
			<Notification message={errorMessage} />
			<h3>Add a new</h3>
			<PersonForm
				addPerson={addPerson}
				newName={newName}
				newNumber={newNumber}
				handlePersonChange={handlePersonChange}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				deletePerson={deletePerson}
			/>
		</div>
	)
}

export default App;
