import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a,b as s,d as e,e as i,r as d}from"./app.c3f6cee4.js";const c={},o=i(`<h1 id="javaee-\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#javaee-\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> JavaEE \u73AF\u5883\u642D\u5EFA</h1><p>\u68C0\u67E5\u5F53\u524D\u73AF\u5883\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5\u5BF9\u5E94\u7684\u8F6F\u4EF6\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> \u8F6F\u4EF6\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982 java</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mysql</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-jdk" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-jdk" aria-hidden="true">#</a> \u5B89\u88C5 JDK</h2>`,8),p={href:"https://cloud.tencent.com/developer/article/1412643",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="\u7B2C\u4E00\u79CD\u65B9\u5F0F-yum-\u547D\u4EE4\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD\u65B9\u5F0F-yum-\u547D\u4EE4\u5B89\u88C5" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1Ayum \u547D\u4EE4\u5B89\u88C5</h3><p>\u68C0\u7D22\u5305\u542B java \u7684\u5217\u8868</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># yum list java*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6709\u7ED3\u679C\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># yum list java*</span>
\u5DF2\u52A0\u8F7D\u63D2\u4EF6\uFF1Afastestmirror, langpacks
Determining fastest mirrors
* base: mirrors.nwsuaf.edu.cn
* extras: mirrors.cn99.com
* updates: mirrors.cn99.com
\u53EF\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305
java-1.6.0-openjdk.x86_64                                                                   <span class="token number">1</span>:1.6.0.41-1.13.13.1.el7_3                                               base
java-1.6.0-openjdk-demo.x86_64                                                              <span class="token number">1</span>:1.6.0.41-1.13.13.1.el7_3                                               base
java-1.6.0-openjdk-devel.x86_64                                                             <span class="token number">1</span>:1.6.0.41-1.13.13.1.el7_3                                               base
java-1.6.0-openjdk-javadoc.x86_64                                                           <span class="token number">1</span>:1.6.0.41-1.13.13.1.el7_3                                               base
java-1.6.0-openjdk-src.x86_64                                                               <span class="token number">1</span>:1.6.0.41-1.13.13.1.el7_3                                               base
java-1.7.0-openjdk.x86_64                                                                   <span class="token number">1</span>:1.7.0.201-2.6.16.1.el7_6
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9009\u62E9\u9700\u8981\u7684 JDK \u7248\u672C yum \u547D\u4EE4\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> java-1.8.0-openjdk-devel.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_191&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_191-b12<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.191</span>-b12, mixed mode<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E8C\u79CD\u65B9\u5F0F-\u4E0B\u8F7D\u540E\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD\u65B9\u5F0F-\u4E0B\u8F7D\u540E\u5B89\u88C5" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4E0B\u8F7D\u540E\u5B89\u88C5</h3><p>\u53BB Oracle \u5B98\u7F51\u4E0B\u8F7D\u6240\u9700 JDK \u7248\u672C:</p>`,11),m={href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://cloud.tencent.com/product/cvm?from=10680",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 jdk1.8.0_191<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/java/jdk1.8.0_191
<span class="token punctuation">[</span>root@node-100 jdk1.8.0_191<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  COPYRIGHT  include  javafx-src.zip  jre  lib  LICENSE  <span class="token function">man</span>  README.html  release  src.zip  THIRDPARTYLICENSEREADME-JAVAFX.txt  THIRDPARTYLICENSEREADME.txt
<span class="token punctuation">[</span>root@node-100 jdk1.8.0_191<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B0\u589E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BBE\u7F6Ejdk\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_191  <span class="token comment">#jdk\u5B89\u88C5\u76EE\u5F55</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/lib:<span class="token variable">\${JRE_HOME}</span>/lib:<span class="token variable">$CLASSPATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_PATH</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${JRE_HOME}</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${JAVA_PATH}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u5176\u751F\u6548\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
<span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68C0\u67E5\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_191&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_191-b12<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.191</span>-b12, mixed mode<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@node-100 ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u73AF\u5883\u53D8\u91CF\u4E2D\u7684 <code>$PATH</code> \u4E00\u5B9A\u8981\u5E26\u4E0A, <code>:</code> \u8FFD\u52A0, \u5426\u5219\u4F1A\u8986\u76D6\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF, \u5BFC\u81F4\u5176\u4ED6\u7A0B\u5E8F\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C.</p></div><h2 id="\u5B89\u88C5-mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mysql" aria-hidden="true">#</a> \u5B89\u88C5 MySQL</h2>`,11),b={href:"https://javaforall.cn/134330.html",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="\u66F4\u65B0-yum" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-yum" aria-hidden="true">#</a> \u66F4\u65B0 yum</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum update <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4F1A\u66F4\u65B0\u597D\u591A\u5185\u5BB9\uFF0C\u9700\u8981\u7B49\u5F85\u4E00\u4F1A\u3002</p><h3 id="\u5B89\u88C5-wget-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-wget-\u5DE5\u5177" aria-hidden="true">#</a> \u5B89\u88C5 wget \u5DE5\u5177</h3><p>\u6211\u5B89\u88C5\u5230\u4E86 /export/install \u8FD9\u91CC\u53EF\u4EE5\u8FDB\u5165\u4F60\u4EEC\u6240\u60F3\u8981\u5B89\u88C5\u7684\u5730\u65B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /\u5148\u8FDB\u5165\u4F60\u60F3\u5B89\u88C5\u7684\u4F4D\u7F6E\uFF0C\u6B64\u540E\u5168\u90E8\u5728\u6B64\u6587\u4EF6\u5939\u8FDB\u884C\u64CD\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-wget-\u4E0B\u8F7D-mysql-yum-\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-wget-\u4E0B\u8F7D-mysql-yum-\u6E90" aria-hidden="true">#</a> \u4F7F\u7528 wget \u4E0B\u8F7D mysql yum \u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0-mysql-yum-\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-mysql-yum-\u6E90" aria-hidden="true">#</a> \u6DFB\u52A0 mysql yum \u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum localinstall mysql80-community-release-el7-3.noarch.rpm <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-yum-\u5DE5\u5177-yum-utils" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-yum-\u5DE5\u5177-yum-utils" aria-hidden="true">#</a> \u5B89\u88C5 yum \u5DE5\u5177 yum-utils</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u53EF\u7528\u7684-mysql" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u53EF\u7528\u7684-mysql" aria-hidden="true">#</a> \u67E5\u770B\u53EF\u7528\u7684 mysql</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;mysql.*-community.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112004800.png" alt="img"></p><p>\u8FD9\u91CC\u9ED8\u8BA4 mysql8.0</p><h3 id="\u67E5\u770B\u6240\u6709\u7684-mysql-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u7684-mysql-\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u7684 mysql \u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112003206.png" alt="img"></p><h3 id="\u4F7F\u7528\u6307\u5B9A\u7248\u672C-mysql" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6307\u5B9A\u7248\u672C-mysql" aria-hidden="true">#</a> \u4F7F\u7528\u6307\u5B9A\u7248\u672C MySQL</h3><p>\u5047\u5982\u6211\u60F3\u4F7F\u7528 MySQL5.7\uFF0C\u90A3\u4E48\u6211\u5C31\u9700\u8981\u5148\u5173\u95ED MySQL8.0 \u5173\u95ED MySQL8.0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token parameter variable">--disable</span> mysql80-community
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F00\u542F MySQL5.7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token parameter variable">--enable</span> mysql57-community
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5F53\u524D\u542F\u7528\u7684-mysql-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u542F\u7528\u7684-mysql-\u7248\u672C" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u542F\u7528\u7684 MySQL \u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112005529.png" alt="img"></p><h3 id="\u5B89\u88C5-mysql-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mysql-1" aria-hidden="true">#</a> \u5B89\u88C5 MySQL</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u671F\u95F4\u7B49\u5F85\u5F88\u957F\u65F6\u95F4\uFF0C\u7B49\u5F85\u5B89\u88C5\u5B8C\u6210\u3002\uFF0C\u5982\u679C\u4E0B\u8F7D\u901F\u5EA6\u53EA\u6709\u51E0\u5341 kb\uFF0C\u8BF7\u66F4\u6362\u7F51\u7EDC\uFF0C\u6216\u8005\u4F7F\u7528\u624B\u673A\u70ED\u70B9\u8FDB\u884C\u4E0B\u8F7D\u3002\u66F4\u6362\u70ED\u70B9\u540E\uFF0C\u518D\u6B21\u6267\u884C\u6B64\u547D\u4EE4\u5373\u53EF\u3002</p><h3 id="\u6709\u4E9B\u540C\u5B66\u4F1A\u51FA\u73B0\u6B64\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6709\u4E9B\u540C\u5B66\u4F1A\u51FA\u73B0\u6B64\u95EE\u9898" aria-hidden="true">#</a> \u6709\u4E9B\u540C\u5B66\u4F1A\u51FA\u73B0\u6B64\u95EE\u9898</h3><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112005511.png" alt="img"></p><p>\u6267\u884C\u6B64\u4EE3\u7801\u5757\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum module disable mysql
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8-mysql" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-mysql" aria-hidden="true">#</a> \u542F\u52A8 MySQL</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B-mysql-\u670D\u52A1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-mysql-\u670D\u52A1\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B MySQL \u670D\u52A1\u72B6\u6001</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysqld status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112006666.png" alt="img"></p><h3 id="\u521D\u59CB\u5316-mysql" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-mysql" aria-hidden="true">#</a> \u521D\u59CB\u5316 MySQL</h3><h4 id="\u67E5\u770B\u521D\u59CB\u5316\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u521D\u59CB\u5316\u5BC6\u7801" aria-hidden="true">#</a> \u67E5\u770B\u521D\u59CB\u5316\u5BC6\u7801</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528\u521D\u59CB\u5BC6\u7801\u8FDB\u884C\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u521D\u59CB\u5BC6\u7801\u8FDB\u884C\u767B\u5F55" aria-hidden="true">#</a> \u4F7F\u7528\u521D\u59CB\u5BC6\u7801\u8FDB\u884C\u767B\u5F55</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u521D\u59CB\u5316\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u5BC6\u7801" aria-hidden="true">#</a> \u521D\u59CB\u5316\u5BC6\u7801</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;daasan7ujm^YHN&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E-mysql-\u5BC6\u7801\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-mysql-\u5BC6\u7801\u7B56\u7565" aria-hidden="true">#</a> \u8BBE\u7F6E MySQL \u5BC6\u7801\u7B56\u7565</h3><h4 id="\u67E5\u8BE2-mysql-\u521D\u59CB\u7684\u5BC6\u7801\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2-mysql-\u521D\u59CB\u7684\u5BC6\u7801\u7B56\u7565" aria-hidden="true">#</a> \u67E5\u8BE2 MySQL \u521D\u59CB\u7684\u5BC6\u7801\u7B56\u7565</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> SHOW VARIABLES LIKE <span class="token string">&#39;validate_password%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112003133.png" alt="img"></p><h4 id="\u4FEE\u6539\u5BC6\u7801\u9A8C\u8BC1\u5F3A\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BC6\u7801\u9A8C\u8BC1\u5F3A\u5EA6" aria-hidden="true">#</a> \u4FEE\u6539\u5BC6\u7801\u9A8C\u8BC1\u5F3A\u5EA6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span>LOW<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539\u5BC6\u7801\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BC6\u7801\u957F\u5EA6" aria-hidden="true">#</a> \u4FEE\u6539\u5BC6\u7801\u957F\u5EA6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u7B80\u5355\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7B80\u5355\u5BC6\u7801" aria-hidden="true">#</a> \u8BBE\u7F6E\u7B80\u5355\u5BC6\u7801</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5BC6\u7801\u957F\u5EA6\u6700\u4F4E\u4E3A 4 \u4F4D\uFF0C\u8BBE\u7F6E\u7684\u5BC6\u7801\u957F\u5EA6\u5C0F\u4E8E 4 \u65F6\uFF0C\u9ED8\u8BA4\u6539\u6210 4.</p></div><h3 id="\u8FDC\u7A0B\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8FDE\u63A5" aria-hidden="true">#</a> \u8FDC\u7A0B\u8FDE\u63A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u8FD9\u91CC\u7684\u5BC6\u7801\u65F6\u4F60\u81EA\u5DF1\u7684\u8BBE\u7F6E\u7684\u5BC6\u7801.</strong></p><h3 id="\u5237\u65B0\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0\u6743\u9650" aria-hidden="true">#</a> \u5237\u65B0\u6743\u9650</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> \u5F00\u673A\u542F\u52A8</h3><p>\u4E0D\u5728 sql \u91CC\u9762\u914D\u7F6E\uFF0C\u5728 Linux \u547D\u4EE4\u884C\u6267\u884C\u3002\uFF01\uFF01\uFF01\u4E0D\u662F\u5728 sql \u91CC\u9762</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL \u7684\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u4F4D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9632\u706B\u5899" aria-hidden="true">#</a> \u914D\u7F6E\u9632\u706B\u5899</h3><h4 id="\u8BBE\u7F6E-3306-\u7AEF\u53E3\u5F00\u653E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-3306-\u7AEF\u53E3\u5F00\u653E" aria-hidden="true">#</a> \u8BBE\u7F6E 3306 \u7AEF\u53E3\u5F00\u653E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u770B\u5230 success \u8868\u793A\u6DFB\u52A0\u6210\u529F\u3002</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112003991.png" alt="img"></p><h4 id="\u91CD\u542F\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F\u9632\u706B\u5899" aria-hidden="true">#</a> \u91CD\u542F\u9632\u706B\u5899</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u770B\u5230 success \u8868\u793A\u6DFB\u52A0\u6210\u529F\u3002</p><h4 id="\u9A8C\u8BC1-3306-\u662F\u5426\u5F00\u653E\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1-3306-\u662F\u5426\u5F00\u653E\u6210\u529F" aria-hidden="true">#</a> \u9A8C\u8BC1 3306 \u662F\u5426\u5F00\u653E\u6210\u529F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u94FE\u63A5" aria-hidden="true">#</a> \u6D4B\u8BD5\u94FE\u63A5</h3><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210112009088.png" alt="img"></p><h2 id="\u5B89\u88C5-tomcat" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-tomcat" aria-hidden="true">#</a> \u5B89\u88C5 TOMCAT</h2><p>\u672C\u5730\u5B89\u88C5</p><blockquote><ol><li>\u4E0B\u8F7D, \u4E0A\u4F20, \u89E3\u538B</li><li>\u8FDB\u5165\u89E3\u538B\u76EE\u5F55 /bin, \u542F\u52A8 tomcat ./startup.sh</li><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li><li>source /etc/profile \u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6</li><li>\u5F00\u653E\u7AEF\u53E3 8080</li><li>\u6D4B\u8BD5</li></ol></blockquote><p>\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CATALINA_HOME</span><span class="token operator">=</span>/usr/soft/tomcat9
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$CATALINA_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u73AF\u5883\u53D8\u91CF\u4E2D\u7684 <code>$PATH</code> \u4E00\u5B9A\u8981\u5E26\u4E0A, <code>:</code> \u8FFD\u52A0, \u5426\u5219\u4F1A\u8986\u76D6\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF, \u5BFC\u81F4\u5176\u4ED6\u7A0B\u5E8F\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C.</p></div>`,86);function k(y,f){const n=d("ExternalLinkIcon");return r(),t("div",null,[o,a("p",null,[s("\u539F\u6587: "),a("a",p,[s("Linux CentOS 7 \u5B89\u88C5 JDK \u8BE6\u7EC6\u6B65\u9AA4 - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A - \u817E\u8BAF\u4E91 (tencent.com)"),e(n)])]),u,a("p",null,[a("a",m,[s("https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"),e(n)])]),a("p",null,[s("\u4E0A\u4F20\u81F3\u6240\u5728"),a("a",v,[s("\u670D\u52A1\u5668"),e(n)]),s("\uFF0C\u8FDB\u884C\u89E3\u538B\u540E")]),h,a("p",null,[s("\u539F\u6587: [Centos7 \u5B89\u88C5 Mysql5.7 \u6700\u5168\u6559\u7A0B "),a("a",b,[s("\u901A\u4FD7\u6613\u61C2] - \u5168\u6808\u7A0B\u5E8F\u5458\u5FC5\u770B (javaforall.cn)"),e(n)])]),g])}const q=l(c,[["render",k],["__file","6. JavaEE\u73AF\u5883\u642D\u5EFA.html.vue"]]);export{q as default};
