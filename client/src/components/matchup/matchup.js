import React from 'react'
import TeamContainer from "../team"


class MatchupContainer extends React.Component {

    render() {
        return(
            <div className="container">
                <div className="row">

                    <TeamContainer team={this.props.teamOne}/>

                    <div className="col s12 m4">
                        <h1 className="center">VS</h1>
                    </div>

                    <TeamContainer team={this.props.teamTwo}/>
                    
                </div>
            </div>
        )   
    }
}

export default MatchupContainer