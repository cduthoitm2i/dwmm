import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Identity from "./components/Identity";
import Time from "./components/Time";
import Use from "./components/Use";

export default function App() {
    // On crée une constante avec une string. On l'appele ensuite avec la syntaxe {dwwm}
    // const dwwm = "Hello les DWMM";

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br/>
                {/* Appel de la constante dwwm */}
                {/*dwwm*/}
                {/* Appel de la fonction Hello (la cap est importante afin de différencier avec une balise HTML) */}
                <Hello />

                {/* Appel de la fonction Time */}
                <Time date={new Date()}/>

                {/* Appel des props de Identity.jsx */}
                <Identity name={'Christophe'}
                          bio={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, suscipit pariatur, dolor impedit saepe eum magni quaerat nesciunt ullam ratione modi! Cumque saepe a tempore alias facilis! Id, quam voluptate'}
                          />
                <Use />
            </header>
        </div>
    );
}

// On passe en commentaire car on a corrigé en export default
//export default App;
