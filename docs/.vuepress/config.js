module.exports = {
  title: 'JHOS Manual',
  description: "A demo documentation using VuePress",
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
          '/user-manual/login',
          '/user-manual/patient-new'
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