import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-lQDKQioq.js";const n={},t=e(`<h1 id="http范围请求" tabindex="-1"><a class="header-anchor" href="#http范围请求"><span>HTTP范围请求</span></a></h1><p>HTTP 的 Range 请求使客户端能够要求服务器仅向其回传 HTTP 消息的一部分。 范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具， 以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。</p><h2 id="检测服务器端是否支持范围请求" tabindex="-1"><a class="header-anchor" href="#检测服务器端是否支持范围请求"><span>检测服务器端是否支持范围请求</span></a></h2><p>如果 HTTP 响应中存在 Accept-Ranges 标头，并且其值不是“none”，那么该服务器支持范围请求。 你可以通过使用像 cURL 这样的工具发出一个 HEAD 请求来进行手动检查。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://i.imgur.com/z4d4kWk.jpg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">…</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Accept-Ranges</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bytes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Length</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 146515</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此响应中，Accept-Ranges: bytes 表示可以使用字节作为单位来定义范围。 在此处的 Content-Length 标头也很有用，因为它指示了要检索的图像的完整大小。</p><p>如果网站省略了 Accept-Ranges 标头，那么它们很可能不支持部分请求。有些网站会包含这个标头， 但明确将其值设为“none”，以表明它们不支持这一特性：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://www.youtube.com/watch?v=EwTZ2xpQwpA</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">…</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Accept-Ranges</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> none</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，下载管理器可能会禁用暂停按钮。</p><h2 id="从服务器端请求特定的范围" tabindex="-1"><a class="header-anchor" href="#从服务器端请求特定的范围"><span>从服务器端请求特定的范围</span></a></h2><p>如果服务器支持范围请求，那么只需在 HTTP 请求中包含 Range 标头，你可以指定希望服务器返回文档的哪一部分或哪些部分。</p><h3 id="单一范围" tabindex="-1"><a class="header-anchor" href="#单一范围"><span>单一范围</span></a></h3><p>我们能够向资源请求单一的数据范围。同样，我们可以通过使用 cURL 来测试请求。 这里的“-H”选项会向请求中添加一个标头，即 Range 标头，用于请求前 1024 个字节。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://i.imgur.com/z4d4kWk.jpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Range: bytes=0-1023&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>发出的请求像是这样：</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /z4d4kWk.jpg </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">HTTP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Host</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i.imgur.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Range</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bytes=0-1023</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器将会返回 206 Partial Content 状态；</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HTTP/1.1 206 Partial Content</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Range</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bytes 0-1023/146515</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Length</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1024</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">…</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">（二进制内容）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Content-Length 标头现在表示所请求范围的大小（而非图像的完整大小）。 Content-Range 响应标头则表示此部分消息在完整资源中的位置。</p><h3 id="多重范围" tabindex="-1"><a class="header-anchor" href="#多重范围"><span>多重范围</span></a></h3><p>Range 标头还允许在文档中支持一次性获取多重范围。这些范围使用逗号分隔。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://www.example.com</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Range: bytes=0-50, 100-150&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>服务器以 206 Partial Content 状态码以及 Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5 标头响应，表明随后的数据将采用多部分字节范围格式。 每个部分都携带自己的 Content-Type 和 Content-Range 字段， 而必须的 boundary 参数定义了用于分割每个消息体部分的边界字符串。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HTTP/1.1 206 Partial Content</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> multipart/byteranges; boundary=3d6b6a416f9b5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Length</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 282</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--3d6b6a416f9b5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Type</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text/html</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content-Range</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bytes 0-50/1270</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DOCTYPE</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;en-US&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Example Do</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--3d6b6a416f9b5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Content-Type: text/html</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Content-Range: bytes 100-150/1270</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">eta http-equiv=&quot;Content-type&quot; content=&quot;text/html; c</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--3d6b6a416f9b5--</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件式范围请求" tabindex="-1"><a class="header-anchor" href="#条件式范围请求"><span>条件式范围请求</span></a></h3><p>当重新开始请求资源的更多部分时，你需要保证存储资源在收到上一个片段后未被修改。</p><p>If-Range HTTP 请求标头使范围请求具有条件性：如果条件兑现，则会发起范围请求， 服务器将以包含适当内容主体的 206 Partial Content 响应进行回复。 如果条件不兑现，会被发送完整的资源回来，并带有 200 OK 状态。 该标头可与 Last-Modified 验证器或 ETag 一起使用，但不能同时使用。</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">If-Range</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Wed, 21 Oct 2015 07:28:00 GMT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="范围请求的响应" tabindex="-1"><a class="header-anchor" href="#范围请求的响应"><span>范围请求的响应</span></a></h2><p>与范围请求相关的有三种状态：</p><ul><li>范围请求成功后，服务器会发出 206 Partial Content 状态。</li><li>超出范围的范围请求将导致 416 Requested Range Not Satisfiable 状态， 这意味着没有任何范围值与资源的范围重叠。例如，每个范围的第一个字节位置可能大于资源的长度。</li><li>如果不支持范围请求，则返回 200 OK 状态，并传输完整的响应体。</li></ul><h2 id="与分块-transfer-encoding-的对比" tabindex="-1"><a class="header-anchor" href="#与分块-transfer-encoding-的对比"><span>与分块 Transfer-Encoding 的对比</span></a></h2><p>Transfer-Encoding 标头支持分块编码，这对于向客户端发送大量数据特别有用， 尤其是在完全处理请求之前无法知道响应的总大小的情况下。服务器直接向客户端发送数据， 无需确定缓冲响应或确切长度，从而减少延迟提高响应速度。范围请求和分块传输是兼容的， 可以独立使用或结合使用。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests" target="_blank" rel="noopener noreferrer">MDN Web Docs 社区</a></p>`,37),l=[t];function h(p,d){return a(),s("div",null,l)}const c=i(n,[["render",h],["__file","08.HTTP范围请求.html.vue"]]),g=JSON.parse('{"path":"/05.Web%E6%8A%80%E6%9C%AF/HTTP/03.HTTP%E8%BF%9B%E9%98%B6/08.HTTP%E8%8C%83%E5%9B%B4%E8%AF%B7%E6%B1%82.html","title":"HTTP范围请求","lang":"zh-CN","frontmatter":{"title":"HTTP范围请求","icon":"laptop-code","date":"2024-08-20T00:00:00.000Z","order":8,"category":["计算机网络"],"tag":["HTTP"],"description":"HTTP范围请求 HTTP 的 Range 请求使客户端能够要求服务器仅向其回传 HTTP 消息的一部分。 范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具， 以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。 检测服务器端是否支持范围请求 如果 HTTP 响应中存在 Accept-Ranges 标头，并且其值不是“no...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/05.Web%E6%8A%80%E6%9C%AF/HTTP/03.HTTP%E8%BF%9B%E9%98%B6/08.HTTP%E8%8C%83%E5%9B%B4%E8%AF%B7%E6%B1%82.html"}],["meta",{"property":"og:site_name","content":"Mr.Li"}],["meta",{"property":"og:title","content":"HTTP范围请求"}],["meta",{"property":"og:description","content":"HTTP范围请求 HTTP 的 Range 请求使客户端能够要求服务器仅向其回传 HTTP 消息的一部分。 范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具， 以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。 检测服务器端是否支持范围请求 如果 HTTP 响应中存在 Accept-Ranges 标头，并且其值不是“no..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T07:21:04.000Z"}],["meta",{"property":"article:author","content":"Mr.Li"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:published_time","content":"2024-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-27T07:21:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP范围请求\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-27T07:21:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Li\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"检测服务器端是否支持范围请求","slug":"检测服务器端是否支持范围请求","link":"#检测服务器端是否支持范围请求","children":[]},{"level":2,"title":"从服务器端请求特定的范围","slug":"从服务器端请求特定的范围","link":"#从服务器端请求特定的范围","children":[{"level":3,"title":"单一范围","slug":"单一范围","link":"#单一范围","children":[]},{"level":3,"title":"多重范围","slug":"多重范围","link":"#多重范围","children":[]},{"level":3,"title":"条件式范围请求","slug":"条件式范围请求","link":"#条件式范围请求","children":[]}]},{"level":2,"title":"范围请求的响应","slug":"范围请求的响应","link":"#范围请求的响应","children":[]},{"level":2,"title":"与分块 Transfer-Encoding 的对比","slug":"与分块-transfer-encoding-的对比","link":"#与分块-transfer-encoding-的对比","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1724743264000,"updatedTime":1724743264000,"contributors":[{"name":"lyw","email":"806555632@qq.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1189},"filePathRelative":"05.Web技术/HTTP/03.HTTP进阶/08.HTTP范围请求.md","localizedDate":"2024年8月20日","excerpt":"\\n<p>HTTP 的 Range 请求使客户端能够要求服务器仅向其回传 HTTP 消息的一部分。\\n范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具，\\n以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。</p>\\n<h2>检测服务器端是否支持范围请求</h2>\\n<p>如果 HTTP 响应中存在 Accept-Ranges 标头，并且其值不是“none”，那么该服务器支持范围请求。\\n你可以通过使用像 cURL 这样的工具发出一个 HEAD 请求来进行手动检查。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -I</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> http://i.imgur.com/z4d4kWk.jpg</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,g as data};
