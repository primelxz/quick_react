import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./EditCourse.css";

const EditCourse = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses[courseId];
    const navigate = useNavigate();

    const [title, setTitle] = useState(course.title);
    const [meets, setMeets] = useState(course.meets);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleMeetsChange = (e) => {
        setMeets(e.target.value);
    };

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
                    <input type="text" id="course-title" value={title} onChange={handleTitleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="course-meets">Course Meets</label>
                    <input type="text" id="course-meets" value={meets} onChange={handleMeetsChange} />
                </div>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
)};

export default EditCourse;