// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
 /* {
    name: '我的工作台',
    path: '/',
  },
  {
    name: '业务办理',
    path: '/business',
  },
  {
    name: '案件查询',
    path: '/query',
  },
  {
    name: '统计分析',
    path: '/analysis',
  },*/
];

// ICON 配置： https://ice.alibaba-inc.com/component/foundationsymbol
const asideMenuConfig = [
  {
    name: '工作台',
    path: '/dashboard',
    icon: 'home',
  },
  {
    name: '账号管理',
    path: '/dismantling',
    icon: 'cascades',
  },
  {
    name: '房屋管理',
    path: '/allocation',
    icon: 'person',
  },
  {
    name: '维修管理',
    path: '/selfhelp',
    icon: 'exchange',
  },
  {
    name: '费用管理',
    path: '/list',
    icon: 'ol-list',
  },
  // {
  //   name: '批量处理',
  //   path: '/batch',
  //   icon: 'copy',
  // },
  {
    name: '维修报备',
    path: '/new',
    icon: 'copy',
  },
  {
    name: '房屋录入',
    path: '/AddAllocation',
    icon: 'copy',
  },
  {
    name: '公告录入',
    path: '/AddDashboard',
    icon: 'copy',
  },
];
export { headerMenuConfig, asideMenuConfig };
