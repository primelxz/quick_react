import CourseCard from "./CourseCard";
import "./CourseList.css";

const CourseList = ({courses, selected, toggleSelected}) => {
    return (
        <div className="course-list">
            { Object.entries(courses).map(([id, course]) => (
                <CourseCard key={id} course={course} selected={selected} toggleSelected={toggleSelected}/>
            ))}
        </div>
)};

export default CourseList;