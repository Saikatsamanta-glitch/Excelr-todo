import Card from "./Components/Card";
import { useState, createContext } from "react";
import Navbar from "./Components/Navbar";
import ViewSection from "./Components/ViewSection";
import Tasks from "./taskdata";

export const Data = createContext()

function App() {
        // forEach vs map: Answer
        // Props
        // hooks are to manipulate states
        const [task,setTask] = useState(Tasks)
        // data from internet: useEffect
        
        return (
                <Data.Provider value={{task, setTask}}>
                        <Navbar />
                        <div className="mx-48 mt-10">
                                <h1 className="text-4xl">All task (0 task)</h1>
                                <ViewSection />

                                <div className="card_container mt-14 flex flex-wrap gap-6 justify-center">
                                        {
                                                task.map(v=>{
                                                        if(!v.deleted){
                                                            return <Card key={v.id} data={v} />    
                                                        }else return null;
                                                        
                                                })
                                        }
                                </div>
                        </div>
                        
                </Data.Provider>
        );
}

export default App;


