---
title: A Clash DNS index setting using redir-host
date: "2022-3-19"
description: "记录一下一个可以工作基于redir-host的Clash DNS setting"
---

最近Clash for Windows启动了一个傻瓜的TUN模式选项，只能用fake-ip模式，根据官方的说法，fake-ip因为会直接将假的DNS解析结果返回客户端，相对redir-host可能会有更好的性能（When a client initiates a DNS request, Clash will return a spurious IP directly to the client. At the same time, clash send the domain names that need to be resolved to each upstream DNS server. Finally, the first result with the fastest return is correlated with a fake IP. ）
但可能也是因为它的实现原理，触发了某些客户端（例如qtorrent）的安全机制，导致其正常工作。

我并不care fake-ip提供的那一点性能加成，稳定更重要，参考文档，还是配置出了一套基于redir-host的Clash Mixin：

```yaml
mixin:
  dns:
    enable: true
    enhanced-mode: redir-host
    nameserver:
      - 114.114.114.114
      - 223.5.5.5
    fallback:
      - https://dns.google/dns-query
      - https://dns.cloudflare.com/dns-query
  tun:
    enable: true
    stack: gvisor
    dns-hijack:
      - 198.18.0.2:53
    auto-route: true
    auto-detect-interface: true
```

简单解释一下：
* enhanced-mode: 开启redir-host模式
* nameserver: 默认的DNS server，可以设置多个，支持DNS over DCP。Clash会同时像这些server发请求，并取最快返回的response
* fallback: 当目标不在大陆时使用的DNS（GEOIP!='CN'），工作原理同上，区别是这些DNS不能受DNS污染的影响，也就是说应该选择境外的DNS。(Known DNS Providers)[https://kb.adguard.com/en/general/dns-providers]
* 更多的配置如果不清楚不要随便修改，想要了解更多可以参考：(Clash配置文档)[https://lancellc.gitbook.io/clash/clash-config-file/dns]


Reference：
https://lancellc.gitbook.io/clash/clash-config-file/dns
