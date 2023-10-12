import CourseCard from "./CourseCard";
import "./CourseList.css";

const CourseList = ({courses, selected, toggleSelected, selectable}) => {
    
    return (
        <div className="course-list">
            {/* {console.log(courses)} */}
            { courses.map(([id, course]) => (
                <CourseCard key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} selectable={selectable} />
            ))}
        </div>
)};

export default CourseList;