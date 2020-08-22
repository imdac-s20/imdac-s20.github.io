(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{440:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"watch"},[e("p",[e("a",{attrs:{href:"https://laracasts.com/series/laravel-6-from-scratch/episodes/9",target:"_blank",rel:"noopener noreferrer"}},[t._v('Watch "Setup a Database Connection" on Laracasts'),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Laravel simplifies the connection to a database by including the connection out of the box. The configuration setting for the database can be viewed and updated in the "),e("a",{attrs:{href:"https://laravel.com/docs/6.x/configuration#environment-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("environment configuration"),e("OutboundLink")],1),t._v(" file.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),e("p",[t._v("Laravel's "),e("a",{attrs:{href:"https://laravel.com/docs/6.x/queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("query builder"),e("OutboundLink")],1),t._v(" is a convenient way to create and run database queries. Built off of the "),e("a",{attrs:{href:"https://www.php.net/manual/en/book.pdo.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PDO interface"),e("OutboundLink")],1),t._v(", query builder has all the power you would expect, but with an even simpler interface.")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Query builder uses the "),e("code",[t._v("DB")]),t._v(" "),e("a",{attrs:{href:"https://laravel.com/docs/6.x/facades",target:"_blank",rel:"noopener noreferrer"}},[t._v("facade"),e("OutboundLink")],1),t._v(" for many of its commands. Laravel does not make facades available by default, so we do need to add it to the page before we can use it. That is accomplished using the "),e("code",[t._v("use")]),t._v(" statement.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("To "),e("a",{attrs:{href:"https://laravel.com/docs/6.x/queries#retrieving-results",target:"_blank",rel:"noopener noreferrer"}},[t._v("retrieve results"),e("OutboundLink")],1),t._v(" using query builder, you may use the "),e("code",[t._v("table")]),t._v(" method. The "),e("code",[t._v("table")]),t._v(" method returns an instance of the specified table in which constraints can be applied. The "),e("code",[t._v("get")]),t._v(" method is use to retrieve the final results.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"query-builder-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-builder-basics","aria-hidden":"true"}},[this._v("#")]),this._v(" Query Builder Basics")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"connecting-to-a-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Connecting to a Database")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To update the database settings, open the "),s("code",[this._v(".env")]),this._v(" file in the root directory of your Laravel project, and then find and update the following lines with your specific database settings:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=laravel\nDB_USERNAME=root\nDB_PASSWORD=\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"query-builder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Query Builder")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"adding-the-db-facade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-db-facade","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding the DB facade")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"retrieving-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-results","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving results")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"retrieving-all-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-all-rows","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving all rows")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Show a list of all of the application's users.\n     *\n     * @return Response\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("get")]),this._v(" method returns a "),s("strong",[this._v("collection")]),this._v(" containing the results as objects. Each column of each row is a property of the object.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"retrieve-a-single-row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-a-single-row","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieve a single row")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To retrieve just a single row, the "),s("code",[this._v("first")]),this._v(" method may be used instead of the the "),s("code",[this._v("get")]),this._v(" method. The "),s("code",[this._v("first")]),this._v(" method will return a single row object.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'John'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To retrieve a single row by its "),s("code",[this._v("id")]),this._v(", use the "),s("code",[this._v("find")]),this._v(" method:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);