import React from "react";
import CourseCard from "./CourseCard";
import "./CourseList.css";

const CourseList = ({courses}) => {
    return (
        <div className="course-list">
            { Object.entries(courses).map(([id, course]) => (
                <div key={id}>
                    <CourseCard course={course} />
                </div>
            ))}
        </div>
)};

export default CourseList;