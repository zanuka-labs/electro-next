const electron = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const devPath = 'http://localhost:8000/start'
const prodPath = path.resolve('renderer/out/start/index.html')
const entry = isDev ?  devPath : 'file://' + prodPath

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(entry)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', async () => {
  await prepareNext('./renderer')
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
