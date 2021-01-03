(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{440:function(e,t,s){"use strict";s.r(t);var a=s(13),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("h2",{attrs:{id:"config-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[e._v("#")]),e._v(" Config File")]),e._v(" "),s("p",[e._v("Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let’s first create a "),s("code",[e._v(".vuepress")]),e._v(" directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),s("p",[e._v("The essential file for configuring a VuePress site is "),s("code",[e._v(".vuepress/config.js")]),e._v(", which should export a JavaScript object:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello VuePress'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Just playing around'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("If you’ve got the dev server running, you should see the page now has a header with the title and a search box. VuePress comes with built-in headers-based search: it automatically builds a simple search index from the title, "),s("code",[e._v("h2")]),e._v(", and "),s("code",[e._v("h3")]),e._v(" headers on all pages.")]),e._v(" "),s("p",[e._v("Check out the "),s("RouterLink",{attrs:{to:"/config/"}},[e._v("Config Reference")]),e._v(" for a full list of options.")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Alternative Config Formats")]),e._v(" "),s("p",[e._v("You can also use YAML ("),s("code",[e._v(".vuepress/config.yml")]),e._v(") or TOML ("),s("code",[e._v(".vuepress/config.toml")]),e._v(") formats for the configuration file.")])]),e._v(" "),s("h2",{attrs:{id:"theme-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-configuration"}},[e._v("#")]),e._v(" Theme Configuration")]),e._v(" "),s("p",[e._v("A VuePress theme owns all the layout and interactivity details of your site. VuePress ships with a default theme (you are looking at it right now), designed for technical documentation. It exposes many options that allow you to customize the navbar, sidebar and homepage, etc. For details, check out the "),s("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[e._v("Default Theme Config")]),e._v(" page.")],1),e._v(" "),s("p",[e._v("To develop a custom theme, see "),s("RouterLink",{attrs:{to:"/theme/writing-a-theme.html"}},[e._v("Writing a theme")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"app-level-enhancements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements"}},[e._v("#")]),e._v(" App Level Enhancements")]),e._v(" "),s("p",[e._v("Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file "),s("code",[e._v(".vuepress/enhanceApp.js")]),e._v(", which will be imported into the app if present. The file should "),s("code",[e._v("export default")]),e._v(" a hook function which will receive an object containing some app-level values. You can use this hook to install extra Vue plugins, register global components, or add extra router hooks:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// async function is also supported, too")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the version of Vue being used in the VuePress app")]),e._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the options for the root Vue instance")]),e._v("\n  router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the router instance for the app")]),e._v("\n  siteData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// site metadata")]),e._v("\n  isServer "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// is this enhancement applied in server-rendering or client")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...apply enhancements to the app")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Related:")])]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/plugin/option-api.html#enhanceappfiles"}},[e._v("App Level Enhancements in Plugin API")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);