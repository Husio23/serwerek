import * as alt from 'alt-client';
import * as natives from 'natives';

let cursorState;
const TAB_KEY = 9;
const webview = new alt.WebView('http://resource/client/cef/index.html', true);

webview.on('cef:genderChange', (gender) => {
    alt.emitServer('client:genderChange', gender)
})


webview.on('cef:clothChange', (state) => {
    alt.emitServer('client:clothChange', state)
})

webview.on('cef:tattooChange', (state) => {
    natives.clearPedDecorations(alt.Player.local);

    state.forEach(tattoo => {
        natives.addPedDecorationFromHashes(alt.Player.local, alt.hash(tattoo.collection), alt.hash(tattoo.hash))
    })
})

const onConsoleCommand = async (command, ...args) => {
    switch (command) {
        case 'animplay': {
            await alt.Utils.requestAnimDict(args[0]);
            natives.taskPlayAnim(alt.Player.local.scriptID, args[0], args[1], 8, -8.0, -1, 1, -1, false, false, false);
            break;
        }

        case 'animstop': {
            natives.clearPedTasks(alt.Player.local);
            break;
        }
    }
}

alt.on('consoleCommand', onConsoleCommand);

alt.everyTick(() => {
    natives.invalidateIdleCam();
    natives.hudSuppressWeaponWheelResultsThisFrame()
    natives.disableControlAction(0, 37, true)
    natives.disableControlAction(0, 199, true)
})

const cameraSwitch = (key) => {
    if (key !== TAB_KEY) return;

    alt.toggleGameControls(cursorState);
    alt.showCursor(!cursorState);

    cursorState = !cursorState;

    if (!cursorState) {
        webview.unfocus()
    } else {
        webview.focus()
    }

}

alt.on('keyup', cameraSwitch)