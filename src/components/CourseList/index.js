import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title){
    return {type: 'ADD_COURSE', title}
}

export default function CourseList() {
    const index = 2;

    const courses = useSelector(
        state => state.data.slice(0, index),
        [index]
    );
        const dispatch = useDispatch();

    function addCourse() {
        dispatch(addCourseAction('GraphQL'))
    }

    return (
        <>
        <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
        </ul>
        <button type="button" onClick={addCourse}>Aidicionar Curso</button>
        </>
    );
}