import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tim's Todo Application</header>
      <TodoList />
      <footer className="App-footer">
        <div>
          <span> Links:</span>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/tflucker/tim-todo-app">
            Link to project Repository
          </a>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/timothy-flucker-44143b43/">
            LinkedIn Profile
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
