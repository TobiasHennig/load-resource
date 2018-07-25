export function loadScript(url) {
  if (url === undefined) {
    return Promise.reject(Error("Missing \"url\" parameter, invoke \"loadScript\" with an url."));
  }
  if (document.querySelectorAll(`[src="${url}"]`).length > 0) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = url;
    script.type = "text/javascript";
    script.addEventListener("load", () => resolve(script), false);
    script.addEventListener("error", () => reject(Error(`Unable to load script "${url}".`)), false);
    document.body.appendChild(script);
  });
}

export function loadScripts(urls) {
  return Promise.all(urls.map(loadScript));
}

export function loadStylesheet(url) {
  if (url === undefined) {
    return Promise.reject(Error("Missing \"url\" parameter, invoke \"loadStylesheet\" with an url."));
  }
  if (document.querySelectorAll(`[href="${url}"]`).length > 0) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    let stylesheet = document.createElement("link");
    stylesheet.href = url;
    stylesheet.rel = "stylesheet";
    stylesheet.addEventListener("load", () => resolve(stylesheet), false);
    stylesheet.addEventListener("error", () => reject(Error(`Unable to load stylesheet "${url}".`)), false);
    document.body.appendChild(stylesheet);
  });
}

export function loadStylesheets(urls) {
  return Promise.all(urls.map(loadStylesheet));
}
