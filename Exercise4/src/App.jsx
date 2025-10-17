// Import all four components into `App.jsx` and arrange them vertically.
import Header from './Header';
import Location from './Location';
import Skills from './Skills';
import Footer from './Footer';
import './App.css'

function App() {
    return (
        <div className="theme-root container">
            <Header />
            <Location />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
// App.jsx – main application file that imports and uses all components