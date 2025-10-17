import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    return (
        <div className="page">
            <header>
                <div className="container">
                    <Header />
                </div>
            </header>

            <main>
                <div className="container">
                    <Content />
                </div>
            </main>

            <footer>
                <div className="container">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}

export default App;
