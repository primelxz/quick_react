import "./CourseCard.css";
import { Link } from 'react-router-dom';

const CourseCard = ({ id, course, selected, toggleSelected, selectable }) => {
    return (
        <div className={`course-card ${selected.includes(course) ? 'selected' : ''} ${(selected.includes(course) || selectable(course)) ? '' : 'unselectable'}`} onClick={() => {
            if (selected.includes(course) || selectable(course)) toggleSelected(course)
        }
        }>
            <div className="card-body">
                <div className="course-term">
                    {course.term} CS {course.number}
                    <Link className="edit-link" to={`/edit/${id}`} onClick={(e) => e.stopPropagation()}><i className="bi bi-pencil-square"></i></Link>
                </div>
                <div className="course-title">
                    {course.title}
                </div>
                <div className="course-meets">
                    {course.meets}
                </div>
            </div>
        </div>
    )
};

export default CourseCard;
