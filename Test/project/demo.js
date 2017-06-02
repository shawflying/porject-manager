//先罗列结构

var projectList = [
    {
        id: '1',
        name: '',
        desc: '',
        answerList: [],//问题列表
        interfaceList: [],//接口列表
        baseInfo: {},//项目基本信息
        StakeholderList: {},//干系人列表
        remark: '',//备注信息
    }
];

var baseInfo = {
    code: {
        startTime: '2017-05-06 12:12:12',//开始开发时间
        endTime: '2017-05-07 12:12:12',//结束开发时间
    }, online: {
        startTime: '2017-05-06 12:12:12',//上线时间
        endTime: '2017-05-07 12:12:12',//下线时间
    }, Entry: [
        { name: '首页', url: 'http://m.sh.189.cn' }
    ]
}

//干系人列表
var StakeholderList = [
    { id: '', name: '张三', type: '内部干系人', department: 'it', mobile: '15806111230', tel: '', qq: '', email: '', duty: '职责，负责做什么', remark: '备注' }
]

var answerList = [
    { id: '1', title: '是否需要分享', option: { "A": "wechat", "B": "wechat", }, answer: {} },
    { id: '2', title: '哪些渠道', option: { "A": "wechat", "B": "wechat", }, answer: { "A": "wechat" } },
];

var interfaceList = [
    { id: '1', title: '接口名称A', desc: '接口描述', interface: { info: '接口对象信息' } },
    { id: '2', title: '接口名称B', desc: '接口描述', interface: {} },
];

var interface = {
    method: 'get/post/postform',
    input: {},//入参 及描述
    output: {},//出参及描述

};