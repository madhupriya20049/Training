import React, { Component } from 'react';

export default class Childc extends Component {
    render() {
        const { name, id, designation } = this.props.obj; // Correctly access props
        return (
            <div>
                <h1>My name is: {name}</h1>
                <h2>My id is: {id}</h2>
                <h3>My designation is: {designation}</h3>
            </div>
        );
    }
}
