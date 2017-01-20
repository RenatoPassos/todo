import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filters}>
                    <TouchableOpacity 
                            style={styles.filter}
                            onPress={() => this.props.onFilter("ALL")}>
                        <Text style={styles.filterText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.filter}
                            onPress={() => this.props.onFilter("ACTIVE")}>
                        <Text style={styles.filterText}>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.filter}
                            onPress={() => this.props.onFilter("COMPLETED")}>
                        <Text style={styles.filterText}>Completed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    filters: {
        flexDirection: "row"
    },
    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 2,
        marginRight: 2
    },
    filterText: {
        fontSize: 22        
    }
});
export default Footer;