const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('jomoDesktop', {
  platform: process.platform,
  grantGeolocation: () => ipcRenderer.invoke('jomo:grant-geolocation'),
  revokeGeolocation: () => ipcRenderer.invoke('jomo:revoke-geolocation')
});
