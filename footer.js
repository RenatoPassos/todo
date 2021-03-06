import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Footer extends Component {
    render() {
        const { filter } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.bottomText}>{this.props.count} remaining</Text>
                <View style={styles.filters}>
                    <TouchableOpacity 
                            style={[styles.filter, filter === "ALL" && styles.selected]}
                            onPress={() => this.props.onFilter("ALL")}>
                        <Text style={styles.filterText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={[styles.filter, filter === "ACTIVE" && styles.selected]}
                            onPress={() => this.props.onFilter("ACTIVE")}>
                        <Text style={styles.filterText}>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={[styles.filter, filter === "COMPLETED" && styles.selected]}
                            onPress={() => this.props.onFilter("COMPLETED")}>
                        <Text style={styles.filterText}>Completed</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.props.onClearComplete}>
                    <Text style={styles.bottomText}>Clear Completed</Text>
                </TouchableOpacity>
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
        //borderColor: "black",
        borderColor: "transparent",
        marginLeft: 2,
        marginRight: 2
    },
    filterText: {
        fontSize: 14,
        fontWeight: 'bold'     
    },
    selected: {
        borderColor: "rgba(175, 47, 47, .2)",
        backgroundColor: "rgba(175, 47, 47, .2)"
    }, 
    bottomText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});
export default Footer;