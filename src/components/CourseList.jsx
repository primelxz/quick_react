const CourseList = ({courses}) => (
    <div>
        { Object.entries(courses).map(([id, courses]) => (
            <div key={id}>
                {courses.term} CS {courses.number}: {courses.title}
            </div>
           ))}
    </div>
);

export default CourseList;