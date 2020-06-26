import React from "react";

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

export default Course