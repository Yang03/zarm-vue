(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{164:function(t,s,a){"use strict";a.r(s);var l=a(6),e=a(7),n=a(8),i={data:function(){return{v1:!1,v2:!0,v3:!1,v4:!0,v5:!1,city:null,cities:["上海","北京","广州","深圳"],checkboxGroup:["上海"],checkboxGroup2:[],checkboxGroup3:["上海","北京"],checkboxGroup4:[],checkboxGroup5:[],checkboxGroup6:[],checkboxGroup7:[],checkboxGroup8:[],checkboxGroupCompact:[],checkboxGroupCompact2:[]}},methods:{handleChange:function(t,s){console.log(t,s)},handleGroupChange:function(t,s){console.log(t,s)}}},c=a(0),_=Object(c.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-checkbox",{on:{change:t.handleChange},model:{value:t.v1,callback:function(s){t.v1=s},expression:"v1"}},[t._v("普通")])],1),t._v(" "),a("za-cell",[a("za-checkbox",{on:{change:t.handleChange},model:{value:t.v2,callback:function(s){t.v2=s},expression:"v2"}},[t._v("选中")])],1),t._v(" "),a("za-cell",[a("za-checkbox",{attrs:{disabled:""},on:{change:t.handleChange},model:{value:t.v3,callback:function(s){t.v3=s},expression:"v3"}},[t._v("禁止")])],1),t._v(" "),a("za-cell",[a("za-checkbox",{attrs:{disabled:""},on:{change:t.handleChange},model:{value:t.v4,callback:function(s){t.v4=s},expression:"v4"}},[t._v("选中且禁止")])],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-checkbox",{attrs:{type:"cell"},on:{change:t.handleChange},model:{value:t.v5,callback:function(s){t.v5=s},expression:"v5"}},[t._v("阅读并同意《XXX条款》中的相关规定")])],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup,callback:function(s){t.checkboxGroup=s},expression:"checkboxGroup"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s,disabled:2===l}},[t._v(t._s(s))])})),t._v("\n      组合使用\n    ")],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(3),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup2,callback:function(s){t.checkboxGroup2=s},expression:"checkboxGroup2"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n      普通\n    ")],1),t._v(" "),a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup3,callback:function(s){t.checkboxGroup3=s},expression:"checkboxGroup3"}},t._l(t.cities,function(s){return a("za-checkbox",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n      指定默认值\n    ")],1),t._v(" "),a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup4,callback:function(s){t.checkboxGroup4=s},expression:"checkboxGroup4"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s,disabled:2===l}},[t._v(t._s(s))])})),t._v("\n      禁用指定项\n    ")],1),t._v(" "),a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description",type:"button",shape:"radius"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup5,callback:function(s){t.checkboxGroup5=s},expression:"checkboxGroup5"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n      圆角\n    ")],1),t._v(" "),a("za-cell",[a("za-checkbox-group",{attrs:{slot:"description",type:"button",shape:"round"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.checkboxGroup6,callback:function(s){t.checkboxGroup6=s},expression:"checkboxGroup6"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n      椭圆角\n    ")],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(4),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-checkbox-group",{attrs:{type:"button",block:"",shape:"radius"},on:{change:t.handleGroupChange},model:{value:t.checkboxGroupCompact2,callback:function(s){t.checkboxGroupCompact2=s},expression:"checkboxGroupCompact2"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s,disabled:2===l}},[t._v(t._s(s))])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(5),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-checkbox-group",{attrs:{type:"cell"},on:{change:t.handleGroupChange},model:{value:t.checkboxGroup7,callback:function(s){t.checkboxGroup7=s},expression:"checkboxGroup7"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s,disabled:2===l}},[t._v(t._s(s))])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(6),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-checkbox-group",{attrs:{type:"cell",disabled:""},on:{change:t.handleGroupChange},model:{value:t.checkboxGroup8,callback:function(s){t.checkboxGroup8=s},expression:"checkboxGroup8"}},t._l(t.cities,function(s,l){return a("za-checkbox",{key:s,attrs:{label:s}},[t._v(t._s(s))])}))],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[t._m(7),t._v(" "),t._m(8),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("组合使用")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(9),t._v("\n      "),t._m(10),t._v("\n        "),t._m(11),t._v(t._s(t.city)),t._m(12),t._v("\n      "),t._m(13),t._v("\n      组合使用\n    "),t._m(14),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("按钮样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(15),t._v("\n      "),t._m(16),t._v("\n        "),t._m(17),t._v(t._s(t.city)),t._m(18),t._v("\n      "),t._m(19),t._v("\n      普通\n    "),t._m(20),t._v("\n    "),t._m(21),t._v("\n      "),t._m(22),t._v("\n        "),t._m(23),t._v(t._s(t.city)),t._m(24),t._v("\n      "),t._m(25),t._v("\n      指定默认值\n    "),t._m(26),t._v("\n    "),t._m(27),t._v("\n      "),t._m(28),t._v("\n        "),t._m(29),t._v(t._s(t.city)),t._m(30),t._v("\n      "),t._m(31),t._v("\n      禁用指定项\n    "),t._m(32),t._v("\n    "),t._m(33),t._v("\n      "),t._m(34),t._v("\n        "),t._m(35),t._v(t._s(t.city)),t._m(36),t._v("\n      "),t._m(37),t._v("\n      圆角\n    "),t._m(38),t._v("\n    "),t._m(39),t._v("\n      "),t._m(40),t._v("\n        "),t._m(41),t._v(t._s(t.city)),t._m(42),t._v("\n      "),t._m(43),t._v("\n      椭圆角\n    "),t._m(44),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("块级样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(45),t._v("\n      "),t._m(46),t._v(t._s(t.city)),t._m(47),t._v("\n    "),t._m(48),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表组样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(49),t._v("\n      "),t._m(50),t._v(t._s(t.city)),t._m(51),t._v("\n    "),t._m(52),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表样式禁用状态")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(53),t._v("\n      "),t._m(54),t._v(t._s(t.city)),t._m(55),t._v("\n    "),t._m(56),t._v("\n")])])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Checkbox Attributes")]),t._v(" "),t._m(57),t._v(" "),a("h4",[t._v("Checkbox Events")]),t._v(" "),t._m(58),t._v(" "),a("h4",[t._v("Checkbox-Group Attributes")]),t._v(" "),t._m(59)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("基本\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("单列样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("组合使用\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("按钮样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("块级样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("列表组样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("列表样式禁用状态\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v1"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),t._v("普通"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v2"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),t._v("选中"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),t._v("禁止"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v4"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),t._v("选中且禁止"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("单列样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(">")]),t._v("阅读并同意《XXX条款》中的相关规定"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 2"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup3"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup4"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 2"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup6"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroupCompact2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("block")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 2"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup7"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 2"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkboxGroup8"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-checkbox")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-checkbox-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-checkbox")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'primary'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'default', 'primary', 'info', 'success', 'warning', 'error'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("主题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'button', 'cell'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.选中的值列表，2.event 事件对象")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-checkbox")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'primary'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'default', 'primary', 'info', 'success', 'warning', 'error'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("主题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'radius', 'round'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形状")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'button', 'cell'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("block")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为块级元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])])}],!1,null,null,null).exports,v={components:{Container:l.a,PageHeader:e.a,PageFooter:n.a,Demo:_}},h=Object(c.a)(v,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",[s("PageHeader",{attrs:{title:"复选框 Checkbox"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=h.exports}}]);
//# sourceMappingURL=28.8a4fc1be0ec3a0d53e58.js.map