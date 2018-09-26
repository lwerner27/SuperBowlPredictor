import React from 'react';

class TeamContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.team)
    }
    render() {
        return (
            <div className="col s12 m4 l4 center">
                <img className="img-responsive" src={this.props.team.path} alt=""/>
            </div>
        )
    }
}

export default TeamContainer
