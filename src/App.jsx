import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import EditCourse from './components/EditCourse';
import Chooser from './components/Chooser';
import Modal from './components/Modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { hasConflict } from './utilities/timeConflict';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [choice, setChoice] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  const choices = ['Fall', 'Spring', 'Winter'];
  const filteredCourses = Object.entries(data.courses).filter(course => course[1].term === choices[choice]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const selectable = (course) => {
    return selected.every(selectedCourse => !hasConflict(course, selectedCourse));
  }

  return (
    <div className="body">
      <div className="csCourses">
        <Banner scheduleTitle={data.title} />
        <Chooser choice={choice} setChoice={setChoice} choices={choices} />
        <button className="modal-btn" onClick={toggleModal}>Selected Courses</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList courses={filteredCourses} selected={selected} toggleSelected={toggleSelected} selectable={selectable} />} />
          <Route path="/edit/:courseId" element={<EditCourse courses={data.courses} />} />
        </Routes>
      </BrowserRouter>
      {showModal && <Modal selectedCourses={selected} onClose={toggleModal} />}
    </div>
  )
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <Main />
    </div>
  </QueryClientProvider>
);



export default App;
