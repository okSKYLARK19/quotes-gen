import React from 'react';

import './App.css';

class App extends React.Component {
    state = { advice: ''};

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice',{
            cache: 'no-cache'
        })
        .then(res => res.json())

        .then((response) => {
                const { advice} = response.slip;

                this.setState({ advice});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>ADVICE</span>
                    </button>
                </div>
            </div> 
        );
    }
}

export default App;