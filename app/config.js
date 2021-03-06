System.config({
    baseURL: ".",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "app/*": "src/*.js",
        "stamgegevens/*": "src/stamgegevens/*.js",
        "npm:*": "jspm_packages/npm/*",
        "github:*": "jspm_packages/github/*"
    },

    map: {
        "angular": "github:angular/bower-angular@1.5.0",
        "angular-animate": "github:angular/bower-angular-animate@1.5.0",
        "angular-aria": "github:angular/bower-angular-aria@1.5.0",
        "angular-material": "github:angular/bower-material@1.0.5",
        "css": "github:systemjs/plugin-css@0.1.20",
        "tsc": "npm:tsc@1.20150623.0",
        "typescript": "npm:typescript@1.7.5",
        "github:angular/bower-angular-animate@1.5.0": {
            "angular": "github:angular/bower-angular@1.5.0"
        },
        "github:angular/bower-angular-aria@1.5.0": {
            "angular": "github:angular/bower-angular@1.5.0"
        },
        "github:angular/bower-material@1.0.5": {
            "angular": "github:angular/bower-angular@1.5.0",
            "angular-animate": "github:angular/bower-angular-animate@1.5.0",
            "angular-aria": "github:angular/bower-angular-aria@1.5.0",
            "css": "github:systemjs/plugin-css@0.1.20"
        },
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:tsc@1.20150623.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "os": "github:jspm/nodelibs-os@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "readline": "github:jspm/nodelibs-readline@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});
