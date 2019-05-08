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
];

export default routerConfig;
