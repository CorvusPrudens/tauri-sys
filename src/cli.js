const { invoke } = window.__TAURI__.core;

async function getMatches() {
  return await invoke("plugin:cli|cli_matches");
}

export { getMatches };
