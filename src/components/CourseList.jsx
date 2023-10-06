import { useState } from "react";
import CourseCard from "./CourseCard";
import "./CourseList.css";

const CourseList = ({courses}) => {
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
      );

    return (
        <div className="course-list">
            { Object.entries(courses).map(([id, course]) => (
                <CourseCard key={id} course={course} selected={selected} toggleSelected={toggleSelected}/>
            ))}
        </div>
)};

export default CourseList;