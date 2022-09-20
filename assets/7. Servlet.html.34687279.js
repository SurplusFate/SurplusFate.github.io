const e=JSON.parse('{"key":"v-a23d3a2c","path":"/javaWeb/7.%20Servlet.html","title":"7. Servlet","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-08-27T00:00:00.000Z","order":7,"category":["JavaWeb"],"summary":"7. Servlet \u4EC0\u4E48\u662F Servlet 1. Servlet \u662F JavaEE \u89C4\u8303\u4E4B\u4E00\u3002\u89C4\u8303\u5C31\u662F\u63A5\u53E3 2. Servlet \u5C31 JavaWeb \u4E09\u5927\u7EC4\u4EF6\u4E4B\u4E00\u3002\u4E09\u5927\u7EC4\u4EF6\u5206\u522B\u662F\uFF1AServlet \u7A0B\u5E8F\u3001Filter \u8FC7\u6EE4\u5668\u3001Listener \u76D1\u542C\u5668\u3002 3. Servlet \u662F\u8FD0\u884C\u5728\u670D\u52A1\u5668\u4E0A\u7684\u4E00\u4E2A java \u5C0F\u7A0B\u5E8F\uFF0C\u5B83\u53EF\u4EE5\u63A5\u6536\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684\u8BF7\u6C42\uFF0C\u5E76\u54CD\u5E94\u6570\u636E","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/javaWeb/7.%20Servlet.html"}],["meta",{"property":"og:site_name","content":"\u7A7A~"}],["meta",{"property":"og:title","content":"7. Servlet"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-20T02:19:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-20T02:19:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u624B\u52A8\u5B9E\u73B0 Servlet \u7A0B\u5E8F","slug":"\u624B\u52A8\u5B9E\u73B0-servlet-\u7A0B\u5E8F","link":"#\u624B\u52A8\u5B9E\u73B0-servlet-\u7A0B\u5E8F","children":[]},{"level":2,"title":"\u6CE8\u89E3\u5B9E\u73B0 Servlet \u7A0B\u5E8F","slug":"\u6CE8\u89E3\u5B9E\u73B0-servlet-\u7A0B\u5E8F","link":"#\u6CE8\u89E3\u5B9E\u73B0-servlet-\u7A0B\u5E8F","children":[]},{"level":2,"title":"Servlet \u7684\u751F\u547D\u5468\u671F","slug":"servlet-\u7684\u751F\u547D\u5468\u671F","link":"#servlet-\u7684\u751F\u547D\u5468\u671F","children":[]},{"level":2,"title":"GET \u548C POST \u8BF7\u6C42\u7684\u5206\u53D1\u5904\u7406","slug":"get-\u548C-post-\u8BF7\u6C42\u7684\u5206\u53D1\u5904\u7406","link":"#get-\u548C-post-\u8BF7\u6C42\u7684\u5206\u53D1\u5904\u7406","children":[]},{"level":2,"title":"\u901A\u8FC7\u7EE7\u627F HttpServlet \u5B9E\u73B0 Servlet \u7A0B\u5E8F","slug":"\u901A\u8FC7\u7EE7\u627F-httpservlet-\u5B9E\u73B0-servlet-\u7A0B\u5E8F","link":"#\u901A\u8FC7\u7EE7\u627F-httpservlet-\u5B9E\u73B0-servlet-\u7A0B\u5E8F","children":[]},{"level":2,"title":"\u4F7F\u7528 IDEA \u521B\u5EFA Servlet \u7A0B\u5E8F","slug":"\u4F7F\u7528-idea-\u521B\u5EFA-servlet-\u7A0B\u5E8F","link":"#\u4F7F\u7528-idea-\u521B\u5EFA-servlet-\u7A0B\u5E8F","children":[]},{"level":2,"title":"Servlet \u7C7B\u7684\u7EE7\u627F\u4F53\u7CFB","slug":"servlet-\u7C7B\u7684\u7EE7\u627F\u4F53\u7CFB","link":"#servlet-\u7C7B\u7684\u7EE7\u627F\u4F53\u7CFB","children":[]},{"level":2,"title":"ServletConfig \u7C7B","slug":"servletconfig-\u7C7B","link":"#servletconfig-\u7C7B","children":[{"level":3,"title":"ServletConfig \u7C7B\u7684\u4E09\u5927\u4F5C\u7528","slug":"servletconfig-\u7C7B\u7684\u4E09\u5927\u4F5C\u7528","link":"#servletconfig-\u7C7B\u7684\u4E09\u5927\u4F5C\u7528","children":[]}]},{"level":2,"title":"ServletContext \u7C7B","slug":"servletcontext-\u7C7B","link":"#servletcontext-\u7C7B","children":[{"level":3,"title":"\u4EC0\u4E48\u662F ServletContext?","slug":"\u4EC0\u4E48\u662F-servletcontext","link":"#\u4EC0\u4E48\u662F-servletcontext","children":[]},{"level":3,"title":"ServletContext \u7C7B\u7684\u56DB\u4E2A\u4F5C\u7528","slug":"servletcontext-\u7C7B\u7684\u56DB\u4E2A\u4F5C\u7528","link":"#servletcontext-\u7C7B\u7684\u56DB\u4E2A\u4F5C\u7528","children":[]},{"level":3,"title":"HTTP \u534F\u8BAE","slug":"http-\u534F\u8BAE","link":"#http-\u534F\u8BAE","children":[]}]},{"level":2,"title":"HttpServletRequest \u7C7B","slug":"httpservletrequest-\u7C7B","link":"#httpservletrequest-\u7C7B","children":[{"level":3,"title":"HttpServletRequest \u7C7B\u7684\u5E38\u7528\u65B9\u6CD5","slug":"httpservletrequest-\u7C7B\u7684\u5E38\u7528\u65B9\u6CD5","link":"#httpservletrequest-\u7C7B\u7684\u5E38\u7528\u65B9\u6CD5","children":[]},{"level":3,"title":"\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570","slug":"\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570","link":"#\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570","children":[]},{"level":3,"title":"\u8BF7\u6C42\u7684\u8F6C\u53D1","slug":"\u8BF7\u6C42\u7684\u8F6C\u53D1","link":"#\u8BF7\u6C42\u7684\u8F6C\u53D1","children":[]}]},{"level":2,"title":"HttpServletResponse \u7C7B","slug":"httpservletresponse-\u7C7B","link":"#httpservletresponse-\u7C7B","children":[{"level":3,"title":"\u4E24\u4E2A\u8F93\u51FA\u6D41\u7684\u8BF4\u660E","slug":"\u4E24\u4E2A\u8F93\u51FA\u6D41\u7684\u8BF4\u660E","link":"#\u4E24\u4E2A\u8F93\u51FA\u6D41\u7684\u8BF4\u660E","children":[]},{"level":3,"title":"\u5982\u4F55\u5F80\u5BA2\u6237\u7AEF\u56DE\u4F20\u6570\u636E","slug":"\u5982\u4F55\u5F80\u5BA2\u6237\u7AEF\u56DE\u4F20\u6570\u636E","link":"#\u5982\u4F55\u5F80\u5BA2\u6237\u7AEF\u56DE\u4F20\u6570\u636E","children":[]},{"level":3,"title":"\u8BF7\u6C42\u91CD\u5B9A\u5411","slug":"\u8BF7\u6C42\u91CD\u5B9A\u5411","link":"#\u8BF7\u6C42\u91CD\u5B9A\u5411","children":[]}]}],"git":{"createdTime":1663640396000,"updatedTime":1663640396000,"contributors":[{"name":"\u7A7A~","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":17.32,"words":5196},"filePathRelative":"javaWeb/7. Servlet.md","localizedDate":"2022\u5E748\u670827\u65E5"}');export{e as data};