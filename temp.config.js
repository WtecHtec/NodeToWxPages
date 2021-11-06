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
}
module.exports = {
    temDatas,
    temJson,
}
