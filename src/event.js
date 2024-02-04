const { invoke, transformCallback } = window.__TAURI__.core;

async function _unlisten(event, eventId) {
  await invoke("plugin:event|unlisten", {
    event,
    eventId,
  });
}

async function listen(event, handler, options) {
  return invoke("plugin:event|listen", {
    event,
    target: options?.target || { kind: "Any" },
    handler: transformCallback(handler),
  }).then((eventId) => {
    return async () => _unlisten(event, eventId);
  });
}

async function once(event, handler, options) {
  return listen(
    event,
    (eventData) => {
      handler(eventData);
      _unlisten(event, eventData.id).catch(() => {});
    },
    options
  );
}

async function emit(event, payload, options) {
  await invoke("plugin:event|emit", {
    event,
    target: options?.target || { kind: "Any" },
    payload,
  });
}

export { listen, once, emit };
