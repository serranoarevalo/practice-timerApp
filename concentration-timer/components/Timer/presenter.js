import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

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
        console.log(this.props);
        const {
            isPlaying,
            elapsedTime,
            timeDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName="play-circle" onPress={startTimer} />
                    )}
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
        justifyContent: "center",
        alignItems: "center"
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