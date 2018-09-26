import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
    textAlign: "center"
}

class Navbar extends React.Component {
    render() {
        return (
            <AppBar title="Super Bowl Predictor" style={styles} showMenuIconButton={false} />
        )
    }
}

export default Navbar;