import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
	return (
		<h1>{course.name}</h1>
	)
}

const Total = ({ course }) => {
	const tempArray = []
	course.parts.forEach(i => tempArray.push(i.exercises))
	const sum = tempArray.reduce((accumulator, currentValue) => accumulator + currentValue)
	return (
		<b>total of {sum} exercises</b>
	)
}

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	)
}

const Content = ({ course }) => course.parts.map(item => <Part key={item.id} part={item} />)

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

const App = () => {
	const course = [
		{
			name: 'Half Stack application development',
			id: 1,
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 4
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	]

	return (
		<div>
			{course.map(item => <Course key={item.id} course={item} />)}
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))