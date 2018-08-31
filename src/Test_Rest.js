import React, { Component } from 'react';

const API = 'http://127.0.0.1:5000/test_rest/';

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
            .then(data => this.setState({ test_decks: data }));
    }



    render() {
        const { test_decks } = this.state;
        console.log('***decks***');
        console.log(test_decks);


        return (
            'test_rest'
        );

        // var list_test_decks = test_decks.map((deck) =>
        //     <li>
        //         {deck['name']}
        //     </li>
        // );
        //
        //
        // return (
        //     <div className="list-test-decks">
        //         List test decks
        //         { list_test_decks }
        //     </div>
        // )

        // return (
        //     <ul>
        //         {decks.map(deck =>
        //             <li>
        //                 {deck['name']}
        //             </li>
        //         )}
        //     </ul>
        // )
    }
}

export default Test_Rest;
