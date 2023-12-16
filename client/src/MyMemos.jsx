import { useState, useEffect } from "react";

function MyMemos(){

    const [memos, setMemos] = useState([]);

    async function getMemos(){
        const res = await fetch("/memos/", {
            credentials: "same-origin",
        })
        const body = await res.json();
        setMemos(body.memos);
    }

    useEffect(() => {
        getMemos();
    })


    return(
    <div>
        <h1>My Memos</h1>

        <div>
            {memos.map(memo => (
                <div key={memo.id}>
                    <h2>{memo.name}</h2>
                    <p>length: {memo.length} seconds</p>


                </div>
            ))}

        </div>
        
    </div>
    )
    

}

export default MyMemos;