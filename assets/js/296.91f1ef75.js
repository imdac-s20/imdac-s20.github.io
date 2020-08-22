(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{499:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("div",{staticClass:"watch"},[r("p",[r("a",{attrs:{href:"https://www.linkedin.com/learning/php-essential-training-2/warnings-and-errors-2",target:"_blank",rel:"noopener noreferrer"}},[e._v('Watch "Warnings and errors" on LinkedIn Learning'),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("PHP generates different types of errors and warning depending on the problem. Knowing how to read these errors and warnings can make resolving the problem make easier. Of course, the first step it make sure we can see these errors and warnings.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("By default, PHP will not display errors or warnings. If we can see the errors and warning we can deal with them. So we will want to make sure that PHP is reporting all error to us in development.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),r("p",[e._v("Another way to catch PHP errors, especially syntax errors is by using a PHP Linter. A linter is a small program that makes sure our code is well formatted and free of errors.")]),e._v(" "),r("p",[e._v("Visual Studio Code uses the official PHP Linter, out of the box, to provide live code feedback. This means has you type Visual Studio Code will provide highlighting and error messages if a syntax error is made.")]),e._v(" "),r("p",[e._v("View the documentation to learn more about "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/php#_linting",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Linting with Visual Studio Code"),r("OutboundLink")],1)]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("Fatal runtime errors will kill the page completely. Common fatal runtime errors include running out of memory.")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("Parse errors or syntax errors occur during compile time, and therefore occur before anything is sent to the page.")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("Warnings are non-critical problems and typical will not kill the page. Warnings are an indication of poorly written code.")]),e._v(" "),e._m(19),e._v(" "),r("p",[e._v("Notices are not problems, but is PHP way of providing advice. Like warning, notices can be an indication of poorly written code.")]),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("Is a notice that a method or statement being used will be removed from PHP in future versions and updated or replaced.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"php-warning-and-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-warning-and-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Warning and Errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"display-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Display Errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There are two ways to do this: add a line of code to the top of our PHP file OR to set error reporting in a "),t("code",[this._v("php.ini")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("Displaying errors and warning during development is crucial for debugging our code. But, they should "),t("strong",[this._v("NOT")]),this._v(" be displayed in production.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"in-the-php-ini-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-the-php-ini-file","aria-hidden":"true"}},[this._v("#")]),this._v(" In the php.ini File")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The preferred way to set the error reporting for PHP is through the "),t("code",[this._v("php.ini")]),this._v(". The location of this file will vary depending on your server configuration. So, please refer to the [PHP Server] module for more information.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once you have the "),t("code",[this._v("php.ini")]),this._v(" file open in your text editor, search for the line containing "),t("code",[this._v("display_errors =")]),this._v(". Make sure the value is set to "),t("code",[this._v("On")]),this._v(" and that the line is not commented out.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("display_errors = On\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next, search for "),t("code",[this._v("error_reporting")]),this._v(". Make sure the value is set to "),t("code",[this._v("E_ALL")]),this._v(" and that the line is not commented out.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("error_reporting = E_ALL\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"in-the-php-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-the-php-code","aria-hidden":"true"}},[this._v("#")]),this._v(" In the PHP Code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If the "),t("code",[this._v("php.ini")]),this._v(" is not accessible, it is possible to set error reporting in the PHP code. Just at the following lines to the PHP file you want error reporting.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token php language-php"}},[r("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ini_set")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'display_errors'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'On'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("error_reporting")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("E_ALL")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"php-linter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-linter","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Linter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"type-of-php-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-of-php-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Type of PHP Errors")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("There are 5 categories of errors that PHP will report and display. They are "),r("strong",[e._v("Fatal Errors")]),e._v(", "),r("strong",[e._v("Parse Errors")]),e._v(", "),r("strong",[e._v("Warnings, Notices")]),e._v(", and "),r("strong",[e._v("Deprecated")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fatal-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fatal-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Fatal Errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"parse-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parse-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Parse Errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"warnings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warnings","aria-hidden":"true"}},[this._v("#")]),this._v(" Warnings")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notices","aria-hidden":"true"}},[this._v("#")]),this._v(" Notices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deprecated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deprecated","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecated")])}],!1,null,null,null);t.default=a.exports}}]);