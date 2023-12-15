import Drum from "./Drum";
import kickimg from "./assets/kick.png"
import snareimg from "./assets/snare.png"
import hatimg from "./assets/hihat.png"

function Homepage(){

    return(
    <div>
        <h1>Rhythmemos Virtual Drumset</h1>
        <div className="drumContainer">
            <Drum controlKey="q" sound="kick" soundname="kick drum" />
            <Drum controlKey="w" sound="snare" soundname="snare drum" />
            <Drum controlKey="e" sound="hat" soundname="hi-hat" />
        </div>
        
    </div>
    )
    

}

export default Homepage;