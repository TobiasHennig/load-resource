# load-resource
> Load scripts and stylesheets with JavaScript.

* Modern JavaScript
* Loads both, JavaScript and CSS
* Loads only once
* Demo included

## Install
```
$ npm install load-resource
```

## Usage
Load single file.
```
loadResource("https://code.jquery.com/jquery-3.3.1.min.js")
  .then(() => console.log("Resource loaded"))
  .catch(e => console.error(e));
```

Load multiple files.
```
loadResources([
  "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",
  "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
])
  .then(() => console.log("Resources loaded"))
  .catch(e => console.error(e));
```
