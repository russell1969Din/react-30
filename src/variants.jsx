import React from "react";
import ReactDOM from 'react-dom';

class Var01 extends React.Component {
    render() {
        return (
            React.createElement(
                'h1',
                { className: 'var01' },
                'Toto je prvý variant'
            )
        );
    }
}
ReactDOM.render(<Var01 />, document.getElementById('var-01'));

//===================
class Var02 extends React.Component {
    render() {
        return (
            <h2 className="var02">Toto je druhý variant</h2>
        );
    }
}
ReactDOM.render(<Var02 />, document.getElementById('var-02'));

//===================
var inner = <h3 className="var03">Toto je tretí variant</h3>
var component = document.querySelector('#var-03');
ReactDOM.render(inner, component);

//===================
class Var04 extends React.Component {
    render() {
        return <h4 className="var04">Toto je štvrtý variant</h4>
    }
}
var component = document.querySelector('#var-04');
ReactDOM.render(<Var04 />, component);