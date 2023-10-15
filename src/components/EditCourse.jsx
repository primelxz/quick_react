import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./EditCourse.css";
import { useFormData } from '../utilities/useFormData.js';

const validateUserData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
        case 'meets':
            return /^(MWF|TuTh) (\d{1,2}:\d{2}-\d{1,2}:\d{2})$|^$/.test(val)
            ? '' : 'Please follow the format like MWF 9:00-9:50 or TuTh 14:00-15:20';;
      default: return '';
    }
};

const EditCourse = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses[courseId];
    const navigate = useNavigate();

    const [state, change] = useFormData(validateUserData, {
        title: course.title,
        meets: course.meets
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="edit-field">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="course-title">Course Title</label>
                    <input type="text" id="title" value={state.values.title} onChange={change} />
                    {state.errors && state.errors.title &&
                    <div className="error-message">{state.errors.title}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="course-meets">Course Meets</label>
                    <input type="text" id="meets" value={state.values.meets} onChange={change} />
                    {state.errors && state.errors.meets &&
                    <div className="error-message">{state.errors.meets}</div>}
                </div>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
};

export default EditCourse;