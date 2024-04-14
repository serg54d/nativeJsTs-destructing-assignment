import React from 'react';
import { ManType } from './Destructing';



let props: ManType;
beforeEach(() => {
	props = {
		name: 'Serj',
		age: 21,
		lessons: [{ title: '1' }, { title: '2' }, { title: '3', name: 'React' }],
		address: {
			street: {
				title: 'Street1'
			}
		}
	}
})
test('destructing object done', () => {

	const { age, lessons } = props;
	const { title } = props.address.street;

	expect(age).toBe(21)
	expect(lessons.length).toBe(3)
	expect(title).toBe('Street1')
})

test('destructing array done', () => {

	const l1 = props.lessons[0]
	const l2 = props.lessons[1]
	const [, ls2, ...restLessons] = props.lessons

	expect(ls2.title).toBe('2')
	expect(restLessons.length).toBe(1)
	expect(restLessons[0].title).toBe('3')
	expect(restLessons[0]).toStrictEqual({ title: '3', name: 'React' })


})

