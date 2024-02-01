const invoke = window.__TAURI__.core.invoke;

async function moveWindow(to) {
  await invoke("plugin:positioner|move_window", {
    position: parseInt(to),
  });
}

export { moveWindow };
