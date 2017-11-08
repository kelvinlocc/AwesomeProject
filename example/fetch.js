import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View, ListView} from 'react-native';
import {SectionList} from 'react-native';
import {ActivityIndicator} from 'react-native'

export default class SectionListBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            link: "https://facebook.github.io/react-native/movies.json",

        }

    }

    //function: todo get data from api
    componentDidMount() {
        return fetch(this.state.link)

            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                console.log("fetch: ");

                console.log(responseJson);
                console.log("0 ",responseJson.title);
                console.log("1 ",responseJson.description);
                console.log("2 ",responseJson.movies);

                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                    movies:responseJson.movies,
                    junk:"junk",
                    link:"new link",

                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        if (this.state.isLoading) {
            console.log("state: loading...");
            return (
                <View style={{flex: 1, paddingTop: 40}}>
                    <ActivityIndicator/>
                </View>
            )

        }
        if(false) {
            return(
                <Text style={{paddingTop:50}}>http request completed, {this.state.movies[0].title}</Text>

            )
        }
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );

        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel']},
                    ]}
                    renderItem={
                        ({item}) =>
                            <Text style={styles.item}>item: {item}</Text>
                    }

                    renderSectionHeader={
                        ({section}) =>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                    }

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);