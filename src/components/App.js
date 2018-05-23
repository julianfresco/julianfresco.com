import React, { Component } from 'react'
import ExampleReduxComponent from './ExampleReduxComponent'


class App extends Component {
  render() {
    return (
      <div className="app">

        <header className="header">
          <h1 className="name">
            julian soro 
            <span title="🥚 easter egg!" className="easter-egg"> ♥'s oculus</span>
          </h1>
          <pre className="title">Software Engineer</pre>
        </header>

        <article>
          <p className="intro">
            I'm a software engineer with over 5 years experience building scalable 
            web applications. My active toolset includes Node.js, JavaScript, 
            React.js, Redis, AWS, PostgreSQL, and Java; however, I'm not limited to
            these technologies. I design distributed, load-balanced systems, 
            tailoring the choice of technology and architecture to the unique 
            challenges at hand. 
          </p>
          <p>
            Developing software in 2018 is challenging, especially in the 
            JavaScript community. I try to hedge my bets by both staying current 
            with trends in the greater community, and staying grounded in 
            classical software wisdom from authors like Martin Fowler, Joel 
            Spolsky, and the Gang of Four.
          </p>
          <p>
            When I'm not programming, I like to explore diverse topics--you might 
            find me studying the control problem in Artificial Intelligence, or 
            checking out the latest hardware developments in VR/AR/XR at the VRLA 
            Conference, or training for a marathon, or even traditional wood-working... 
            I'm constantly reading new books and learning new things.
          </p>
          <p>
            In the meantime, enjoy this React Component using Redux example, 
            found in this&nbsp;
            <a href="https://github.com/julianfresco/udacity.react.p2/tree/master/src">
              Reddit Clone project
            </a>&nbsp;
            on &nbsp;<a href="https://github.com/julianfresco/">my github</a>.
          </p>

          <ExampleReduxComponent />
        </article>

      </div>
    )
  }
}

export default App
