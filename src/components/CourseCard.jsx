import "./CourseCard.css";

const CourseCard = ({course, selected, toggleSelected}) => {
    return (
        <div className={`course-card ${selected.includes(course) ? 'selected' : ''}`} onClick={() => toggleSelected(course)}>
            <div className="card-body">
                <div className="course-term">
                    {course.term} CS {course.number}
                </div>
                <div className="course-title">
                    {course.title}             
                </div>
                <div className="course-meets">
                    {course.meets}                
                </div>
            </div>
        </div>
  )};
  
export default CourseCard;
