---
layout: default
title: Getting Started
nav_order: 3
---

# Getting Started

First, create a div to place the penman editor in.
`<div id="editor"></div>`

Next, add a script tag for penman
`<script src="penman/penman.js"></script>`

Next, retrive our editor element that we created earlier. Then, initialize the editor passing the editor element and some options.
`let editorContainer = document.getElementById('editor')
let editor = penman.create(editorContainer, {
    theme: 'light'
})`