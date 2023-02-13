import logo from './logo.svg';
import './App.css';
import {getQuote} from 'inspirational-quotes/lib/index';

function refresh() {
  window.location.reload(false);
}
const quote = getQuote();

function App() {
  return (
    <div className="App">
      <header>
        <h1>Muziekschool H&J</h1>
        <p>Luisterend oor voor talent!</p>
      </header>
      <nav>
        <ul className="navbar">
            <li><a href="https://githubsucksa.github.io/kutopdracht/">Home</a></li>
            <li><a href="https://githubsucksa.github.io/kutopdracht/overons.html">Over ons</a></li>
            <li><a href="https://githubsucksa.github.io/kutopdracht/tarieven.html">Tarieven</a></li>
            <li><a href="https://githubsucksa.github.io/kutopdracht/contact.html">Contact</a></li>
            <li><a href="https://ianpjotr30.pythonanywhere.com">Agenda</a></li>
            <li><a href="https://githubsucksa.github.io/kutopdracht/blogpage.html">Blog</a></li>
            <li><a href="https://githubsucksa.github.io/kutopdracht/beheer.html">Beheer</a></li>
            <li><a href="https://githubsucksa.github.io/mijnapp/">Motivatie</a></li>
        </ul>
    </nav>
    <div class="reactcontain">
      <h1>Quote of the day</h1>
      <div>
        <button onClick={refresh}>Click here for a new Quote!</button>
      </div>
      <div className="quotes">
        <h2>{quote.text}</h2>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd98VqxPJHvmDcah0rwoDjBAxAQyKY62pZPuYX08Ee5v1O_yBrUn_BXS1XP47Q57La41Q&usqp=CAU"/>
    </div>
    <footer>
        <p><strong>&#169; Copyright 2021 Muziekschool H&J</strong></p>
        <p><strong>(Dit is een oefenopdracht, alle informatie op deze website is fictief.)</strong></p>
    </footer>
    </div>
  );
}

export default App;
