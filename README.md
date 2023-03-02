# `@zazuko/s`

Create `s.zazuko.com` link programmatically

## Code usage

```js
import shortener from '@zazuko/s'

const short = await shortener.shorten('http://example.com/')
```

## CLI usage

> Requires native fetch, which is only available in node 18+ or in node 16 behind flag

```shell
zazuko-s http://example.com/
```
