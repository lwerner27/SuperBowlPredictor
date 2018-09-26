import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import MatchupContainer from './components/matchup';

class App extends Component {

  state = {
    teams: [
      // NFC East
      {name: "Eagles", path: "/assets/images/eagles.jpg"},
      {name: "Cowboys", path: "/assets/images/cowboys.jpg"},
      {name: "Redskins", path: "/assets/images/redskins.jpg"},
      {name: "Giants", path: "/assets/images/giants.jpg"},
      // NFC North
      {name: "Vikings", path: "/assets/images/vikings.jpg"},
      {name: "Packers", path: "/assets/images/packers.jpg"},
      {name: "Bears", path: "/assets/images/bears.jpg"},
      {name: "Lions", path: "/assets/images/lions.jpg"},
      // NFC South
      {name: "Saints", path: "/assets/images/saints.jpg"},
      {name: "Panthers", path: "/assets/images/panthers.jpg"},
      {name: "Falcons", path: "/assets/images/falcons.jpg"},
      {name: "Bucaneers", path: "/assets/images/bucaneers.jpg"},
      // NFC West
      {name: "Rams", path: "/assets/images/rams.jpg"},
      {name: "Seahawks", path: "/assets/images/seahawks.jpg"},
      {name: "49ers", path: "/assets/images/49ers.jpg"},
      {name: "Cardinals", path: "/assets/images/cardinals.jpg"},
      // AFC East
      {name: "Patriots", path: "/assets/images/patriots.jpg"},
      {name: "Dolphins", path: "/assets/images/dolphins.jpg"},
      {name: "Bills", path: "/assets/images/bills.jpg"},
      {name: "Jets", path: "/assets/images/jets.jpg"},
      // AFC West
      {name: "Chiefs", path: "/assets/images/chiefs.jpg"},
      {name: "Raiders", path: "/assets/images/raiders.jpg"},
      {name: "Chargers", path: "/assets/images/chargers.jpg"},
      {name: "Broncos", path: "/assets/images/broncos.jpg"},
      // AFC North
      {name: "Browns", path: "/assets/images/browns.jpg"},
      {name: "Ravens", path: "/assets/images/ravens.jpg"},
      {name: "Steelers", path: "/assets/images/steelers.jpg"},
      {name: "Bengals", path: "/assets/images/bengals.jpg"},
      // AFC South
      {name: "Colts", path: "/assets/images/colts.jpg"},
      {name: "Titans", path: "/assets/images/titans.jpg"},
      {name: "Jaguars", path: "/assets/images/jaguars.jpg"},
      {name: "Texans", path: "/assets/images/texans.jpg"}
    ],
    userPicks: []
  }

  // Handles the users click on one of the two teams
  // Determines if they user chose team one or team two
  // Add the selection info the userPicks array in state
  handleClick(teamName) {
    let userPicks = this.state.userPicks
    if (teamName === this.state.teamOne.name) {
      userPicks.push({teamOne: this.state.teamOne.name, teamTwo: this.state.teamTwo.name, winner: this.state.teamOne.name})
      this.setState(userPicks, () => {
        this.getRandomTeams(this.state.teams)
      })
    } else {  
      userPicks.push({teamOne: this.state.teamOne.name, teamTwo: this.state.teamTwo.name, winner: this.state.teamTwo.name})
      this.setState(userPicks, () => {
        this.getRandomTeams(this.state.teams)
      })
    }
  }

  // Randomly chooses two teams removes them from the array
  // Then updates the state with the two selected teams and remaining unused teams
  getRandomTeams(teams) {
    let numberOne = Math.floor(Math.random() * teams.length)
    let teamOne = teams[numberOne]
    teams.splice(numberOne, 1)

    let numberTwo = Math.floor(Math.random() * teams.length)
    let teamTwo = teams[numberTwo]
    teams.splice(numberTwo, 1)

    let data = {
      teamOne: teamOne,
      teamTwo: teamTwo,
      teams: teams
    }

    this.setState(data)
  }

  // When the component loads it gets two random teams and updates the state
  componentDidMount() {
    this.getRandomTeams(this.state.teams)

  }

  render() {
    return (
      <div>

        <Navbar />
        <br/>
        <br/>
        <br/>
        { this.state.teamOne && this.state.teamTwo ? <MatchupContainer handleClick={this.handleClick.bind(this)} teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} /> : null }

      </div>
    );
  }
}

export default App;
