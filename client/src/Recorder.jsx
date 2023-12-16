import { useState } from "react"

function Recorder(props){

    const [startTime, setStartTime] = useState(0);
    const [currentLength, updateCurrentLength] = useState();
    const [currentlyRecording, toggleRecording] = useState("");


    function startRecording(){
        const currentTime = new Date();
        setStartTime(currentTime);
        toggleRecording("Recording in Progress...")
    }

    function determineCurrentLength(){
        const currentTime = new Date();
        const determinedLength = Math.floor((currentTime - startTime)/1000);
        updateCurrentLength(determinedLength);
        toggleRecording("");
    }



    if(props.display=="Cancel"){
        return(
            <div>
                <form action="">

                    <p>{currentlyRecording}</p>
                    <button type="button" onClick={startRecording} className="recordingFormButton">Begin Recording</button>
                    <br />
                    <button type="button" onClick={determineCurrentLength} className="recordingFormButton">Stop Recording</button>
                    <br />
                    <br />
                    <label>
                    Name Your Memo <br />
                    <input className="memoNameBox" type="text" name="memo_name" />
                    </label>
                    <br />
                    <p>Memo Length (in seconds): {currentLength}</p>
                    <br />
                    <button type="submit" className="recordingFormButton">Save Memo</button>
                </form>
                
            </div>
            
        )
    }
    if(props.display=="Create New Memo"){
        return(
            <br />
        )
    }
}


export default Recorder