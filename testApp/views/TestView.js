import React from 'react';
import
{
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

const TestView = (props) => (
    <View style={ { backgroundColor: "#76f4ac", height: '100%' } }>
        <View style={ styles.bar }>
            <Text style={ { backgroundColor: "#ff0031" } }>1</Text>
            <Text style={ { backgroundColor: "#ff0031" } }>2</Text>
            <Text style={ { backgroundColor: "#ff0031" } }>3</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    bar:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: '10%',
        justifyContent: 'space-between',
        backgroundColor: "#0d00ff"
    },
});

export default TestView;;