(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{386:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("With the introduction of "),s("a",{attrs:{href:"https://mtm6230.github.io/content/strings/#template-literals",target:"_blank",rel:"noopener noreferrer"}},[t._v("Template Literals"),s("OutboundLink")],1),t._v(", creating HTML has become much easier for novice developers, because Template Literals allow the developer to create HTML in JavaScript that looks and feels like writing in an HTML file.")]),t._v(" "),t._m(1),t._v(" "),s("Scrimba",{attrs:{id:"/c/cZWDEDAD"}}),t._v(" "),s("p",[t._v("Using template literals, it is possible to create an HTML template, complete with white space, tabs and carriage returns.")]),t._v(" "),s("p",[t._v("For example, if we wanted to create an HTML unordered list of animals with a title, we do so with a template literal.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("We can take this a step further by using placeholder in place of the text. Then using variables to recreate the HTML.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("While the above example works to create and insert new HTML, it would not be easy to maintain if additional animals are added to the list. This is where loops come in.")]),t._v(" "),s("p",[t._v("By using a loop to iterate over the array, it is possible to create the list item HTML without the need for additional HTML for each new animal.")]),t._v(" "),s("p",[t._v("In the example below, we are using "),s("a",{attrs:{href:"https://mtm6230.github.io/content/loops/#the-for-of-loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("the "),s("code",[t._v("for...of")]),t._v(" loop"),s("OutboundLink")],1),t._v(" to iterate over the array, and storing each list item to a new array, "),s("code",[t._v("items")]),t._v(". This new "),s("code",[t._v("items")]),t._v(" array is then inserted into our template literal using the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("join()")]),s("OutboundLink")],1),t._v(" method to convert array to a string.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("The method takes two parameters. The first is the position, which will consist of one of the four predefined positions (see below). The second is a string of HTML.")]),t._v(" "),s("p",[t._v("The four predefined positions are:")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"using-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-strings","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Strings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"creating-a-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-template","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Template")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("const")]),this._v(" list "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[this._v("`\n<h2>Animals</h2>\n<ul>\n  <li>cat</li>\n  <li>dog</li>\n  <li>mouse</li>\n</ul>`")])]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"creating-a-template-with-placeholders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-template-with-placeholders","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Template with Placeholders")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Animals'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" animals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouse'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n<h2>")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</h2>\n<ul>\n  <li>")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("animals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</li>\n  <li>")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("animals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</li>\n  <li>")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("animals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</li>\n</ul>`")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"inserting-templates-with-innerhtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inserting-templates-with-innerhtml","aria-hidden":"true"}},[this._v("#")]),this._v(" Inserting Templates with "),e("code",[this._v("innerHTML")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There are two common techniques to insert a template into the HTML. The first is to use the "),e("code",[this._v("innerHTML")]),this._v(" property and the second is to use the "),e("code",[this._v("insertAdjacentHTML()")]),this._v(" method.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("Both these techniques require a string and therefore will "),e("strong",[this._v("NOT")]),this._v(" work with the "),e("code",[this._v("createElement()")]),this._v(" method discussed in the next section.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("innerHTML")]),this._v(" property of any HTML element will contain all of the HTML that within the element.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"HTML Creation - The innerHTML Property",src:"//codepen.io/IMD/embed/JzKjqO/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/JzKjqO/"}},[this._v("HTML Creation - The innerHTML Property")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Like any other property, it is possible to change an element's "),e("code",[this._v("innerHTML")]),this._v(" by using an equals sign "),e("code",[this._v("=")]),this._v(" and followed by the string HTML.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("Change an element's "),e("code",[this._v("innerHTML")]),this._v(" will remove any existing HTML inside the element. To keep the existing HTML, you must include the element's "),e("code",[this._v("innerHTML")]),this._v(" after the equals sign.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"351",scrolling:"no",title:"HTML Creation - Using the innerHTML property",src:"//codepen.io/IMD/embed/YgWPyJ/?height=351&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/YgWPyJ/"}},[this._v("HTML Creation - Using the innerHTML property")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-a-loop-with-innerhtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-loop-with-innerhtml","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a Loop with "),e("code",[this._v("innerHTML")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"420",scrolling:"no",title:"HTML Creation - Template Literals",src:"//codepen.io/IMD/embed/drGYrw/?height=420&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/drGYrw/"}},[this._v("HTML Creation - Template Literals")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"inserting-templates-with-insertadjacenthtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inserting-templates-with-insertadjacenthtml","aria-hidden":"true"}},[this._v("#")]),this._v(" Inserting Templates with "),e("code",[this._v("insertAdjacentHTML()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Unlike the "),e("code",[this._v("innerHTML")]),this._v(" property, which replaces the all the HTML of an element, the "),e("code",[this._v("insertAdjacentHTML()")]),this._v(" method inserts a HTML string into an at a specified position.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("beforebegin")]),t._v(": Before the element")]),t._v(" "),s("li",[s("code",[t._v("afterbegin")]),t._v(": Inside the element, before its first child")]),t._v(" "),s("li",[s("code",[t._v("beforeend")]),t._v(": Inside the element, after its last child")]),t._v(" "),s("li",[s("code",[t._v("afterend")]),t._v(": After the element")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- beforebegin --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- afterbegin --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- beforeend --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- afterend --\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"360",scrolling:"no",title:"HTML Creation - Using the insertAdjacentHTML() Method",src:"//codepen.io/IMD/embed/bZedGq/?height=360&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/bZedGq/"}},[this._v("HTML Creation - Using the insertAdjacentHTML() Method")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])}],!1,null,null,null);e.default=n.exports}}]);