(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{150:function(t,s,a){"use strict";a.r(s);var l=a(6),i=a(7),e=a(8),n={data:function(){return{city:null,index:null,cities:["上海","北京","广州","深圳"],num:["选项一","选项二","选项三","选项四"],radioGroup1:"",radioGroup2:"上海",radioGroup3:"",radioGroup4:"",radioGroup5:"",radioGroup6:"",radioGroup7:"",radioGroup8:"",radioGroup9:""}},methods:{handleGroupChange:function(t){console.log(t)}}},_=a(0),v=Object(_.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-radio-group",{attrs:{slot:"description"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup9,callback:function(s){t.radioGroup9=s},expression:"radioGroup9"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n    普通\n  ")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup1,callback:function(s){t.radioGroup1=s},expression:"radioGroup1"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n    Button\n  ")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup2,callback:function(s){t.radioGroup2=s},expression:"radioGroup2"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n    指定默认值\n  ")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup3,callback:function(s){t.radioGroup3=s},expression:"radioGroup3"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s,disabled:1===l}},[t._v(t._s(s))])})),t._v("\n    禁用指定项\n  ")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",shape:"radius",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup4,callback:function(s){t.radioGroup4=s},expression:"radioGroup4"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n    圆角\n  ")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",shape:"round",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup5,callback:function(s){t.radioGroup5=s},expression:"radioGroup5"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])})),t._v("\n    椭圆角\n  ")],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-radio-group",{attrs:{block:"",compact:"",shape:"radius",type:"button"},on:{change:t.handleGroupChange},model:{value:t.radioGroup6,callback:function(s){t.radioGroup6=s},expression:"radioGroup6"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-radio-group",{attrs:{type:"cell"},on:{change:t.handleGroupChange},model:{value:t.radioGroup7,callback:function(s){t.radioGroup7=s},expression:"radioGroup7"}},t._l(t.num,function(s,l){return a("za-radio",{key:s,attrs:{label:s,disabled:1===l}},[t._v(t._s(s+(1===l?" disabled":"")))])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(3),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-radio-group",{attrs:{type:"cell",disabled:""},on:{change:t.handleGroupChange},model:{value:t.radioGroup8,callback:function(s){t.radioGroup8=s},expression:"radioGroup8"}},t._l(t.num,function(s,l){return a("za-radio",{key:s,attrs:{label:s}},[t._v(t._s(s))])}))],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("  "),t._m(4),t._v("\n    "),t._m(5),t._v("\n      "),t._m(6),t._v(t._s(t.city)),t._m(7),t._v("\n    "),t._m(8),t._v("\n    普通\n  "),t._m(9),t._v("\n  "),t._m(10),t._v("\n    "),t._m(11),t._v("\n      "),t._m(12),t._v(t._s(t.city)),t._m(13),t._v("\n    "),t._m(14),t._v("\n    Button\n  "),t._m(15),t._v("\n  "),t._m(16),t._v("\n    "),t._m(17),t._v("\n      "),t._m(18),t._v(t._s(t.city)),t._m(19),t._v("\n    "),t._m(20),t._v("\n    指定默认值\n  "),t._m(21),t._v("\n  "),t._m(22),t._v("\n    "),t._m(23),t._v("\n      "),t._m(24),t._v(t._s(t.city)),t._m(25),t._v("\n    "),t._m(26),t._v("\n    禁用指定项\n  "),t._m(27),t._v("\n  "),t._m(28),t._v("\n    "),t._m(29),t._v("\n      "),t._m(30),t._v(t._s(t.city)),t._m(31),t._v("\n    "),t._m(32),t._v("\n    圆角\n  "),t._m(33),t._v("\n  "),t._m(34),t._v("\n    "),t._m(35),t._v("\n      "),t._m(36),t._v(t._s(t.city)),t._m(37),t._v("\n    "),t._m(38),t._v("\n    椭圆角\n  "),t._m(39),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("块级样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("  "),t._m(40),t._v("\n    "),t._m(41),t._v(t._s(t.city)),t._m(42),t._v("\n  "),t._m(43),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("  "),t._m(44),t._v("\n    "),t._m(45),t._v(t._s(t.city+(1===t.index?" disabled":""))),t._m(46),t._v("\n  "),t._m(47),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表样式禁用状态")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("  "),t._m(48),t._v("\n    "),t._m(49),t._v(t._s(t.city)),t._m(50),t._v("\n  "),t._m(51),t._v("\n")])])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Radio Attributes")]),t._v(" "),t._m(52),t._v(" "),a("h4",[t._v("Radio Group Attributes")]),t._v(" "),t._m(53),t._v(" "),a("h4",[t._v("Radio Group Attributes")]),t._v(" "),t._m(54)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("基本\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("块级样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("列表样式\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("列表样式禁用状态\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup9"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup1"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup2"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup3"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 1"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup4"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup5"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("block")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("compact")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup6"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup7"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in num"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 1"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup8"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in num"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":label")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-radio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-radio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定选中radio的label值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'primary'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'default', 'primary', 'info', 'success', 'warning', 'error'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("主题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'button', 'cell'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'radius', 'round'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形状")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("block")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为块级元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("compact")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用紧凑模式")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择后触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("value 选中radio的label值")])])])])}],!1,null,null,null).exports,r=(a(55),{components:{Container:l.a,PageHeader:i.a,PageFooter:e.a,Demo:v}}),c=Object(_.a)(r,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"radio-page"},[s("PageHeader",{attrs:{title:"单选框 Radio"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);
//# sourceMappingURL=22.7fd03da34406964b3865.js.map