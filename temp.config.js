const temDatas = [
    {
        "id": "A",
        "cname": "block-status",
        "cpath": "/compents/block-status",
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
        "cpath": "/compents/view-empty/view-empty",
    }
]

const temJson = {
    "A": {
        "id": "A",
        "cname": "block-status",
        "cpath": "/compents/block-status",
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
    "B": {
        "id": "B",
        "cname": "view-empty",
        "cpath": "/compents/view-empty/view-empty",
    }
}
module.exports = {
    temDatas,
    temJson,
}
