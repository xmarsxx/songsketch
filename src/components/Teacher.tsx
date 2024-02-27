// TeacherPortal.js
import React, { useState } from 'react';
import './TeacherPortal.css';

// Sample data for demonstration
const initialClasses = [
  { id: 1, name: 'Class A', students: [{ id: 1, name: 'Student 1', progress: 80 }, { id: 2, name: 'Student 2', progress: 90 }] },
  { id: 2, name: 'Class B', students: [{ id: 3, name: 'Student 3', progress: 75 }, { id: 4, name: 'Student 4', progress: 85 }] }
];

const TeacherPortal = () => {
  const [classes, setClasses] = useState(initialClasses);
  const [currentClassIndex, setCurrentClassIndex] = useState(0);

  const handleClassChange = (index: React.SetStateAction<number>) => {
    setCurrentClassIndex(index);
  };

  const handleAddStudent = () => {
    const className = classes[currentClassIndex].name;
    const newStudent = { id: Date.now(), name: `New Student ${Date.now()}`, progress: 0 };
    const updatedClasses = [...classes];
    updatedClasses[currentClassIndex].students.push(newStudent);
    setClasses(updatedClasses);
  };

  const handleDeleteStudent = (studentId: number) => {
    const updatedClasses = [...classes];
    updatedClasses[currentClassIndex].students = updatedClasses[currentClassIndex].students.filter(student => student.id !== studentId);
    setClasses(updatedClasses);
  };

  const handleAddClass = () => {
    const newClass = { id: Date.now(), name: `Class ${classes.length + 1}`, students: [] };
    setClasses([...classes, newClass]);
  };

  const handleDeleteClass = (classId: number) => {
    setClasses(classes.filter(cls => cls.id !== classId));
    setCurrentClassIndex(0); // Resetting current class index after deletion
  };

  return (
    <div className="teacher-portal">
      <h1 className="heading">Teacher Portal</h1>
      <div className="classes-section">
        <h2 className="sub-heading">Classes</h2>
        <ul className="class-list">
          {classes.map((cls, index) => (
            <li key={cls.id} className={`class-item ${index === currentClassIndex ? 'active' : ''}`} onClick={() => handleClassChange(index)}>
              {cls.name}
            </li>
          ))}
        </ul>
        <button className="btn add-btn" onClick={handleAddClass}>Add Class</button>
        <button className="btn delete-btn" onClick={() => handleDeleteClass(classes[currentClassIndex].id)}>Delete Class</button>
      </div>
      <div className="students-section">
        <h2 className="sub-heading">Students in {classes[currentClassIndex].name}</h2>
        <ul className="student-list">
          {classes[currentClassIndex].students.map(student => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <span className="student-name">{student.name}</span>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${student.progress}%` }}></div>
                </div>
                <span className="progress-text">{student.progress}%</span>
              </div>
              <button className="btn delete-btn" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button className="btn add-btn" onClick={handleAddStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default TeacherPortal;
