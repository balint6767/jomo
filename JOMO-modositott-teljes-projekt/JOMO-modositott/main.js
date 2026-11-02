const { app, BrowserWindow, shell, ipcMain, session } = require('electron');
const path = require('path');

const geoConsent = new Set();

function allowGeolocationForSender(event) {
  geoConsent.add(event.sender.id);
  return true;
}

ipcMain.handle('jomo:grant-geolocation', allowGeolocationForSender);
ipcMain.handle('jomo:revoke-geolocation', (event) => {
  geoConsent.delete(event.sender.id);
  return true;
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 980,
    minHeight: 700,
    backgroundColor: '#f7faf7',
    title: 'JOMO',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // A JOMO saját engedélykérő képernyője után engedjük csak a helyzet API-t.
  win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
    if (permission !== 'geolocation') return false;
    return geoConsent.has(webContents.id);
  });

  win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission !== 'geolocation') return callback(false);
    callback(geoConsent.has(webContents.id));
  });

  win.on('closed', () => geoConsent.delete(win.webContents.id));
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
