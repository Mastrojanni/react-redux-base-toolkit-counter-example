import "./App.css";

// assets
import reduxIcon from './assets/redux-favicon.svg';

// test component
import CardCounter from "./components/CardCounter/CardCounter";

import "./main.scss";


function App() {
    return (
        <div className='App'>

            <header className='layout--center'>
                <img src={reduxIcon} alt='redux icon' />
                <h1>basic redux testing: "counter example"</h1>
            </header>

            <main>
                <section className='layout--center'>
                    <div className='page-layout__content layout--center'>

                        {/* test component */}
                        <CardCounter />

                    </div>
                </section>
            </main>

            <footer></footer>

        </div>
    );
}

export default App;
