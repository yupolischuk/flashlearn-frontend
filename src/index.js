import React from 'react';
import ReactDOM from 'react-dom';
import TestRequest from './TestRequest'
// import Test_Rest from './Test_Rest'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <button className="home-btn">Home</button>
                <br/><br/>
                <button className="add-deck-btn">Add new deck</button>
                <button className="add-flashcard-btn">Add new flashcard</button>
                <hr />
            </div>
        );
    }
}

class Decks extends React.Component {

    render() {
        const decks = getDecks();

        var listDecks = decks.map((deck) =>
            <li>{deck['name']} |
                <button>Watch</button>
                <button>Learn</button>
                <button>Add Card</button>
                <button>Update</button>
                <button>Delete</button>
                <hr/>
            </li>
        );

        return (
            <div className="decks-list">
                Decks
                {listDecks}
            </div>
        );
    }
}




class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Decks />
                <TestRequest />
                <Test_Rest />
            </div>
        );
    }
}


// ===================================================

ReactDOM.render(<App />, document.getElementById("root"));


function getDecks() {
    return JSON.parse('[\n' +
        '  {\n' +
        '    "created": "Tue, 21 Aug 2018 15:49:40 GMT", \n' +
        '    "id": 1, \n' +
        '    "name": "Python", \n' +
        '    "parent": null, \n' +
        '    "updated": null\n' +
        '  }, \n' +
        '  {\n' +
        '    "created": "Tue, 21 Aug 2018 15:49:46 GMT", \n' +
        '    "id": 2, \n' +
        '    "name": "Linux", \n' +
        '    "parent": null, \n' +
        '    "updated": null\n' +
        '  }, \n' +
        '  {\n' +
        '    "created": "Tue, 21 Aug 2018 15:49:53 GMT", \n' +
        '    "id": 3, \n' +
        '    "name": "Data Structures", \n' +
        '    "parent": null, \n' +
        '    "updated": "Tue, 21 Aug 2018 15:50:03 GMT"\n' +
        '  }\n' +
        ']');
}



