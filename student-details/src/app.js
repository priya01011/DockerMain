import "./App.css";

const shareMessage = "I just ran my container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>TKIET</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Student Details
        </p>
        <div>
          <table>
            <tr>
                <th>Name</th>
                <th>Department</th>
            </tr>
            <tr>
                <td>Priyanka</td>
                <td>CSE</td>
            </tr>
            <tr>
                <td>Kadam</td>
                <td>Electrical</td>
            </tr>
          </table>
        </div>
      </header>
    </div>
  );
};

export default App;
