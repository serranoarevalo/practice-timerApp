import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (currentProps.isPlaying === false && nextProps.isPlaying === true) {
      // !currentProps.isPlaying && nextProps.isPlaying
      // start the interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      });
    } else if (
      currentProps.isPlaying === true &&
      nextProps.isPlaying === false
    ) {
      // currentProps.isPlaying && !nextProps.isPlaying
      // stop the interval
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    // console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      timerCount,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.maxim}>Target, Full Speed, 2 Months</Text>
          <Text style={styles.sentence}>
            Concentrate while the timer is playing
          </Text>
          <Text style={styles.countMessage}>
            Today's concentration
        </Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countNumber}>{timerCount}</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800080"
  },
  upper: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  maxim: {
    color: "white",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center"
  },
  sentence: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center"
  },
  count: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  countMessage: {
    paddingTop: 18,
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center"
  },
  countNumber: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "200"
  }
});

export default Timer;
