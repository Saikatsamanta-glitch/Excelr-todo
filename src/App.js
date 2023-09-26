import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import ViewSection from "./Components/ViewSection";
import Tasks from "./taskdata";
function App() {
        // forEach vs map: Answer
        // Props
        return (
                <>
                        <Navbar />
                        <div className="mx-48 mt-10">
                                <h1 className="text-4xl">All task (0 task)</h1>
                                <ViewSection />

                                <div className="card_container mt-14 flex flex-wrap gap-6 justify-center">
                                        {
                                                Tasks.map(v=>{
                                                        if(!v.deleted){
                                                            return <Card key={v.id} data={v} />    
                                                        }
                                                        
                                                })
                                        }
                                </div>
                        </div>
                </>
        );
}

export default App;


