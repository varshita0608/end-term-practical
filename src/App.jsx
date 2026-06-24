import React, { useState } from "react";

function App() {
  const [numSubjects, setNumSubjects] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const generateFields = () => {
    let arr = [];

    for (let i = 0; i < Number(numSubjects); i++) {
      arr.push({
        name: "",
        marks: ""
      });
    }

    setSubjects(arr);
    setShowResult(false);
  };

  const handleNameChange = (index, value) => {
    const updated = [...subjects];
    updated[index].name = value;
    setSubjects(updated);
  };

  const handleMarksChange = (index, value) => {
    const updated = [...subjects];
    updated[index].marks = value;
    setSubjects(updated);
  };

  const getGrade = (marks) => {
    marks = Number(marks);

    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";

    return "F";
  };

  let total = 0;

  for (let i = 0; i < subjects.length; i++) {
    total += Number(subjects[i].marks || 0);
  }

  const average =
    subjects.length > 0
      ? (total / subjects.length).toFixed(2)
      : 0;

  return (
    <div
      style={{
        width: "900px",
        margin: "20px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial",
        border: "2px solid black",
        borderRadius: "10px"
      }}
    >
      <h1>Student Marks & Grade Calculator</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter Number of Subjects"
          value={numSubjects}
          onChange={(e) => setNumSubjects(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={generateFields}
          style={{
            padding: "8px 15px"
          }}
        >
          Generate Form
        </button>
      </div>

      {subjects.length > 0 && (
        <div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Subject Name
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Marks
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px"
                    }}
                  >
                    <input
                      type="text"
                      placeholder={`Subject ${index + 1}`}
                      value={subject.name}
                      onChange={(e) =>
                        handleNameChange(index, e.target.value)
                      }
                    />
                  </td>

                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px"
                    }}
                  >
                    <input
                      type="number"
                      placeholder="Marks"
                      value={subject.marks}
                      onChange={(e) =>
                        handleMarksChange(index, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => setShowResult(true)}
            style={{
              marginTop: "20px",
              padding: "10px 20px"
            }}
          >
            Calculate Result
          </button>
        </div>
      )}

      {showResult && (
        <div style={{ marginTop: "30px" }}>
          <h2>Result</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Subject
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Marks
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Grade
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px"
                    }}
                  >
                    {subject.name}
                  </td>

                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px"
                    }}
                  >
                    {subject.marks}
                  </td>

                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px"
                    }}
                  >
                    {getGrade(subject.marks)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total Marks: {total}</h3>
          <h3>Average Marks: {average}</h3>
          <h3>Number of Subjects: {subjects.length}</h3>
        </div>
      )}
    </div>
  );
}

export default App;