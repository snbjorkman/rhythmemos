import { useState } from "react"
import cookie from "cookie"

function Recorder(props){

    const [startTime, setStartTime] = useState(0);
    const [currentLength, updateCurrentLength] = useState();
    const [currentlyRecording, toggleRecording] = useState("");
    const [memoName, setMemoName] = useState("")


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


    async function saveMemo(e){
        e.preventDefault();
        const res = await fetch("/memos/", {
            method: "post",
            credentials: "same-origin",
            body: JSON.stringify({
                memoName,
                currentLength
            }),
            headers: {
                "Content-Type": "application-json",
                "X-CSRFToken": cookie.parse(document.cookie).csrftoken
            }
        })

        }
    


    if(props.display=="Cancel"){
        return(
            <div>
                <form onSubmit={saveMemo}>

                    <p>{currentlyRecording}</p>
                    <button type="button" onClick={startRecording} className="recordingFormButton">Begin Recording</button>
                    <br />
                    <button type="button" onClick={determineCurrentLength} className="recordingFormButton">Stop Recording</button>
                    <br />
                    <br />
                    <label>
                    Name Your Memo <br />
                    <input className="memoNameBox" type="text" name="memo_name" value={memoName} onChange={e => setMemoName(e.target.value)} />
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