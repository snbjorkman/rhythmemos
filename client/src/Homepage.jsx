import Drum from "./Drum";
import kickimg from "./assets/kick.png"
import snareimg from "./assets/snare.png"
import hatimg from "./assets/hihat.png"
import { useState } from "react";
import Recorder from "./Recorder";

function Homepage(){

    const [displayRecorder, setRecorderVisibility] = useState("Create New Memo");

    function toggleRecorderDisplay(){
        if(displayRecorder=="Create New Memo"){
            setRecorderVisibility("Cancel");
        }
        if(displayRecorder=="Cancel"){
            setRecorderVisibility("Create New Memo");
        }
    }

    return(
    <div>
        <h1>Rhythmemos Virtual Drumset</h1>
        <div className="drumContainer">
            <Drum controlKey="q" sound="kick" soundname="kick drum" />
            <Drum controlKey="w" sound="snare" soundname="snare drum" />
            <Drum controlKey="e" sound="hat" soundname="hi-hat" />
        </div>
        <button onClick={toggleRecorderDisplay} className="newMemoButton">{displayRecorder}</button>

        <Recorder display={displayRecorder} />
        
    </div>
    )
    

}

export default Homepage;