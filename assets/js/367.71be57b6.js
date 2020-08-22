(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{570:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Youtube",{attrs:{id:"aKWE_ftmKyg",citation:"griffith"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("div",{staticClass:"try"},[s("p",[s("a",{attrs:{href:"https://www.db-fiddle.com/f/i8xmchy54L1CpE2NzzVfCF/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),s("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"the-limit-clause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-limit-clause","aria-hidden":"true"}},[this._v("#")]),this._v(" The LIMIT Clause")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Another way to limit the results returned from the database is use the "),s("code",[t._v("LIMIT")]),t._v(" clause. For example, if we only want 5 rows to be returned. The "),s("code",[t._v("LIMIT")]),t._v(" clause is followed by a number, which is the number of rows to be return OR in the case of the "),s("code",[t._v("UPDATE")]),t._v(" or "),s("code",[t._v("DELETE")]),t._v(" command the number of rows affected.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Getting the 5 most recent movies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Pagination can be accomplished by inserting a second number after the "),s("code",[t._v("LIMIT")]),t._v(" clause. This "),s("code",[t._v("offset")]),t._v(" will be used to tell the database to start the "),s("code",[t._v("row count")]),t._v(" a specified number of rows. For MySQL the syntax is "),s("code",[t._v("LIMIT offset, row count")]),t._v(". So, if we wanted to retrieve the third page of products it can be accomplished with the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Getting the 5 most recent movies after the 10th movie")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("When using the "),e("code",[this._v("LIMIT")]),this._v(" clause, it is important to use an "),e("code",[this._v("ORDER BY")]),this._v(" clause to make sure that the rows in the returned are in a specified order.")])])}],!1,null,null,null);e.default=n.exports}}]);