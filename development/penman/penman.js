let penman = {
    editors: {}
};

penman.create = function (id, options) {
    const editorContainer = document.getElementById(id);

    //Throw error if editor container does not exist;
    if (!editorContainer) throw new Error(`Penman: Unable to find editor. Make sure you have an element with it's id set to "editor"`);

    //Set theme to 'light' if theme is not set
    if (options.theme != ('dark' || 'light')) options.theme = 'light';

    //Replace content of editor container with Penman Editor
    let editorContent = editorContainer.innerHTML;
    editorContainer.innerHTML = `
<div class='${options.theme} penman penman-container'>
    <div class="penman penman-topbar">
        <div class="penman penman-menu">
        </div>
        <div class="penman-toolbar">
            <div class="penman-menuSection">
                <button><img src="penman/icons/undo.png" alt="undo" onclick="penman.editors.${id}.execCommand('undo')" title="Undo"></button>
                <button><img src="penman/icons/redo.png" alt="redo" onclick="penman.editors.${id}.execCommand('redo')" title="Redo"></button>
            </div>
            <div class="penman-menuSection">
                <button><img src="penman/icons/bold.png" alt="bold" onclick="penman.editors.${id}.execCommand('bold')" title="Bold"></button>
                <button><img src="penman/icons/italics.png" alt="italics" onclick="penman.editors.${id}.execCommand('italic')" title="Italic"></button>
                <button><img src="penman/icons/underline.png" alt="underline" onclick="penman.editors.${id}.execCommand('underline')" title="Underline"></button>
                <button><img src="penman/icons/strikethrough.png" alt="strikethrough" onclick="penman.editors.${id}.execCommand('strikethrough')" title="Strikethrough"></button>
                <button><img src="penman/icons/removeFormat.png" alt="remove format" onclick="penman.editors.${id}.execCommand('removeFormat')" title='Remove Formatting'></button>
            </div>
            <div class="penman-menuSection">
                <div class="dropdown">
                    <button onclick="this.parentElement.children[1].classList.toggle('show');" class="dropbtn" style='width: auto; font-family: Times New Roman;'>Times New Roman</button>
                    <div class="dropdown-content">
                        <button onclick="penman.editors.${id}.execCommand('fontName', false, 'Arial', this)" style="font-family: arial">Arial</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Times New Roman', this)" style="font-family: Times New Roman">Times New Roman</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Georgia', this)" style="font-family: Georgia">Georgia</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Helvetica', this)" style="font-family: Helvetica">Helvetica</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Courier', this)" style="font-family: Courier">Courier</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Courier New', this)" style="font-family: Courier New">Courier New</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Monaco', this)" style="font-family: Monaco">Monaco</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Copperplate', this)" style="font-family: Copperplate">Copperplate</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Brush Script MT', this)" style="font-family: Brush Script MT">Brush Script MT</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Comic Sans MS', this)" style="font-family: Comic Sans MS">Comic Sans MS</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Apple Chancery', this)" style="font-family: Apple Chancery">Apple Chancery</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Impact', this)" style="font-family: Impact">Impact</button>
			<button onclick="penman.editors.${id}.execCommand('fontName', false, 'Chalkduster', this)" style="font-family: Chalkduster">Chalkduster</button>
                    </div>
                    </div>
                </div>
            <div class="penman-menuSection">
                <button><img src="penman/icons/alignLeft.png" alt="Align Left" onclick="penman.editors.${id}.execCommand('JustifyLeft')" title="Align Left"></button>
                <button><img src="penman/icons/alignCenter.png" alt="Align Center" onclick="penman.editors.${id}.execCommand('JustifyCenter')" title="Align Center"></button>
                <button><img src="penman/icons/alignRight.png" alt="Align Right" onclick="penman.editors.${id}.execCommand('JustifyRight')" title="Align Right"></button>
                <button><img src="penman/icons/justifyFull.png" alt="Justify Full" onclick="penman.editors.${id}.execCommand('JustifyFull')" title="Justify Full"></button>
            </div>
        </div>
    </div>
    <div class="penman penman-viewer">
        <div id="${id}-1"class="penman-page">
            <div class="penman-content" contenteditable>${editorContent}</div>
        </div>
    </div>
</div>
<link rel="stylesheet" href="penman/style.css">`;

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    options.execCommand = function(a, b, c, ele) {
        document.execCommand(a, b, c);
        if(a === 'fontName') {
	    let fontDisplay = ele.parentElement.parentElement.firstElementChild
	    fontDisplay.innerHTML = c;
	    fontDisplay.style.fontFamily = c;
	    
	}
	document.getElementById(id+'-1').firstElementChild.focus();
    }

    penman.editors[id] = options;
    options.id = id;
    return options;
}
