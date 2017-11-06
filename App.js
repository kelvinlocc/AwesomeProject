import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Text> text...</Text>
                <Text> update 1523</Text>

                <Image source={pic} style={{width: 200, height: 100}}/>
                <Greeting name='kelvin'/>
                <Text> update 1738</Text>

                <Greeting name='ben'/>
                <Blink text='I love to blink'/>
            </View>



        );
    }
}


class Greeting extends React.Component {
    render() {
        return (
            <Text>say hi to : {this.props.name}!</Text>

        );
    }
}

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 5000);

    }

    render() {
        // console.warn("123");
        let display = this.state.showText ? this.props.text : 'props.text ';
        if (this.state.showText){
            console.log("this.state.showText is true");
            console.log("display: "+display);
            // console.error("error");
        }
        return (
            <Text>{display}</Text>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
