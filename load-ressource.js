export function loadResource(url) {
  if (url === undefined) {
    return Promise.reject(Error("Missing \"url\" parameter, try something like `loadResource(\"https://code.jquery.com/jquery-3.3.1.min.js\")`."));
  }
  const filetype = /(css|js)$/.exec(url);
  if (filetype === null) {
    return Promise.reject(Error("Unknown file type, try to load \".css\" or \".js\" files."));
  }
  const configuration = {
    css: {element: "link", properties: {href: url, rel: "stylesheet"}},
    js: {element: "script", properties: {async: true, src: url, type: "text/javascript"}}
  };
  const c = configuration[filetype[0]];
  return new Promise((resolve, reject) => {
    const element = document.createElement(c.element);
    for (const property of Object.keys(c.properties)) {
      element[property] = c.properties[property];
    }
    element.addEventListener("load", () => resolve(element), false);
    element.addEventListener("error", () => reject(Error(`Unable to load element, check "${url}" for errors.`)), false);
    document.body.appendChild(element);
  });
}

export function loadResources(urls) {
  if (urls === undefined) {
    return Promise.reject(Error("Missing \"urls\" parameter, try something like `loadResources([\"https://code.jquery.com/jquery-3.3.1.min.js\"])`."));
  }
  return Promise.all(urls.map(loadResource));
}
