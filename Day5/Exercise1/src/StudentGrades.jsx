import React, { useState } from 'react';

const StudentGrades = () => {
  const students = [
    { name: 'Chidi Okafor', score: 75, subject: 'Math' },
    { name: 'Amaka Johnson', score: 45, subject: 'Math' },
    { name: 'Tunde Adeyemi', score: 88, subject: 'Math' },
    { name: 'Ngozi Umeh', score: 52, subject: 'Math' },
    { name: 'Femi Adebayo', score: 39, subject: 'Math' },
  ];

  const [filter, setFilter] = useState('All');

  const filteredStudents = students.filter(student => {
    if (filter === 'Passed') return student.score >= 50;
    if (filter === 'Failed') return student.score < 50;
    return true;
  });

  const total = filteredStudents.length;
  const passed = filteredStudents.filter(s => s.score >= 50).length;
  const failed = filteredStudents.filter(s => s.score < 50).length;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h2>📚 Student Grades</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('All')}>All</button>{' '}
        <button onClick={() => setFilter('Passed')}>Passed</button>{' '}
        <button onClick={() => setFilter('Failed')}>Failed</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student.name} - {student.subject}: {student.score}{' '}
            {student.score >= 50 ? (
              <span style={{ color: 'green' }}>✅ PASS</span>
            ) : (
              <span style={{ color: 'red' }}>❌ FAIL</span>
            )}
          </li>
        ))}
      </ul>

      <p>
        Total Students: {total} | Passed: {passed} | Failed: {failed}
      </p>
    </div>
  );
};

export default StudentGrades;