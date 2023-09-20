const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 700
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') app.quit()
})

