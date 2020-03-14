module.exports = {
  // port: 4000,
  base: '/docs/',
  // temp: '../../.temp',
  title: 'คู่มือ JHOS',
  description: "โปรแกรมระบบงานโรงพยาบาล",
  themeConfig: {
    nav: [
      { text: 'คู่มือผู้ใช้', link: '/user-manual/' },
      { text: 'ผู้ดูแลระบบ', link: '/config/' },
      { text: 'การติดตั้ง', link: '/install/' }
    ],
    sidebar: [
      {
        title: 'คู่มือผู้ใช้',
        collapsable: false,
        children: [
          '/user-manual/fromword',
          '/user-manual/login',
          '/user-manual/menu-left',
          '/user-manual/visit-register',
          '/user-manual/patient-new',
          '/user-manual/patient-update',
          '/user-manual/doctor-room',
          '/user-manual/diag-opd',
          '/user-manual/register-ipd',
          '/user-manual/appoint',
          '/user-manual/drug-opd',
          '/user-manual/lab',
          '/user-manual/x-ray-opd',
          '/user-manual/operation-opd',
          '/user-manual/therapy',
          '/user-manual/servexpense-opd',
          '/user-manual/summary-expense-opd',
          '/user-manual/printdaemon'
        ]
      },
      {
        title: 'คู่มือผู้ดูแลระบบ',
        collapsable: false,
        children: [
          '/config/system'
        ]
      },
      {
        title: 'การติดตั้ง',
        collapsable: false,
        children: [
          '/install/mysql',
          '/install/jdk',
          '/install/tomcat'
        ]
      }
    ]
  }
}