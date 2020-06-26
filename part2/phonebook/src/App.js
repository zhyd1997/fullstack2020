import React, {useState} from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{name: 'Arto Hellas'}
	])
	const [newName, setNewName] = useState('')

	const addPerson = (event) => {
		event.preventDefault()
		const personName = {name: newName}
		setPersons(persons.concat(personName))
		setNewName('')
	}

	const handlePersonChange = (event) => {
		setNewName(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input onChange={handlePersonChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(i => <span key={i.name}>{i.name}<br /></span>)}
		</div>
	)
}

export default App;
