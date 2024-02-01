const invoke = window.__TAURI__.core.invoke;

async function exit(code = 0) {
  return invoke("plugin:process|exit", { code });
}

async function relaunch() {
  return invoke("plugin:process|restart");
}

export { exit, relaunch };
