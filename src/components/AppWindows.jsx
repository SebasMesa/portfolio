import React from "react";
import MacWindow from "../ui/MacWindow";
import Player from "../components/Player";
import Safari from '../components/Safari'
import MusicApp from "./MusicApp";
import VSCode from "./VSCode";
import Photos from "./Photos";

const AppWindows = ({ openApp, setOpenApp }) => {
    return (
        <>

            <MusicApp/>

            {openApp === "visual" && (
                <MacWindow title="Visual Studio Code" x={100} y={100} onClose={() => setOpenApp(null)}>
                    <VSCode />
                </MacWindow>
            )}

            {openApp === "photos" && (
                <MacWindow
                    title="Photos"
                    x={25}
                    y={25}
                    w={window.innerWidth - 50}
                    h={window.innerHeight - 50}
                    onClose={() => setOpenApp(null)}
                >
                    <Photos />
                </MacWindow>
            )}

            {openApp === "spotify" && (
                <MacWindow title="Youtube Music" x={500} y={150} onClose={() => setOpenApp(null)}>
                    <Player />
                </MacWindow>
            )}

            {openApp === "safari" && (
                <MacWindow title="Safari" x={700} y={50} w={1100} h={600} onClose={() => setOpenApp(null)}>
                    <Safari/>
                </MacWindow>
            )}
        </>
    );
};

export default AppWindows;
