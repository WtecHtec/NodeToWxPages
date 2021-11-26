const materialsData = [
  {
    name: '主包',
    desc: '主包',
    data: [
      {
        cname:'status',
        cpath: '/components/block-status',
        type: "compent",
        key: 'g-status',
        desc: '数据状态',
        img: 'g-status.png',
        properties: [
          {
            prop: 'accountData',
            propLevel: 'data',
            valType: 'object',
          },
        ],
      },
      {
        cname:'service',
        cpath: '/components/bg-service',
        type: "compent",
        key: 'g-service',
        desc: '服务数据',
        img: 'g-service.png',
        
      },
      {
        cname:'cell',
        cpath: '/components/common/cell',
        type: "compent",
        key: 'g-cell',
        desc: '服务数据',
        img: 'g-cell.png',
        properties: [
          {
            prop: 'title',
            valType: 'string',
          },
        ],
      },
    ],
  },
  {
    name: 'pkgTem分包',
    desc: 'pkgTem分包',
    data: [
      {
        cname:'empty',
        cpath: '/tempages/components/view-empty/view-empty',
        type: "compent",
        key: 'g-empty',
        desc: '数据空状态',
        img: 'pkgTem-empty.png',
        properties: [
          {
            prop: "pt",
            valType: 'number',
          },
          {
            prop: "desc",
            valType: 'string',
          },
          {  
            prop: 'icon',
            valType: 'string',
            values: ['commentempty', 'funcbeta']
          }
        ],
      },
    ],
  },
]