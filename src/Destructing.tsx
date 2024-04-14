import React from 'react';

export type ManType = {
	name: string
	age: number
	lessons: Array<{ title: string, name?: string }>
	address: {
		street: {
			title: string
		}
	}
}

type PropsType = {
	title: string
	man: ManType
	food: Array<string>
	car: { model: string }
}

function useSerjState(m: string) {
	return [m, function () { }]
}
function useSerjState2(m: string) {
	return {
		message: m,
		setMessage: function () { }
	}
}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {

	return (
		<div>
			<h1>{title}</h1>
			<div>{man.name}</div>
			<div>{props.car.model}</div>
		</div>
	)
}
