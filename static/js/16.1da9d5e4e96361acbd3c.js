webpackJsonp([16],{202:function(n,e,o){function c(n){o(303)}var a=o(1)(o(230),o(323),c,null,null);n.exports=a.exports},230:function(n,e,o){"use strict";function c(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(133),t=c(a),l=o(135),r=c(l),u=o(134),p=c(u);e.default={components:{Container:t.default,PageHeader:r.default,PageFooter:p.default},data:function(){return{v1:!1,cities:["上海","北京","广州","深圳"],checkboxGroup:["上海"],checkboxGroup2:[],checkboxGroup3:["上海","北京"],checkboxGroup4:[],checkboxGroup5:[],checkboxGroup6:[],checkboxGroup7:[],checkboxGroup8:[],checkboxGroupCompact:[],checkboxGroupCompact2:[]}},methods:{handleChange:function(n){console.log(this.v1,n)},handleGroupChange:function(n){console.log(n)}}}},272:function(n,e,o){e=n.exports=o(196)(void 0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},303:function(n,e,o){var c=o(272);"string"==typeof c&&(c=[[n.i,c,""]]),c.locals&&(n.exports=c.locals);o(197)("8c196a1a",c,!0)},323:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("Container",[o("PageHeader",{attrs:{title:"复选框 Checkbox"}}),n._v(" "),o("main",[o("div",[o("za-panel",[o("za-panel-header",[o("za-panel-title",[n._v("普通")])],1),n._v(" "),o("za-panel-body",[o("za-cell",[o("za-checkbox",{on:{change:n.handleChange},model:{value:n.v1,callback:function(e){n.v1=e},expression:"v1"}},[n._v("单独使用")])],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup,callback:function(e){n.checkboxGroup=e},expression:"checkboxGroup"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e,disabled:2===c}},[n._v(n._s(e))])})),n._v("\n            组合使用\n          ")],1)],1)],1),n._v(" "),o("za-panel",[o("za-panel-header",[o("za-panel-title",[n._v("按钮样式")])],1),n._v(" "),o("za-panel-body",[o("za-cell",[o("za-checkbox-group",{attrs:{type:"button"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup2,callback:function(e){n.checkboxGroup2=e},expression:"checkboxGroup2"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])})),n._v("\n            普通\n          ")],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{attrs:{type:"button"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup3,callback:function(e){n.checkboxGroup3=e},expression:"checkboxGroup3"}},n._l(n.cities,function(e){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])})),n._v("\n            指定默认值\n          ")],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{attrs:{type:"button"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup4,callback:function(e){n.checkboxGroup4=e},expression:"checkboxGroup4"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e,disabled:2===c}},[n._v(n._s(e))])})),n._v("\n            禁用指定项\n          ")],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{attrs:{type:"button",shape:"radius"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup5,callback:function(e){n.checkboxGroup5=e},expression:"checkboxGroup5"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])})),n._v("\n            圆角\n          ")],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{attrs:{type:"button",shape:"round"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroup6,callback:function(e){n.checkboxGroup6=e},expression:"checkboxGroup6"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])})),n._v("\n            椭圆角\n          ")],1),n._v(" "),o("za-cell",[o("za-checkbox-group",{attrs:{type:"button",compact:"",shape:"round"},on:{change:n.handleGroupChange},slot:"description",model:{value:n.checkboxGroupCompact,callback:function(e){n.checkboxGroupCompact=e},expression:"checkboxGroupCompact"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])})),n._v("\n            椭圆角compact\n          ")],1)],1)],1),n._v(" "),o("za-panel",[o("za-panel-header",[o("za-panel-title",[n._v("块级样式")])],1),n._v(" "),o("za-panel-body",{staticStyle:{padding:"10px"}},[o("za-checkbox-group",{attrs:{type:"button",compact:"",block:"",shape:"round"},on:{change:n.handleGroupChange},model:{value:n.checkboxGroupCompact2,callback:function(e){n.checkboxGroupCompact2=e},expression:"checkboxGroupCompact2"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e,disabled:2===c}},[n._v(n._s(e))])}))],1)],1),n._v(" "),o("za-panel",[o("za-panel-header",[o("za-panel-title",[n._v("列表样式")])],1),n._v(" "),o("za-panel-body",[o("za-checkbox-group",{attrs:{type:"cell"},on:{change:n.handleGroupChange},model:{value:n.checkboxGroup7,callback:function(e){n.checkboxGroup7=e},expression:"checkboxGroup7"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e,disabled:2===c}},[n._v(n._s(e))])}))],1)],1),n._v(" "),o("za-panel",[o("za-panel-header",[o("za-panel-title",[n._v("列表样式禁用状态")])],1),n._v(" "),o("za-panel-body",[o("za-checkbox-group",{attrs:{type:"cell",disabled:""},on:{change:n.handleGroupChange},model:{value:n.checkboxGroup8,callback:function(e){n.checkboxGroup8=e},expression:"checkboxGroup8"}},n._l(n.cities,function(e,c){return o("za-checkbox",{key:e,attrs:{label:e}},[n._v(n._s(e))])}))],1)],1)],1)]),n._v(" "),o("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=16.1da9d5e4e96361acbd3c.js.map