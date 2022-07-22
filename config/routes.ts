﻿export const routes = [
  {
    path: '/user/login',
    layout: false,
    component: 'user/Login',
  },
  {
    path: '/admin',
    redirect: '/admin/kubernetes',
  },
  {
    path: '/admin/kubernetes',
    component: 'admin/Kubernetes',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/admin/environments',
    component: 'admin/Environments',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/admin/harbors',
    component: 'admin/Harbors',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/admin/templates',
    component: "admin/Templates",
    wrappers: [
      '@/wrappers/auth',
    ]
  },
  {
    path: '/',
    menuRender: false,
    redirect: '/dashboard/clusters',
  },
  {
    path: '/explore/groups',
    menuRender: false,
    component: 'dashboard',
  },
  {
    path: '/dashboard/applications',
    menuRender: false,
    component: 'dashboard',
  },
  {
    path: '/explore/applications',
    menuRender: false,
    component: 'dashboard',
  },
  {
    path: '/dashboard/clusters',
    menuRender: false,
    component: 'dashboard',
  },
  {
    path: '/explore/clusters',
    menuRender: false,
    component: 'dashboard',
  },
  {
    path: '/groups/new',
    menuRender: false,
    component: 'groups/NewGroup',
  },
  {
    path: '/slo',
    menuRender: false,
    component: 'more/SLO',
  },
];

const groupRoutes = [
  {
    path: '/groups/*/-/members',
    component: 'groups/Member',
  },
  {
    path: '/groups/*/-/settings',
    component: 'groups/Settings',
  },
  {
    path: '/groups/*/-/settings/basic',
    component: 'groups/config/Basic',
  },
  {
    path: '/groups/*/-/settings/advance',
    component: 'groups/config/Advance'
  }, {
    path: '/groups/*/-/settings/oauthapps',
    component: 'groups/config/Oauthapp'
  }, {
    path: '/groups/*/-/settings/oauthapps/:id',
    component: 'oauthapp/Detail',
  },
  {
    path: '/groups/*/-/activity',
    component: 'groups/Activity',
  },
  {
    path: '/groups/*/-/newsubgroup',
    menuRender: false,
    component: 'groups/NewSubGroup',
  },
  {
    path: '/groups/*/-/newapplication',
    menuRender: false,
    component: 'applications/NewOrEdit',
  },
  {
    path: `/groups/*/-/newoauthapp`,
    menuRender: false,
    component: 'oauthapp/New'
  }
];

const applicationRoutes = [
  {
    path: '/applications/*/-/members',
    component: 'applications/Member',
  },
  {
    path: '/applications/*/-/clusters',
    component: 'applications/Clusters',
  },
  {
    path: '/applications/*/-/pipelines',
    component: 'clusters/pipelines/New',
  },
  {
    path: '/applications/*/-/edit',
    menuRender: false,
    component: 'applications/NewOrEdit',
  },
  {
    path: '/applications/*/-/clusters/new',
    menuRender: false,
    component: 'clusters/NewOrEdit',
  },
  {
    path: '/applications/*/-/settings/advance',
    component: 'applications/config/Advance',
  }
];

const clusterRoutes = [
  {
    path: '/clusters/*/-/edit',
    menuRender: false,
    component: 'clusters/NewOrEdit',
  },
  {
    path: '/clusters/*/-/pods',
    component: 'clusters/Pods',
  },
  {
    path: '/clusters/*/-/pods/:name',
    menuRender: false,
    component: 'clusters/Pod',
  },
  {
    path: '/clusters/*/-/pipelines',
    component: 'clusters/pipelines/History',
  },
  {
    path: '/clusters/*/-/pipelines/new',
    component: 'clusters/pipelines/New',
  },
  {
    path: '/clusters/*/-/pipelines/:id',
    component: 'clusters/pipelines/Detail',
  },
  {
    path: '/clusters/*/-/members',
    component: 'clusters/Member',
  },
  {
    path: '/clusters/*/-/webconsole',
    menuRender: false,
    component: 'clusters/Pods/Console',
  },
  {
    path: '/clusters/*/-/monitoring',
    component: 'clusters/Monitoring',
  },
  {
    path: '/clusters/*/-/tags',
    menuRender: false,
    component: 'clusters/Tag',
  },
  {
    path: '/clusters/*/-/admintags',
    menuRender: false,
    component: 'clusters/AdminTag',
  }
];

const adminRoutes = [
  {
    path: '/admin/kubernetes/new',
    component: 'admin/Kubernetes/New'
  }, {
    path: '/admin/kubernetes/:id',
    component: 'admin/Kubernetes/Detail'
  }, {
    path: '/admin/kubernetes/:id/edit',
    component: 'admin/Kubernetes/Edit'
  }, {
    path: '/admin/harbors/new',
    component: 'admin/Harbors/New'
  }, {
    path: '/admin/harbors/:id',
    component: 'admin/Harbors/Detail'
  }, {
    path: '/admin/harbors/:id/edit',
    component: 'admin/Harbors/Edit'
  }, {
    path: '/admin/environments/new',
    component: 'admin/Environments/New'
  }, {
    path: '/admin/environments/:id',
    component: 'admin/Environments/Detail'
  }, {
    path: '/admin/environments/:id/edit',
    component: 'admin/Environments/Edit'
  },
  {
    path: '/admin/templates/new',
    component: 'admin/Templates/New',
  },
  {
    path: '/admin/templates/:id',
    component: 'admin/Templates/Detail',
  },
  {
    path: '/admin/templates/:id/edit',
    component: 'admin/Templates/Edit',
  },
  {
    path: '/admin/templates/:id/members',
    component: 'admin/Templates/Member',
  },
  {
    path: '/admin/templates/:id/releases',
    component: 'admin/Templates/Releases',
  },
  {
    path: '/admin/templates/:template/releases/new',
    component: 'admin/Templates/Releases/New',
  },
  {
    path: '/admin/templates/:template/releases/:id',
    component: 'admin/Templates/Releases/Detail',
  },
  {
    path: '/admin/templates/:template/releases/:id/edit',
    component: 'admin/Templates/Releases/Edit',
  },
]

const allRoute = [];
allRoute.push(...routes);
allRoute.push(...groupRoutes);
allRoute.push(...applicationRoutes);
allRoute.push(...clusterRoutes);
allRoute.push(...adminRoutes);
// @ts-ignore
allRoute.push({
  path: '/*',
  component: 'Detail',
});

export default allRoute;
