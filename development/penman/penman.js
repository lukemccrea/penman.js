let penman = {};

penman.create = function(id, options){
    const editorContainer = document.getElementById(id);

    //Throw error if editor container does not exist;
    if (!editorContainer) throw new Error(`Penman: Unable to find editor. Make sure you have an element with it's id set to "editor"`);

    //Set theme to 'light' if theme is not set
    if(options.theme != ('dark' || 'light')) options.theme = 'light';

    //Replace content of editor container with Penman Editor
    editorContainer.innerHTML = `
<div id='penman-container' class='${options.theme}'>
<div id='penman-topbar'>
</div>
<div id='penman-viewer'>
</div>
</div>

<style>
    #penman-topbar {
        width: 100%;
        height: 60px;
        border-bottom: 2px solid grey;
    }
    #penman-viewer {
        width: 100%;
        height: calc(100% - 62px);
    }
    #penman-container {
        width: 100%;
        height: 100%;
    }
    .light {
        background-color: white;
        color: black;
    }
    .dark {
        background-color: #28282b;
        color: grey;
    }
</style>`


    return options;
}
