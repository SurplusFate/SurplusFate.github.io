const e=JSON.parse('{"key":"v-52855d9d","path":"/docs/Spring%20%E7%B3%BB%E5%88%97/SpringCloud/33.%20%E9%9B%86%E7%BE%A4.html","title":"33. 集群","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-11-09T00:00:00.000Z","order":33,"category":["SpringCloud"],"summary":"33. 集群 单机的 elasticsearch 做数据存储，必然面临两个问题：海量数据存储问题、单点故障问题。 海量数据存储问题：将索引库从逻辑上拆分为 N 个分片（shard），存储到多个节点; 单点故障问题：将分片数据在不同节点备份（replica ）; ES 集群相关概念: 集群（cluster）：一组拥有共同的 cluster name 的 节点。","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Spring%20%E7%B3%BB%E5%88%97/SpringCloud/33.%20%E9%9B%86%E7%BE%A4.html"}],["meta",{"property":"og:site_name","content":"空~"}],["meta",{"property":"og:title","content":"33. 集群"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-01T08:10:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-01T08:10:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"33.1.搭建 ES 集群","slug":"_33-1-搭建-es-集群","link":"#_33-1-搭建-es-集群","children":[]},{"level":2,"title":"33.2.集群脑裂问题","slug":"_33-2-集群脑裂问题","link":"#_33-2-集群脑裂问题","children":[{"level":3,"title":"33.2.1.集群职责划分","slug":"_33-2-1-集群职责划分","link":"#_33-2-1-集群职责划分","children":[]},{"level":3,"title":"33.2.2.脑裂问题","slug":"_33-2-2-脑裂问题","link":"#_33-2-2-脑裂问题","children":[]},{"level":3,"title":"33.2.3.小结","slug":"_33-2-3-小结","link":"#_33-2-3-小结","children":[]}]},{"level":2,"title":"33.3.集群分布式存储","slug":"_33-3-集群分布式存储","link":"#_33-3-集群分布式存储","children":[{"level":3,"title":"33.3.1.分片存储测试","slug":"_33-3-1-分片存储测试","link":"#_33-3-1-分片存储测试","children":[]},{"level":3,"title":"33.3.2.分片存储原理","slug":"_33-3-2-分片存储原理","link":"#_33-3-2-分片存储原理","children":[]}]},{"level":2,"title":"33.4.集群分布式查询","slug":"_33-4-集群分布式查询","link":"#_33-4-集群分布式查询","children":[]},{"level":2,"title":"33.5.集群故障转移","slug":"_33-5-集群故障转移","link":"#_33-5-集群故障转移","children":[]}],"git":{"createdTime":1669882246000,"updatedTime":1669882246000,"contributors":[{"name":"superX","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":5.6,"words":1679},"filePathRelative":"docs/Spring 系列/SpringCloud/33. 集群.md","localizedDate":"2022年11月9日"}');export{e as data};
