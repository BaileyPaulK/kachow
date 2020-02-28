import React from 'react';
import
{
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';

const Layout = (props) => (
    <View style={ { height: '100%' } }>
        <View style={ styles.bar }>
            <Button onPress={ props.onBackButton } title='<' style={ { width: 600 } }></Button>
            <Text style={ { flex: 0.5 } }>ooooooooooooooooooooooooooooooooooooooooooo</Text>
        </View>
        { props.children }
    </View>
);

const styles = StyleSheet.create({
    bar:
    {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        height: '7%',
        justifyContent: 'space-between',
        backgroundColor: '#0d00ff'
    },
});

export default Layout;;
