import React from 'react';

function HomeButton(props) {
  return (
    <button className='home' onClick={() => props.onClick('home')}></button>
  )
}

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: this.props.chapter
    }
  }

  render() {
    return (
      <div>
        <div className='top_buttons'>
          <HomeButton />
          {/* <Archive />
          <Settings />
          <Achivements />
          <Storage /> */}
        </div>
      </div>
    )
  }
}


class StartingPage extends React.Component {

  start() {
    return (<Frame chapter='one' />)
  } 

  render() {
    return (
      <div>
      <img src={process.env.PUBLIC_URL+'starting-page.jpeg'} className='background' alt=''/>
        <div className='title'>
          <h1>Firefly</h1>
        </div>
        <div className='middle_buttons'>
          <button className='middle' onClick={() => this.start()}>New Game</button>
          <button className='middle'>Continue</button>
        </div>  
      </div>
    )
  }
}

class ArchivePage extends React.Component {
  render(){
    return (<div><h1>archive</h1></div>)
  }
}


// class Home extends React.Component {
//   handleClick() {
//     return (<StartingPage />)
//   }

//   render() {
//     return (
//       <button className='home' onClick={() => this.handleClick()}></button>
//     )
//   }
// }

// class Archive extends React.Component {


//   render(){
//     return (<ArchivePage />)
//   }
// }

class Game extends React.Component {
  render() {
    return (
      <StartingPage />
    )
  }
}

export default Game
