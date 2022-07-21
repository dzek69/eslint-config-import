// eslint-disable-next-line import/no-unused-modules
"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const staticAnalysis = {
    "import/no-unresolved": OFF,
    "import/named": ERROR,
    "import/default": ERROR,
    "import/namespace": ERROR,
    "import/no-restricted-paths": OFF,
    "import/no-absolute-path": ERROR,
    "import/no-dynamic-require": OFF,
    "import/no-internal-modules": OFF,
    "import/no-webpack-loader-syntax": OFF,
    "import/no-self-import": ERROR,
    "import/no-cycle": [ERROR, {
        // maxDepth: 0 - don't use until linting goes slow
        ignoreExternal: true,
        // allowUnsafeDynamicCyclicDependency: false, eslint complains on this, but it's disabled by default
    }],
    "import/no-useless-path-segments": [ERROR, {
        noUselessIndex: false,
        commonjs: false, // false by default, check if true will leave support for import syntax @TODO
    }],
    "import/no-relative-parent-imports": OFF,
    "import/no-relative-packages": OFF,
};

const warnings = {
    "import/export": ERROR,
    "import/no-named-as-default": WARN,
    "import/no-named-as-default-member": OFF, // annoying for getenv for example
    "import/no-deprecated": WARN,
    "import/no-extraneous-dependencies": [ERROR, {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: false,
        bundledDependencies: false,
    }],
    "import/no-mutable-exports": ERROR,
    "import/no-unused-modules": OFF, // I don't understand it or it's broken
}

const moduleSystems = {
    "import/unambiguous": OFF,
    "import/no-commonjs": OFF,
    "import/no-amd": WARN,
    "import/no-nodejs-modules": OFF,
    "import/no-import-module-exports": WARN,
}

const style = {
    "import/first": ERROR,
    "import/exports-last": ERROR,
    "import/no-duplicates": ERROR,
    "import/no-namespace": OFF,
    "import/extensions": [ERROR, "ignorePackages", { "js": "always", "ts": "never" }],
    "import/order": [ERROR, {
        "groups": [
            "builtin", "external", "type", "internal", "parent", "sibling", "index", "object", "unknown"
        ],
        "pathGroups": [
            {
                pattern: "react",
                group: "builtin",
                position: "before"
            },
            {
                pattern: "*.+(scss|css)",
                group: "unknown",
                position: "before",
            }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "warnOnUnassignedImports": true
    }],
    "import/newline-after-import": [ERROR, {
        count: 1,
        // considerComments: true, // @TODO report eslint not linking this
    }],
    "import/prefer-default-export": OFF,
    "import/max-dependencies": [WARN, {
        max: 15,
        ignoreTypeImports: true
    }],
    "import/no-unassigned-import": OFF,
    "import/no-named-default": WARN,
    "import/no-default-export": WARN,
    "import/no-named-export": OFF,
    "import/no-anonymous-default-export": [WARN, {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowCallExpression": false,
        "allowLiteral": false,
        "allowObject": false
    }],
    "import/group-exports": ERROR,
    "import/dynamic-import-chunkname": OFF,
}

module.exports = {
    rules: {
        ...staticAnalysis,
        ...warnings,
        ...moduleSystems,
        ...style,
    },
};
