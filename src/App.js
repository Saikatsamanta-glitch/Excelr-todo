import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import ViewSection from "./Components/ViewSection";

function App() {
        return (
                <>
                        <Navbar />
                        <div className="mx-48 mt-10">
                                <h1 className="text-4xl">All task (0 task)</h1>
                                <ViewSection />

                                <div className="card_container mt-14 flex flex-wrap gap-6 justify-center">
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />

                                </div>
                        </div>
                </>
        );
}

export default App;
