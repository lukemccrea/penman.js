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
        <div id='penman-menu'>
        </div>
    </div>
    <div id='penman-viewer'>

    </div>
</div>
<link rel="stylesheet" href="penman/style.css">`


    return options;
}
