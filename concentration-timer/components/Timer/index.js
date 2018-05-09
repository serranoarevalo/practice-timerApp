import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators as concentrationActions } from '../../reducer';
import Timer from './presenter';


function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(concentrationActions.startTimer, dispatch),
        restartTimer: bindActionCreators(concentrationActions.restartTimer, dispatch),
        addSecond: bindActionCreators(concentrationActions.addSecond, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer);