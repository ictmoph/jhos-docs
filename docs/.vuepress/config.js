module.exports = {
  // port: 4000,
  base: '/jhos-docs/',
  dest: "site",
  // temp: '../../.temp',
  title: 'คู่มือ JHOS',
  description: "โปรแกรมระบบงานโรงพยาบาล jhos",
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
          '/user-manual/000-login',
          '/user-manual/001-menu-left',
          '/user-manual/100-visit-register',
          '/user-manual/101-patient-new',
          '/user-manual/102-patient-update',
          '/user-manual/103-doctor-exam-room',
          '/user-manual/104-opd-diag',
          '/user-manual/105-register-ipd',
          '/user-manual/106-appoint',
          '/user-manual/107-opd-drug',
          '/user-manual/108-lab',
          '/user-manual/109-opd-x-ray',
          '/user-manual/110-opd-operation',
          '/user-manual/111-therapy',
          '/user-manual/112-opd-servexpense',
          '/user-manual/113-opd-cost-summary',
          '/user-manual/114-medical-history',
          '/user-manual/115-claim-edit-opd',
          '/user-manual/200-receive-patient-to-ward',
          '/user-manual/201-ipd-pateint-search',
          '/user-manual/202-exam-room-patient-search',
          '/user-manual/203-ipd-drug',
          '/user-manual/204-ipd-lab',
          '/user-manual/205-ipd-x-ray',
          '/user-manual/206-ipd-operation',
          '/user-manual/207-ipd-other-list',
          '/user-manual/208-ipd-cost-summary',
          '/user-manual/209-ipd-diag',
          '/user-manual/210-ipd-claim-edit',
          '/user-manual/211-ipd-servexpense',
          '/user-manual/212-ipd-move-building',
          '/user-manual/300-finance',
          '/user-manual/301-discharge',
          '/user-manual/302-cancel-receipt',
          '/user-manual/303-export-43file',
          '/user-manual/400-printdaemon',
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