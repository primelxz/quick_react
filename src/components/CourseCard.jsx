import "./CourseCard.css";

const CourseCard = ({course}) => {
    return (
        <div className="course-card">
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
