// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import Dismantling from './pages/Dismantling';
import Allocation from './pages/Allocation';
import Selfhelp from './pages/Selfhelp';
import List from './pages/List';
import NewCase from './pages/NewCase';
import AddAllocation from './pages/AddAllocation';
import AddDashboard from './pages/AddDashboard';
import Dashboarduser from './pages/Dashboarduser';
import Gonggao1 from './pages/Gonggao1';
import Gonggao2 from './pages/Gonggao2';
import Gonggao3 from './pages/Gonggao3';
import Gonggao4 from './pages/Gonggao4';
import Gonggao5 from './pages/Gonggao5';
import Gonggao6 from './pages/Gonggao6';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/dismantling',
    component: Dismantling,
  },
  {
    path: '/allocation',
    component: Allocation,
  },
  {
    path: '/selfHelp',
    component: Selfhelp,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/new',
    component: NewCase,
  },
  {
    path: '/AddAllocation',
    component: AddAllocation,
  },
  {
    path: '/AddDashboard',
    component: AddDashboard,
  },

  {
    path: '/dashboarduser',
    component: Dashboarduser,
  },
  {
    path: '/Gonggao1',
    component: Gonggao1,
  },
  {
    path: '/Gonggao2',
    component: Gonggao2,
  },
  {
    path: '/Gonggao3',
    component: Gonggao3,
  },
  {
    path: '/Gonggao4',
    component: Gonggao4,
  },
  {
    path: '/Gonggao5',
    component: Gonggao5,
  },
  {
    path: '/Gonggao6',
    component: Gonggao6,
  },
];

export default routerConfig;
