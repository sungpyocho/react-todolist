import React, { Component } from "react";
import Todo from "./Todo";
import Clock from "./Clock";
import "./App.css";


// css의 background-image 속성
const bgGradient = `linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.7) 70%,
        rgba(20, 20,20, 1)
     ),`;
const bgUrl = "https://source.unsplash.com/random/1920x1080";

class App extends Component {
  constructor(props) {
    super(props);

    // background-image 속성 초기화
    this.state = {
      bgImage: bgGradient + `url(${bgUrl})`
    }

    this.setNewBackground = this.setNewBackground.bind(this);
  }

  setNewBackground = event => {
    if (event.key === "Enter") {
      this.setState({
        bgImage: bgGradient + `url(${bgUrl}?${event.target.value})`
      })
      
    event.target.value = "";
    event.preventDefault();
    }
  }

  render() {
    let newQueryUrl = {
      backgroundImage: this.state.bgImage
    }

    return (
      <div style={newQueryUrl} className="App-background">
        <Clock />
        <input 
          placeholder="Search themes" 
          onKeyPress={this.setNewBackground} 
          className="Theme-input"
        ></input>
        <Todo />
      </div>
    );
  }
}

// Styled Component를 이용하는 경우, 위 render() 함수를 return <Container />로 변경해주면 된다.
// const Container = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0%;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//       to bottom,
//       rgba(20, 20, 20, 0.1) 10%,
//       rgba(20, 20, 20, 0.7) 70%,
//       rgba(20, 20,20, 1)
//    ),
//     url(https://source.unsplash.com/random/1920x1080);
//   background-size: cover;
// `;

export default App;
