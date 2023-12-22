import React from "react";

export default function ScoreBoard(props){


    return(
        <div>
            <div>
                <p>Player {props.playerName}: {props.points}</p>
            </div>
        </div>
    );
}