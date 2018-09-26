import React from 'react';

class TeamContainer extends React.Component {


    render() {
        return (
            <div className="col s12 m4 l4 center">
                <img className="img-responsive" alt="team logo" src={this.props.team.path} data={this.props.team.name} onClick={() => {this.props.handleClick(this.props.team.name)}}/>
            </div>
        )
    }
}

export default TeamContainer
