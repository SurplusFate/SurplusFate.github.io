const e=JSON.parse('{"key":"v-12e3073e","path":"/docs/Spring%20%E7%B3%BB%E5%88%97/SpringCloud/34.%20%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%BF%9D%E6%8A%A4.html","title":"34. 微服务保护","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-11-14T00:00:00.000Z","order":34,"category":["SpringCloud"],"summary":"34. 微服务保护 1.初识 Sentinel 1.1.雪崩问题及解决方案 1.1.1.雪崩问题 微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。 如图，如果服务提供者 I 发生了故障，当前的应用的部分业务因为依赖于服务 I，因此也会被阻塞。此时，其它不依赖于服务 I 的业务似乎不受影响。 但是，依赖服务 I 的业务请求被阻塞，用户不会","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Spring%20%E7%B3%BB%E5%88%97/SpringCloud/34.%20%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%BF%9D%E6%8A%A4.html"}],["meta",{"property":"og:site_name","content":"空~"}],["meta",{"property":"og:title","content":"34. 微服务保护"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-01T08:10:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-11-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-01T08:10:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.初识 Sentinel","slug":"_1-初识-sentinel","link":"#_1-初识-sentinel","children":[{"level":3,"title":"1.1.雪崩问题及解决方案","slug":"_1-1-雪崩问题及解决方案","link":"#_1-1-雪崩问题及解决方案","children":[]},{"level":3,"title":"1.2.服务保护技术对比","slug":"_1-2-服务保护技术对比","link":"#_1-2-服务保护技术对比","children":[]},{"level":3,"title":"1.3.Sentinel 介绍和安装","slug":"_1-3-sentinel-介绍和安装","link":"#_1-3-sentinel-介绍和安装","children":[]},{"level":3,"title":"1.4.微服务整合 Sentinel","slug":"_1-4-微服务整合-sentinel","link":"#_1-4-微服务整合-sentinel","children":[]}]},{"level":2,"title":"2.流量控制","slug":"_2-流量控制","link":"#_2-流量控制","children":[{"level":3,"title":"2.1.簇点链路","slug":"_2-1-簇点链路","link":"#_2-1-簇点链路","children":[]},{"level":3,"title":"2.1.快速入门","slug":"_2-1-快速入门","link":"#_2-1-快速入门","children":[]},{"level":3,"title":"2.2.流控模式","slug":"_2-2-流控模式","link":"#_2-2-流控模式","children":[]},{"level":3,"title":"2.3.流控效果","slug":"_2-3-流控效果","link":"#_2-3-流控效果","children":[]},{"level":3,"title":"2.4.热点参数限流","slug":"_2-4-热点参数限流","link":"#_2-4-热点参数限流","children":[]},{"level":3,"title":"2.4.3.案例","slug":"_2-4-3-案例","link":"#_2-4-3-案例","children":[]}]},{"level":2,"title":"3.隔离和降级","slug":"_3-隔离和降级","link":"#_3-隔离和降级","children":[{"level":3,"title":"3.1.FeignClient 整合 Sentinel","slug":"_3-1-feignclient-整合-sentinel","link":"#_3-1-feignclient-整合-sentinel","children":[]},{"level":3,"title":"3.2.线程隔离（舱壁模式）","slug":"_3-2-线程隔离-舱壁模式","link":"#_3-2-线程隔离-舱壁模式","children":[]},{"level":3,"title":"3.3.熔断降级","slug":"_3-3-熔断降级","link":"#_3-3-熔断降级","children":[]}]},{"level":2,"title":"4.授权规则","slug":"_4-授权规则","link":"#_4-授权规则","children":[{"level":3,"title":"4.1.授权规则","slug":"_4-1-授权规则","link":"#_4-1-授权规则","children":[]},{"level":3,"title":"4.2.自定义异常结果","slug":"_4-2-自定义异常结果","link":"#_4-2-自定义异常结果","children":[]}]},{"level":2,"title":"5.规则持久化","slug":"_5-规则持久化","link":"#_5-规则持久化","children":[{"level":3,"title":"5.1.规则管理模式","slug":"_5-1-规则管理模式","link":"#_5-1-规则管理模式","children":[]},{"level":3,"title":"5.2.实现 push 模式","slug":"_5-2-实现-push-模式","link":"#_5-2-实现-push-模式","children":[]}]}],"git":{"createdTime":1669882246000,"updatedTime":1669882246000,"contributors":[{"name":"superX","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":31.92,"words":9577},"filePathRelative":"docs/Spring 系列/SpringCloud/34. 微服务保护.md","localizedDate":"2022年11月14日"}');export{e as data};
