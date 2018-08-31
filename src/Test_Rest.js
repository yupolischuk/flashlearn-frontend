import React, { Component } from 'react';

const API = '127.0.0.1:5000/test_rest/';

class Test_Rest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
    }



    render() {
        const { hits } = this.state;

        return (

            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default Test_Rest;
