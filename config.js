const AccountWxPage = {
    "id": 1,
    "pid": null,
    "type": "compent",
    "cname": "",
    "cpath": "",
    "childrens": [
        {
            "id": 2,
            "pid": 1,
            "type": "compent",
            "compentId": "A",
            "rename": "WX-STATUS",
            "slot": "main",
            "properties": [
                {
                    "prop": "accountData",
                    "rename": "accountData1",
                    "variable": true,
                    "isImport": true,
                    "value": [
                        {
                            "index": 0,
                            "title": "高价值占比",
                            "deftitle": "高价值占比",
                            "exttitle": "日均高价值占比",
                            "isNumber": true,
                            "showTrend": true,
                            "per": {
                                "valtype": "sum",
                                "filed": "qq_ban_high_value_per_double_1d_dbl",
                                "status": 0,
                                "value": ""
                            },
                            "value": {
                                "isPer": true,
                                "filed": "qq_ban_high_value_per_double",
                                "num": "",
                                "unit": ""
                            }
                        },
                        {
                            "index": 1,
                            "title": "首解率",
                            "deftitle": "首解率",
                            "exttitle": "日均首解率",
                            "isNumber": true,
                            "showTrend": true,
                            "per": {
                                "valtype": "sum",
                                "filed": "qq_ban_ivr_once_per_double_1d_dbl",
                                "status": 0,
                                "value": ""
                            },
                            "value": {
                                "isPer": true,
                                "filed": "qq_ban_ivr_once_per_double",
                                "num": "",
                                "unit": ""
                            }
                        }
                    ],
                    "format": {
                        "funcname": "setStatuts",
                        "rename": "setStatuts1",
                        "path": "/utils/util.js",
                        "otherparams": "dataSrouce,"
                    }
                },
                {
                    "prop": "isEmpty",
                    "rename": "",
                    "variable": true,
                    "value": false
                }
            ]
        },
        {
            "id": 3,
            "pid": 1,
            "type": "compent",
            "compentId": "B",
            "methods": [
                {
                    "type": "bind",
                    "name": "empty",
                    "event": "bindEmpty"
                }
            ],
            "properties": [
                {
                    "prop": "desc",
                    "rename": "",
                    "value": "暂无数据"
                },
                {
                    "prop": "showBtn",
                    "rename": "",
                    "value": true
                }
            ]
        }
    ]
}

const BgPage = { "type": "compent", "cname": "", "cpath": "", "childrens": [{ "cname": "service", "cpath": "/components/bg-service", "type": "compent", "key": "g-service", "desc": "服务数据", "img": "g-service.png", "id": "49f8e5a6-65a6-491d-832f-172352cecc6d", "rename": "", "slot": "" }, { "cname": "empty", "cpath": "/tempages/components/view-empty/view-empty", "type": "compent", "key": "g-empty", "desc": "数据空状态", "img": "pkgTem-empty.png", "properties": [{ "prop": "pt", "valType": "number", "value": "" }, { "prop": "desc", "valType": "string", "value": "测试例子" }], "id": "1b493f99-46b7-4f23-9d2d-e0b873a6fd12", "rename": "", "slot": "" }] }
module.exports = {
    AccountWxPage,
    BgPage,
}