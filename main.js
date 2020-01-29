const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 450,
        height: 530,
        resizable: false
    });
    win.loadURL(`file://${__dirname}/index.html`)
    win.removeMenu()
})