import { ipcRenderer } from "electron";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveFile: (filename: any, content: any) =>
    ipcRenderer.invoke("save-file", filename, content),
});
