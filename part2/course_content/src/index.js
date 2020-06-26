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
	return(
		<b>total of {sum} exercises</b>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	)
}

const Content = ({ course }) => {
	return (
		<div>
			<Part part={course.parts[0]} />
			<Part part={course.parts[1]} />
			<Part part={course.parts[2]} />
			<Part part={course.parts[3]} />
		</div>
	)
}

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
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			},
			{
				name: 'Redux',
				exercises: 11
			}
		]
	}

	return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))