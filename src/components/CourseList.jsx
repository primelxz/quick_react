import CourseCard from "./CourseCard";
import "./CourseList.css";

const CourseList = ({courses, selected, toggleSelected, selectable}) => {
    
    return (
        <div className="course-list">
            { Object.entries(courses).map(([id, course]) => (
                <CourseCard key={id} course={course} selected={selected} toggleSelected={toggleSelected} selectable={selectable} />
            ))}
        </div>
)};

export default CourseList;