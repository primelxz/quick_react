import { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ selectedCourses, onClose }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <div className="modal-hdr">
                    <h2>Selected Courses</h2>
                </div>
                <ul className="selected-courses">
                    {
                        selectedCourses.length === 0
                            ? <h5> Please close this window and select some courses</h5>
                            : selectedCourses.map(course => (
                                <li key={course.id}>
                                    {course.term} CS {course.number} - {course.title}
                                    <br />
                                    {course.meets}
                                </li>
                            ))}
                </ul>
                <button className="modal-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;