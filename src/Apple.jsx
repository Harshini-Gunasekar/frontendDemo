import { Component } from "react";
import './Apple.css'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Task 1</h1>
        <ol>
          <li>Fruits
            <ul>
              <li>Apple</li>
              <li>Mango</li>
            </ul>
          </li>
          <li>Vegetables
            <ol>
              <li>Carrot</li>
              <li>Beans</li>
              <li>Beetroot</li>
            </ol>
          </li>
          <li>Birds
            <ul>
              <li>Peacock</li>
              <li>Parrot</li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
