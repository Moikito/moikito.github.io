(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{c109:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-5"},[a("h1",[e._v("Formularios")]),a("form",[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-form-input",{attrs:{type:"text",state:e.comprobar},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e.comprobar?e._e():a("small",[e._v("Mínimo 3 carácteres")])],1),a("b-col",{attrs:{md:"3"}},[a("b-form-select",{attrs:{options:e.animales},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),a("p",[e._v("Selección: "+e._s(e.select)+" ")])],1),a("b-col",{attrs:{md:"3"}},[a("b-form-radio-group",{attrs:{options:e.animalesRadio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}}),a("p",[e._v(" "+e._s(e.radio)+" ")])],1),a("b-col",{attrs:{md:"3"}},[a("b-form-checkbox-group",{attrs:{options:e.animalesRadio},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),a("p",[e._v("Multiple: "+e._s(e.checkbox)+" ")])],1)],1)],1),a("br"),a("p",[e._v("Texto: "+e._s(e.text)+" ")])])},l=[],c={name:"Form",data:function(){return{text:"",checkbox:[],radio:null,select:null,animales:[{value:null,text:"Seleccione un animal"},{value:"perro",text:"Guau guau"},{value:"gato",text:"Miau"},{value:"pato",text:"Cuack"}],animalesRadio:[{value:"perro",text:"Guau guau"},{value:"gato",text:"Miau"},{value:"pato",text:"Cuack"},{value:"gallo",text:"Kikiriki"}]}},computed:{comprobar:function(){return this.text.length>2}}},r=c,u=a("2877"),n=Object(u["a"])(r,o,l,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=form.7f42f2bd.js.map