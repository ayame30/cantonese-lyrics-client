(this["webpackJsonpcantonese-lyrics-client"]=this["webpackJsonpcantonese-lyrics-client"]||[]).push([[0],{15:function(e,t,n){e.exports={syllable:"Word_syllable__2Nldw",word:"Word_word__3tnqe"}},19:function(e,t,n){e.exports={suggestions:"SuggestionPopup_suggestions__2_x13"}},25:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),c=n.n(r),s=n(18),o=n.n(s),l=(n(25),n(5)),a=(n(26),n(7)),u=n.n(a),d=n(15),f=n.n(d),p=n(9),h=(n(16),c.a.createContext()),j=function(e){var t=e.children,n=e.store;return Object(i.jsx)(h.Provider,{value:n,children:t})},m=function(){return c.a.useContext(h)},x=n(4),b=n.n(x),g=n(3),O=Object(p.createSelectable)(Object(g.a)((function(e){var t=e.selectableRef,n=(e.isSelected,e.isSelecting),r=e.wordData,c=m().selectionStore,s=b.a.find(c.selections,{id:r.id});return Object(i.jsxs)("div",{className:"inline-block ".concat(!r.syllable&&"not-selectable"),ref:t,children:[r.syllable&&Object(i.jsx)("small",{className:f.a.syllable,children:r.syllable}),Object(i.jsx)("div",{className:f.a.word,style:{backgroundColor:s||n?"lightblue":"transparent"},children:r.word})]})}))),v=n(6),S=n.n(v),y=n(19),w=n.n(y);var _=Object(g.a)((function(e){var t=e.onClose,n=e.nextWord,c=e.prevWord,s=m(),o=s.selectionStore,a=s.lyricsStore,u=Object(r.useState)([]),d=Object(l.a)(u,2),f=d[0],p=d[1];Object(r.useEffect)((function(){if(o.selections.length){var e=o.selections.map((function(e){return e.similiarTone})).join(","),t=Object.values(a.data.words).filter((function(t){return t.similiarTone===e})).map((function(e){return e.words}));p(t)}}),[o.selections]),Object(r.useEffect)((function(){if(o.prefixSelection){var e=a.data.characters[o.prefixSelection.word];if(e){var t=[e.similiarTone,n.similiarTone].join(",");console.log(e.words);var i=e.words.filter((function(e){return 0===e.words.indexOf(o.prefixSelection.word)})).filter((function(e){return e.similiarTone===t})).map((function(e){return e.words}));p(i)}else p([])}}),[o.prefixSelection]),Object(r.useEffect)((function(){if(o.postfixSelection){var e=a.data.characters[o.postfixSelection.word];if(e){var t=[c.similiarTone,e.similiarTone].join(",");console.log(e.words);var n=e.words.filter((function(e){return e.words.indexOf(o.postfixSelection.word)===e.words.length-1})).filter((function(e){return e.similiarTone===t})).map((function(e){return e.words}));p(n)}else p([])}}),[o.postfixSelection]);var h=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),Object(r.useEffect)((function(){return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)};function e(e){n.current&&t.current&&!n.current.contains(e.target)&&t.current(e)}}),[]),n}((function(e){t()}));return Object(i.jsx)("div",{ref:h,className:w.a.suggestions,children:(f||[]).map((function(e){return Object(i.jsx)("button",{style:{padding:"1px 3px"},children:Object(i.jsx)("small",{children:e})})}))})})),R=Object(g.a)((function(e){var t=e.wordData,n=e.nextWord,c=e.prevWord,s=m(),o=s.selectionStore,a=s.lyricsStore,u=Object(r.useState)(!1),d=Object(l.a)(u,2),f=d[0],p=d[1],h=o.selections.length&&b.a.get(o.selections,"0.id")===t.id,j=o.prefixSelection&&o.prefixSelection.id===t.id,x=o.postfixSelection&&o.postfixSelection.id===t.id;Object(r.useEffect)((function(){p(!!(h||j||x))}),[h,j,x]);return Object(i.jsxs)("div",{className:S.a.container,children:[!1,Object(i.jsx)("div",{style:{height:10}}),Object(i.jsxs)("div",{className:S.a.inputContainer,children:[Object(i.jsx)("input",{type:"text",value:t.replacement,size:"1",className:S.a.input,onChange:function(e){return a.updateReplacement(t,e.target.value)}}),!!t.replacement&&Object(i.jsx)("button",{type:"button",className:S.a.btnPrefixSuggestion,onClick:function(){return o.selectPostfix(t)}}),!!t.replacement&&Object(i.jsx)("button",{type:"button",className:S.a.btnPostfixSuggestion,onClick:function(){return o.selectPrefix(t)}})]}),f&&Object(i.jsx)(_,{onClose:function(){p(!1),o.removeSelections()},nextWord:n,prevWord:c})]})})),k=n(2),C=Object(g.a)((function(e){var t=e.line,n=m().selectionStore;return Object(i.jsx)("div",{className:u.a.line,children:t.children.map((function(e,t,r){return Object(i.jsxs)("div",{className:u.a.line,children:[Object(i.jsxs)("div",{className:u.a.line,children:[Object(i.jsx)(p.SelectableGroup,{resetOnStart:!0,onSelectionFinish:function(e){console.log(e),n.setSelections(e.map((function(e){return Object(k.o)(e.props.wordData)})).sort((function(e,t){return e.index-t.index})))},globalMouse:!1,allowClickWithoutSelected:!0,children:Object(i.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%",zIndex:2},className:"inline-block",children:e.children.map((function(e){return Object(i.jsx)("div",{className:"inline-block",children:Object(i.jsx)(O,{wordData:e})},"word-".concat(e.id))}))})}),e.children.map((function(e,t,n){var r=t>0?n[t+1]:void 0,c=t<n.length-1?n[t-1]:void 0;return Object(i.jsxs)("div",{className:"inline-block",children:[Object(i.jsx)("div",{style:{visibility:"hidden"},children:Object(i.jsx)(O,{wordData:e})}),Object(i.jsx)(R,{wordData:e,nextWord:r,prevWord:c})]},"word-".concat(e.id))}))]}),r.length-1>t&&Object(i.jsx)("div",{className:u.a.separator})]},"sen-".concat(t))}))})}));var N=Object(g.a)((function(){var e=m().lyricsStore,t=Object(r.useState)("original"),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){fetch("https://demo-328sd82.s3-ap-southeast-1.amazonaws.com/data.json").then((function(e){return e.json()})).then((function(t){e.setData(t)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{style:{flex:1},children:Object.entries({original:"\u539f\u8a5e",import:"\u532f\u5165",export:"\u532f\u51fa",usual:"\u5e38\u7528"}).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(i.jsx)("button",{type:"button",className:c===n?"active":null,onClick:function(){return s(c===n?null:n)},children:r},n)}))}),Object(i.jsx)("a",{rel:"noreferrer",href:"https://forms.gle/eYZtTGMCYn15mtF56",target:"_blank",children:"\uff1f"})]}),Object(i.jsxs)("div",{style:{padding:"10px 20px"},children:[null===c&&Object(i.jsx)("div",{style:{height:210}}),"original"===c&&Object(i.jsx)("textarea",{style:{width:"100%",height:200},value:e.original,onChange:function(t){return e.setOriginal(t.target.value)}}),"import"===c&&Object(i.jsx)("textarea",{style:{width:"100%",height:200},value:e.replacement,onChange:function(t){return e.setReplacement(t.target.value)}}),"export"===c&&Object(i.jsx)("textarea",{style:{width:"100%",height:200},readOnly:!0,value:e.exportReplacement}),"usual"===c&&Object(i.jsx)("textarea",{style:{width:"100%",height:200},placeholder:"\u8acb\u7528\u534a\u5f62\u9017\u865f\u5206\u9694",value:e.usualWords.join(","),onChange:function(t){return e.setUsualWords(t.target.value)}})]}),Object(i.jsx)("div",{style:{padding:"20px"},children:e.transformed.map((function(e,t){return Object(i.jsx)(C,{line:e},"line-".concat(t))}))})]})})),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))},T=n(10),P=n(11),I="\u82e5\u9019\u4e00\u675f\u540a\u71c8\u50be\u7009\u4e0b\u4f86 \u6216\u8005\u6211 \u5df2\u4e0d\u6703\u5b58\u5728\n\u5373\u4f7f\u4f60\u4e0d\u611b \u4ea6\u4e0d\u9700\u8981\u5206\u958b\n\n\u82e5\u9019\u4e00\u523b\u6211\u7adf\u56b4\u91cd\u75f4\u5446 \u6839\u672c\u4e0d\u9700\u8981\u88ab\u611b\n\u6c38\u9060\u5728\u5e8a\u4e0a\u767c\u5922 \u9918\u751f\u90fd\u4e0d\u6703\u518d\u60b2\u54c0\n\n\u4eba\u7e3d\u9700\u8981\u52c7\u6562\u751f\u5b58 \u6211\u9084\u662f\u91cd\u65b0\u8a31\u9858\n\u4f8b\u5982\u5b78\u6703 \u627f\u53d7\u5931\u6200\n\u660e\u5e74\u4eca\u65e5 \u5225\u8981\u518d\u5931\u7720 \u5e8a\u8925\u90fd\u6539\u8b8a \u5982\u679c\u6709\u5e78\u6703\u9762\n\u6216\u5728\u540c\u4f34\u65b0\u5a5a\u7684\u76db\u5bb4 \u60f6\u60d1\u5730\u7b49\u5f85\u4f60\u51fa\u73fe\n\u660e\u5e74\u4eca\u65e5 \u672a\u898b\u4f60\u4e00\u5e74 \u8ab0\u6368\u5f97\u6539\u8b8a \u96e2\u958b\u4f60\u516d\u5341\u5e74\n\u4f46\u9858\u80fd\u8a8d\u5f97\u51fa\u4f60\u7684\u5b50\u5973 \u81e8\u5225\u4ea6\u807d\u5f97\u5230\u4f60\u8b1b\u518d\u898b\n\n\u4eba\u7e3d\u9700\u8981\u52c7\u6562\u751f\u5b58 \u6211\u9084\u662f\u91cd\u65b0\u8a31\u9858\n\u4f8b\u5982\u5b78\u6703 \u627f\u53d7\u5931\u6200\n\u660e\u5e74\u4eca\u65e5 \u5225\u8981\u518d\u5931\u7720 \u5e8a\u8925\u90fd\u6539\u8b8a \u5982\u679c\u6709\u5e78\u6703\u9762\n\u6216\u5728\u540c\u4f34\u65b0\u5a5a\u7684\u76db\u5bb4 \u60f6\u60d1\u5730\u7b49\u5f85\u4f60\u51fa\u73fe\n\u660e\u5e74\u4eca\u65e5 \u672a\u898b\u4f60\u4e00\u5e74 \u8ab0\u6368\u5f97\u6539\u8b8a \u96e2\u958b\u4f60\u516d\u5341\u5e74\n\u4f46\u9858\u80fd\u8a8d\u5f97\u51fa\u4f60\u7684\u5b50\u5973 \u81e8\u5225\u4ea6\u807d\u5f97\u5230\u4f60\u8b1b\u518d\u898b\n\n\u5728\u6709\u751f\u7684\u77ac\u9593\u80fd\u9047\u5230\u4f60 \u7adf\u82b1\u5149\u6240\u6709\u904b\u6c23\n\u5230\u9019\u65e5\u624d\u767c\u73fe \u66fe\u547c\u5438\u904e\u7a7a\u6c23",D=function(){function e(){Object(T.a)(this,e),this.original="",this.transformed=[],this.replacement="",this.transformedReplacement=[],this.data={characters:{},words:{}},this.usualWords=["\u4ecd","\u5e38","\u9084","\u800c","\u5982","\u7136","\u6642","\u548c","\u624d","\u6216","\u4ea6","\u82e5","\u8457","\u672a","\u88ab","\u5728","\u53ca","\u4fbf","\u5c31","\u53c8","\u5427","\u8207","\u4e5f","\u518d","\u9019","\u90a3","\u6703","\u8981","\u5df2","\u4e86","\u7adf","\u7576","\u4e0d","\u53ef","\u53ea","\u56e0","\u5148","\u8acb","\u7684","\u55ce","\u9019"],Object(k.m)(this,{original:k.n,replacement:k.n,transformed:k.n,transformedReplacement:k.n,usualWords:k.n,data:k.n,setUsualWords:k.f,setData:k.f,exportReplacement:k.g,updateReplacement:k.f,setOriginal:k.f,setReplacement:k.f}),this.setOriginal(I)}return Object(P.a)(e,[{key:"setData",value:function(e){this.data=e,this.setOriginal(I)}},{key:"setOriginal",value:function(e){var t=this;this.original=e;var n=e.split("\n");this.transformed=n.map((function(e,n){return{type:"line",index:n,children:e.split(" ").map((function(e,i){return{type:"sentence",index:i,children:e.split("").reduce((function(e,r,c,s){if(/[a-zA-Z0-9]/g.test(r)&&c&&/[a-zA-Z0-9]/g.test(s[c-1]))return e[e.length-1].word+=r,e;var o=t.data.characters[r];return e.push({id:[n,i,c].join("-"),type:"word",index:c,syllable:o&&o.syllable+o.tone9,similiarTone:o&&o.similiarTone,sentenceIndex:i,lineIndex:n,word:r,replacement:t.transformedReplacement.length?b.a.get(t.transformedReplacement,"".concat(n,".children.").concat(i,".children.").concat(c,".word"),""):"",replacementSyllable:t.transformedReplacement.length?b.a.get(t.transformedReplacement,"".concat(n,".children.").concat(i,".children.").concat(c,".syllable"),""):"",replacementsimiliarTone:t.transformedReplacement.length?b.a.get(t.transformedReplacement,"".concat(n,".children.").concat(i,".children.").concat(c,".similiarTone"),""):""}),e}),[])}}))}}))}},{key:"setUsualWords",value:function(e){this.usualWords=e.split(",")}},{key:"setReplacement",value:function(e){var t=this;this.replacement=e;var n=e.split("\n");this.transformedReplacement=n.map((function(e,n){return{type:"line",index:n,children:e.split(" ").map((function(e,i){return{type:"sentence",index:i,children:e.split("").reduce((function(e,r,c,s){if(/[a-zA-Z0-9]/g.test(r)&&c&&/[a-zA-Z0-9]/g.test(s[c-1]))return e[e.length-1].word+=r,e;var o=t.data.characters[r];return e.push({id:[n,i,c].join("-"),type:"word",sentenceIndex:i,lineIndex:n,index:c,syllable:o&&o.syllable+o.tone9,similiarTone:o&&o.similiarTone,word:r}),e}),[])}}))}})),this.setOriginal(this.original)}},{key:"updateReplacement",value:function(e,t){this.transformed[e.lineIndex].children[e.sentenceIndex].children[e.index].replacement=t}},{key:"exportReplacement",get:function(){return this.transformed.map((function(e){return e.children.map((function(e){return e.children.map((function(e){return e.replacement})).join("")})).join(" ").trim()})).join("\n").trim()}}]),e}(),E=function(){function e(){Object(T.a)(this,e),this.selections=[],this.prefixSelection=null,this.postfixSelection=null,Object(k.m)(this,{selections:k.n,prefixSelection:k.n,postfixSelection:k.n,setSelections:k.f,removeSelections:k.f,selectPrefix:k.f,selectPostfix:k.f})}return Object(P.a)(e,[{key:"selectPrefix",value:function(e){this.selections=[],this.prefixSelection=e,this.postfixSelection=null}},{key:"selectPostfix",value:function(e){this.selections=[],this.postfixSelection=e,this.prefixSelection=null}},{key:"setSelections",value:function(e){this.selections=e,this.prefixSelection=null,this.postfixSelection=null}},{key:"removeSelections",value:function(){this.selections=[],this.prefixSelection=null,this.postfixSelection=null}}]),e}(),z=new D,F=new E;o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{store:{lyricsStore:z,selectionStore:F},children:Object(i.jsx)(N,{})})}),document.getElementById("root")),W()},6:function(e,t,n){e.exports={selector:"ReplacementInput_selector__28D1V",input:"ReplacementInput_input__1qHEK",inputContainer:"ReplacementInput_inputContainer__1-hmn",btnPostfixSuggestion:"ReplacementInput_btnPostfixSuggestion__2ebnr",btnPrefixSuggestion:"ReplacementInput_btnPrefixSuggestion__2UHnu"}},7:function(e,t,n){e.exports={line:"Line_line__1VpsB",separator:"Line_separator__1UN_4"}}},[[38,1,2]]]);
//# sourceMappingURL=main.ff565701.chunk.js.map