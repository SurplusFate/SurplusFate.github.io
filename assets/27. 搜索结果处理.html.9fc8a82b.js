import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,d as e,e as t,r as l}from"./app.fbf01f48.js";const c={},r=n("h1",{id:"_27-搜索结果处理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_27-搜索结果处理","aria-hidden":"true"},"#"),s(" 27. 搜索结果处理")],-1),u=n("p",null,"搜索的结果可以按照用户指定的方式去处理或展示。",-1),d=n("h2",{id:"_27-1-排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_27-1-排序","aria-hidden":"true"},"#"),s(" 27.1.排序")],-1),m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="_27-1-1-普通字段排序" tabindex="-1"><a class="header-anchor" href="#_27-1-1-普通字段排序" aria-hidden="true">#</a> 27.1.1.普通字段排序</h3><p>keyword、数值、日期类型排序的语法基本一致。</p><p><strong>语法</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /indexName/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;FIELD&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>  <span class="token comment">// 排序字段、排序方式ASC、DESC</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>排序条件是一个数组，也就是可以写多个排序条件。按照声明的顺序，当第一个条件相等时，再按照第二个条件排序，以此类推</p><p><strong>示例</strong>：</p><p>需求描述：酒店数据按照用户评价（score)降序排序，评价相同的按照价格(price)升序排序</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721195728306.png" alt="image-20210721195728306"></p><h3 id="_27-1-2-地理坐标排序" tabindex="-1"><a class="header-anchor" href="#_27-1-2-地理坐标排序" aria-hidden="true">#</a> 27.1.2.地理坐标排序</h3><p>地理坐标排序略有不同。</p><p><strong>语法说明</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /indexName/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_geo_distance&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;FIELD&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;纬度，经度&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文档中geo_point类型的字段名、目标坐标点</span>
          <span class="token property">&quot;order&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 排序方式</span>
          <span class="token property">&quot;unit&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;km&quot;</span> <span class="token comment">// 排序的距离单位</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个查询的含义是：</p><ul><li>指定一个坐标，作为目标点</li><li>计算每一个文档中，指定字段（必须是 geo_point 类型）的坐标 到目标点的距离是多少</li><li>根据距离排序</li></ul><p><strong>示例：</strong></p><p>需求描述：实现对酒店数据按照到你的位置坐标的距离升序排序</p>`,16),v={href:"https://lbs.amap.com/demo/jsapi-v2/example/map/click-to-get-lnglat/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>假设我的位置是：31.034661，121.612282，寻找我周围距离最近的酒店。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721200214690.png" alt="image-20210721200214690"></p><h2 id="_27-2-分页" tabindex="-1"><a class="header-anchor" href="#_27-2-分页" aria-hidden="true">#</a> 27.2.分页</h2><p>elasticsearch 默认情况下只返回 top10 的数据。而如果要查询更多数据就需要修改分页参数了。elasticsearch 中通过修改 from、size 参数来控制要返回的分页结果：</p><ul><li>from：从第几个文档开始</li><li>size：总共查询几个文档</li></ul><p>类似于 mysql 中的<code>limit ?, ?</code></p><h3 id="_27-2-1-基本的分页" tabindex="-1"><a class="header-anchor" href="#_27-2-1-基本的分页" aria-hidden="true">#</a> 27.2.1.基本的分页</h3><p>分页的基本语法如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 分页开始的位置，默认为0</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 期望获取的文档总数</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-2-2-深度分页问题" tabindex="-1"><a class="header-anchor" href="#_27-2-2-深度分页问题" aria-hidden="true">#</a> 27.2.2.深度分页问题</h3><p>现在，我要查询 990~1000 的数据，查询逻辑要这么写：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">990</span><span class="token punctuation">,</span> <span class="token comment">// 分页开始的位置，默认为0</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 期望获取的文档总数</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里是查询 990 开始的数据，也就是 第 990~第 1000 条 数据。</p><p>不过，elasticsearch 内部分页时，必须先查询 0~1000 条，然后截取其中的 990 ~ 1000 的这 10 条：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721200643029.png" alt="image-20210721200643029"></p><p>查询 TOP1000，如果 es 是单点模式，这并无太大影响。</p><p>但是 elasticsearch 将来一定是集群，例如我集群有 5 个节点，我要查询 TOP1000 的数据，并不是每个节点查询 200 条就可以了。</p><p>因为节点 A 的 TOP200，在另一个节点可能排到 10000 名以外了。</p><p>因此要想获取整个集群的 TOP1000，必须先查询出每个节点的 TOP1000，汇总结果后，重新排名，重新截取 TOP1000。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721201003229.png" alt="image-20210721201003229"></p><p>那如果我要查询 9900~10000 的数据呢？是不是要先查询 TOP10000 呢？那每个节点都要查询 10000 条？汇总到内存中？</p><p>当查询分页深度较大时，汇总数据过多，对内存和 CPU 会产生非常大的压力，因此 elasticsearch 会禁止 from+ size 超过 10000 的请求。</p>`,22),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/paginate-search-results.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<ul><li>search after：分页时需要排序，原理是从上一次的排序值开始，查询下一页数据。官方推荐使用的方式。</li><li>scroll：原理将排序后的文档 id 形成快照，保存在内存。官方已经不推荐使用。</li></ul><h3 id="_27-2-3-小结" tabindex="-1"><a class="header-anchor" href="#_27-2-3-小结" aria-hidden="true">#</a> 27.2.3.小结</h3><p>分页查询的常见实现方案以及优缺点：</p><ul><li><p><code>from + size</code>：</p><ul><li>优点：支持随机翻页</li><li>缺点：深度分页问题，默认查询上限（from + size）是 10000</li><li>场景：百度、京东、谷歌、淘宝这样的随机翻页搜索</li></ul></li><li><p><code>after search</code>：</p><ul><li>优点：没有查询上限（单次查询的 size 不超过 10000）</li><li>缺点：只能向后逐页查询，不支持随机翻页</li><li>场景：没有随机翻页需求的搜索，例如手机向下滚动翻页</li></ul></li><li><p><code>scroll</code>：</p><ul><li>优点：没有查询上限（单次查询的 size 不超过 10000）</li><li>缺点：会有额外内存消耗，并且搜索结果是非实时的</li><li>场景：海量数据的获取和迁移。从 ES7.1 开始不推荐，建议用 after search 方案。</li></ul></li></ul><h2 id="_27-3-高亮" tabindex="-1"><a class="header-anchor" href="#_27-3-高亮" aria-hidden="true">#</a> 27.3.高亮</h2><h3 id="_27-3-1-高亮原理" tabindex="-1"><a class="header-anchor" href="#_27-3-1-高亮原理" aria-hidden="true">#</a> 27.3.1.高亮原理</h3><p>什么是高亮显示呢？</p><p>我们在百度，京东搜索时，关键字会变成红色，比较醒目，这叫高亮显示：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721202705030.png" alt="image-20210721202705030"></p><p>高亮显示的实现分为两步：</p><ul><li>1）给文档中的所有关键字都添加一个标签，例如<code>&lt;em&gt;</code>标签</li><li>2）页面给<code>&lt;em&gt;</code>标签编写 CSS 样式</li></ul><h3 id="_27-3-2-实现高亮" tabindex="-1"><a class="header-anchor" href="#_27-3-2-实现高亮" aria-hidden="true">#</a> 27.3.2.实现高亮</h3><p><strong>高亮的语法</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;FIELD&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TEXT&quot;</span> <span class="token comment">// 查询条件，高亮一定要使用全文检索查询</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 指定要高亮的字段</span>
      <span class="token property">&quot;FIELD&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em&gt;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 用来标记高亮字段的前置标签</span>
        <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/em&gt;&quot;</span> <span class="token comment">// 用来标记高亮字段的后置标签</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ul><li>高亮是对关键字高亮，因此<strong>搜索条件必须带有关键字</strong>，而不能是范围这样的查询。</li><li>默认情况下，<strong>高亮的字段，必须与搜索指定的字段一致</strong>，否则无法高亮</li><li>如果要对非搜索字段高亮，则需要添加一个属性：required_field_match=false</li></ul><p><strong>示例</strong>：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721203349633.png" alt="image-20210721203349633"></p><h2 id="_27-4-总结" tabindex="-1"><a class="header-anchor" href="#_27-4-总结" aria-hidden="true">#</a> 27.4.总结</h2><p>查询的 DSL 是一个大的 JSON 对象，包含下列属性：</p><ul><li>query：查询条件</li><li>from 和 size：分页条件</li><li>sort：排序条件</li><li>highlight：高亮条件</li></ul><p>示例：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210721203657850.png" alt="image-20210721203657850"></p>`,23);function _(q,f){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,u,d,n("p",null,[s("elasticsearch 默认是根据相关度算分（_score）来排序，但是也支持自定义方式对搜索"),n("a",m,[s("结果排序"),e(a)]),s("。可以排序字段类型有：keyword 类型、数值类型、地理坐标类型、日期类型等。")]),k,n("p",null,[s("提示：获取你的位置的经纬度的方式："),n("a",v,[s("https://lbs.amap.com/demo/jsapi-v2/example/map/click-to-get-lnglat/"),e(a)])]),h,n("p",null,[s("针对深度分页，ES 提供了两种解决方案，"),n("a",g,[s("官方文档"),e(a)]),s("：")]),b])}const j=p(c,[["render",_],["__file","27. 搜索结果处理.html.vue"]]);export{j as default};
