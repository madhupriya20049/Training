import React, { Component } from 'react';
import Childc from './Childc';

export default class Parentc extends Component {
    obj1 = {
        name: "Madhu",
        id: 101,
        designation: "Developer"
    };

    render() {
        return (
            <div>
                <Childc obj={this.obj1} />
            </div>
        );
    }
}
