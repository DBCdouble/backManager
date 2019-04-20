import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  data = window.location.href.includes('/dashboard/analysis') ? [{
    a: '1',
    b: '八九民',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '2',
    b: '安眠药',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '3',
    b: '造反',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '4',
    b: '法轮功',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '5',
    b: '恐怖组织',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '6',
    b: '买毒品',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '6',
    b: '卖毒品',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '7',
    b: '钓鱼岛',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '8',
    b: '钓鱼岛不属于中国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '9',
    b: '突尼斯',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '10',
    b: '八九民',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '11',
    b: 'gongchandang',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新闻出版总署',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '13',
    b: '处女',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '房事',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '西藏314事件',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '排泄',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '肉体',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '肉欲',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '猥琐',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '猥亵',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '坐台',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '押小',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '房事',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新疆国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '肉欲',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '猥琐',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '猥亵',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '坐台',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '押小',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '房事',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新疆国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '党中央',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新闻管制',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '一边一国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '两国论',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '分裂中国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '革命',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '茉莉花',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '国内动态详情',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '回回',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '六四',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '美国之音',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '密宗',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '民国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '民进党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '民运',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '民主潮',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '摩门教',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '纳粹',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '南华早报',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '南蛮',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '明慧网',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '起义',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '亲民党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '瘸腿帮',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '人民报',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '法轮功',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '打倒共产党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '法轮大法',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '打倒共产党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台独万岁',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '圣战',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '示威',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台独',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台独分子',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台联',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台湾民国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台湾岛国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台湾国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '台湾独立',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '太子党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '屠杀',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '小泉',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新疆分裂',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '新疆国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '疆独',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '西藏独立',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '西藏分裂',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '西藏国',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '真善忍',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '镇压',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '政变',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '政治',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '政治反对派',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '政治犯',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '中共',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '共产党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '反党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '反共',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '政府',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '民主党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '中国之春',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '转法轮',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '共党',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '共匪',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '苏家屯',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '基地组织',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '塔利班',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '东亚病夫',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '支那',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '高治联',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '高自联',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '专政',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '专制',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '世界维吾尔大会',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '核工业基地',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  },{
    a: '12',
    b: '核武器',
    c: '***',
    d: 150,
    e: '2019-01-10 22:07:27'
  }]: [
    {
    a: '65814',
    b: 'login',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '登录系统',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65813',
    b: '/purchase/view',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65812',
    b: '/purchase/purchase_list',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/users/login_save',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65854',
    b: '/purchase/purchase_list',
    c: '何婉君',
    d: 18211537997,
    e: '408728383@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/login_save',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '123.28.22.37',
    h: '2019-01-10',
  },{
    a: '65851',
    b: '/enterpriselist/catlist',
    c: '曹万鹏',
    d: 18813078832,
    e: '2320076657@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '132.42.12.27',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65859',
    b: '/users/login_save',
    c: '和发输变电',
    d: 18527112023,
    e: 'hfpowerzmx@126.com',
    f: '用户登录【/users/login_save.html】',
    g: '122.48.33.17',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/reg_phone_save',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '154.44.32.67',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65814',
    b: 'login',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '登录系统',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65813',
    b: '/purchase/view',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65812',
    b: '/purchase/purchase_list',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/users/login_save',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65854',
    b: '/purchase/purchase_list',
    c: '何婉君',
    d: 18211537997,
    e: '408728383@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/login_save',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '123.28.22.37',
    h: '2019-01-10',
  },{
    a: '65851',
    b: '/enterpriselist/catlist',
    c: '曹万鹏',
    d: 18813078832,
    e: '2320076657@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '132.42.12.27',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65859',
    b: '/users/login_save',
    c: '和发输变电',
    d: 18527112023,
    e: 'hfpowerzmx@126.com',
    f: '用户登录【/users/login_save.html】',
    g: '122.48.33.17',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/reg_phone_save',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '154.44.32.67',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65814',
    b: 'login',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '登录系统',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65813',
    b: '/purchase/view',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65812',
    b: '/purchase/purchase_list',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/users/login_save',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65854',
    b: '/purchase/purchase_list',
    c: '何婉君',
    d: 18211537997,
    e: '408728383@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/login_save',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '123.28.22.37',
    h: '2019-01-10',
  },{
    a: '65851',
    b: '/enterpriselist/catlist',
    c: '曹万鹏',
    d: 18813078832,
    e: '2320076657@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '132.42.12.27',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65859',
    b: '/users/login_save',
    c: '和发输变电',
    d: 18527112023,
    e: 'hfpowerzmx@126.com',
    f: '用户登录【/users/login_save.html】',
    g: '122.48.33.17',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/reg_phone_save',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '154.44.32.67',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65814',
    b: 'login',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '登录系统',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65813',
    b: '/purchase/view',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65812',
    b: '/purchase/purchase_list',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/users/login_save',
    c: '13313181227',
    d: 13313181227,
    e: '386963667@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '110.247.45.15',
    h: '2019-01-10',
  },{
    a: '65854',
    b: '/purchase/purchase_list',
    c: '何婉君',
    d: 18211537997,
    e: '408728383@qq.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/login_save',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '用户登录【/users/login_save.html】',
    g: '123.28.22.37',
    h: '2019-01-10',
  },{
    a: '65851',
    b: '/enterpriselist/catlist',
    c: '曹万鹏',
    d: 18813078832,
    e: '2320076657@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '132.42.12.27',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65859',
    b: '/users/login_save',
    c: '和发输变电',
    d: 18527112023,
    e: 'hfpowerzmx@126.com',
    f: '用户登录【/users/login_save.html】',
    g: '122.48.33.17',
    h: '2019-01-10',
  },{
    a: '65834',
    b: '/users/reg_phone_save',
    c: '黄暖忠',
    d: 18819478634,
    e: '703202585@qq.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '154.44.32.67',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65856',
    b: '/index/index',
    c: '包景丞',
    d: 17793295859,
    e: '438012578@qq.com',
    f: '查看用户中心首页【/information/index.html】',
    g: '183.48.22.37',
    h: '2019-01-10',
  },{
    a: '65898',
    b: '/purchase/purchase_list',
    c: '黄逸杰',
    d: 13450477906,
    e: '13450477906@QQ.com',
    f: '查看询价列表【/purchase/purchase_list.html】',
    g: '111.225.204.22',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  },{
    a: '65811',
    b: '/enterpriselist/catlist',
    c: '方绮玲',
    d: 15521057363,
    e: '1369096100@qq.com',
    f: '查看公司首页【/enterpriselist/catlist.html】',
    g: '143.44.21.76',
    h: '2019-01-10',
  },{
    a: '65805',
    b: '/enterprise/home',
    c: '_632896',
    d: 18737510023,
    e: 'hfpowerzmx@126.com',
    f: '查看询价详情【/purchase/view.html】',
    g: '119.126.31.111',
    h: '2019-01-10',
  }]


  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data = {}, rowKey, ...rest } = this.props;
    const { list = [], pagination } = data;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <Fragment>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                {needTotalList.map(item => (
                  <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                    {item.title}
                    总计&nbsp;
                    <span style={{ fontWeight: 600 }}>
                      {item.render ? item.render(item.total) : item.total}
                    </span>
                  </span>
                ))}
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
                </a>
              </Fragment>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          rowKey={rowKey || 'key'}
          rowSelection={rowSelection}
          dataSource={this.data}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;
