import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class Steps extends Component {
    render() {
        const {numVal, stepsTxtColor} = this.props
        return (
        <Text style={[styles.container, {color: stepsTxtColor,}]}>Steps {numVal}</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        fontSize: 20,
    },
});
