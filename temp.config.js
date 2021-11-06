const temDatas = [
    {
        "id": "A",
        "cname": "block-status",
        "cpath": "/components/block-status",
        // "slot": ["mian", "fixtop"],
        "properties": [
            {
                "prop": "accountData",
                "type": Array,
                // "variable": true,
                // "isImport": true,
                "format": {
                    "funcname": "setStatuts",
                    "rename": "setStatuts1",
                    "path": "/utils/util.js",
                    "otherparams": "dataSrouce,"
                }
            }
        ]
    },
    {
        "id": "B",
        "cname": "view-empty",
        "cpath": "/components/view-empty/view-empty",
    }
]

const temJson = {
    "A": {
        "id": "A",
        "cname": "block-status",
        "cpath": "/components/block-status",
        // "slot": ["mian", "fixtop"],
        "properties": [
            {
                "prop": "accountData",
                "type": Array,
                "format": {
                    "funcname": "setStatuts",
                    "path": "/utils/util.js",
                    "otherparams": "dataSrouce,"
                }
            }
        ]
    },
    "B": {
        "id": "B",
        "cname": "view-empty",
        "cpath": "/components/view-empty/view-empty",
        "methods": [
            {
                "type": "bind",
                "name": "empty",
            }
        ],
        "properties": [
            {
                "prop": "icon",
                "type": String,
            },
            {
                "prop": "desc",
                "type": String,
            },
            {
                "prop": "showBtn",
                "type": Boolean,
            },
        ]
    },
    "C": {
        "id": "C",
        "cname": "bg-service",
        "cpath": "/components/bg-service",
        "methods": [
            {
                "type": "bind",
                "name": "detail",
            }
        ],
        "properties": [
            {
                "prop": "title",
                "type": String,
            },
            {
                "prop": "serverInfo",
                "type": Array,
                "format": {
                    "funcname": "setStatuts",
                    "path": "/utils/util.js",
                    "otherparams": "dataSrouce,"
                }
            },
        ]
    },
    "D": {
        "id": "D",
        "cname": "m-cell",
        "cpath": '/components/common/cell',
        "methods": [
            {
                "type": "bind",
                "name": "clicktitle",
            }
        ],
        "properties": [
            {
                "prop": "title",
                "type": String,
            },
            {
                "prop": "left-icon",
                "type": String,
            },
            {
                "prop": "left-icon-color",
                "type": String,
            },
            {
                "prop": "is-link",
                "type": String,
            },
        ]
    },
    "E": {
        "id": "E",
        "cname": "m-part",
        "cpath": '/components/common/part',
        "slot": ["header", "content"],
        "properties": [
            {
                "prop": "bottomSpac",
                "type": Boolean,
            },
            {
                "prop": "topSpac",
                "type": String,
            },
            {
                "prop": "pb",
                "type": String,
            },
            {
                "prop": "bgcolor",
                "type": String,
            },
        ]
    },
}
module.exports = {
    temDatas,
    temJson,
}
