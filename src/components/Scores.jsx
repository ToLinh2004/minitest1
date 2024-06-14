function Scores({courseName, courseResults}){
    return (
<div class="scores">
          <h1>{courseName}</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {courseResults.map((course,index)=>(
                <tr key={index}>
                <td>{course.firstName} </td>
                <td>{course.lastName} </td>
                {course.score<50 ? <td style={{color:"red"}}>{course.score}</td> : <td>{course.score}</td> }
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    );
}
export default Scores;