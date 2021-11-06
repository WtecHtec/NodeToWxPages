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

const BgPage = {
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
                    "variable": false,
                    "value": false
                }
            ]
        },
        {
            "id": 2,
            "pid": 1,
            "type": "compent",
            "compentId": "C",
            "rename": "lol-service",
            "properties": [
                {
                    "prop": "serverInfo",
                    "rename": "serverInfo",
                    "variable": true,
                    "isImport": true,
                    "value": [
                        { title: '服务容量', value: { field: 'service_total_count', num: 0, unit: '单' } },
                        { title: '人工服务量', value: { field: 'human_service_task_count', num: 0, unit: '次' } },
                        { title: '自助服务量', value: { field: 'selfhelp_service_total_count', num: 0, unit: '次' } },
                    ],
                    "format": {
                        "funcname": "setStatuts",
                        "rename": "setSericeInfo",
                        "path": "/utils/util.js",
                        "otherparams": "dataSrouce,"
                    }
                },
                {
                    "prop": "title",
                    "rename": "",
                    "variable": false,
                    "value": '基础服务数据-昨日'
                }
            ]
        },
    ]
}
module.exports = {
    AccountWxPage,
    BgPage,
}