import { useState, useEffect } from 'react'
import kick from "./assets/kick.wav"
import snare from "./assets/snare.wav"
import hat from "./assets/hat.wav"
import kickimg from "./assets/kick.png"
import snareimg from "./assets/snare.png"
import hatimg from "./assets/hihat.png"

function Drum(props){
    
    const key = props.controlKey
    const drumSounds = {"kick": kick, "snare": snare, "hat": hat} 
    const drumImages = {"kick drum": kickimg, "snare drum": snareimg, "hi-hat": hatimg} 
    const sound = new Audio(drumSounds[props.sound]);
    const [drumState, togglePressed] = useState("drum");


    useEffect(() => { 

        function evalKeyDown(event){
            if(event.key==key){
                togglePressed("pressedDrum");
                sound.play();   
            }
        }
        function evalKeyUp(event){
            if(event.key==key){
                togglePressed("drum");
            }
        }

        document.addEventListener("keydown", evalKeyDown);
        document.addEventListener("keyup", evalKeyUp);

        return ()=>{
            document.removeEventListener("keydown", evalKeyDown);
            document.removeEventListener("keyup", evalKeyUp);
        }

    }, [drumState]);


    return(
        <div className={drumState}>{props.soundname} ({key})<br /><img src={drumImages[props.soundname]} alt={props.soundname} /><br /></div>
    )

}


export default Drum;