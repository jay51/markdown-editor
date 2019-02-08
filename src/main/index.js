"use strict";

import { app, BrowserWindow, Menu, shell, dialog } from "electron";
import * as path from "path";
import { format as formatUrl } from "url";

const isDevelopment = process.env.NODE_ENV !== "production";

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

function createMainWindow() {
	// set width and height for window
	const window = new BrowserWindow({ width: 999, height: 650 });

	if (isDevelopment) {
		window.webContents.openDevTools();
	}
	// url for static files
	if (isDevelopment) {
		window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
	} else {
		// load the static files(html, css, js)
		window.loadURL(
			formatUrl({
				pathname: path.join(__dirname, "index.html"),
				protocol: "file",
				slashes: true
			})
		);
	}

	window.on("closed", () => {
		mainWindow = null;
	});

	window.webContents.on("devtools-opened", () => {
		window.focus();
		setImmediate(() => {
			window.focus();
		});
	});

	return window;
}

// quit application when all windows are closed
app.on("window-all-closed", () => {
	// on macOS it is common for applications to stay open until the user explicitly quits
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// on macOS it is common to re-create a window even after all windows have been closed
	if (mainWindow === null) {
		mainWindow = createMainWindow();
	}
});

let template = [
	{
		//The top level label/button
		label: "Edit",
		submenu: [
			{
				// options inside the label
				label: "Undo",
				// keyboard shortcut to run the Undo option
				accelerator: "CmdorCtrl+z",
				role: "undo"
			}
		]
	},
	{
		label: "View",
		submenu: [
			{
				label: "demo",
				// click event
				click: function(item, focusWindow) {
					console.log("Show dialog box");
					let options = {
						type: "info",
						title: "App Demo",
						buttons: ["Ok"],
						message: "You clicked The menu and Demo option"
					};
					dialog.showMessageBox(focusWindow, options, function(res, checked) {
						console.log(res);
						console.log(checked);
					});
				}
			}
		]
	}
];

// create main BrowserWindow when electron is ready
app.on("ready", () => {
	mainWindow = createMainWindow();

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
});
