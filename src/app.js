const { invoke } = window.__TAURI__.core;

async function getVersion() {
  return invoke("plugin:app|version");
}

async function getName() {
  return invoke("plugin:app|name");
}

async function getTauriVersion() {
  return invoke("plugin:app|tauri_version");
}

async function show() {
  return invoke("plugin:app|show");
}

async function hide() {
  return invoke("plugin:app|hide");
}

export { getName, getVersion, getTauriVersion, show, hide };
