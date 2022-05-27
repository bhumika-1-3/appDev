import { TextInput, SafeAreaView, StyleSheet, Text , Button } from 'react-native'
import React from 'react'


const Explore = () => {
    return (
        <SafeAreaView>
            <Text>INPUT YOUR NUMBER :</Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <Button
                title="HOME"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 20,
        borderWidth: 1,
        padding: 10,
    },
});

export default Explore
