# koa-configuration

This middleware is used for mapping /config and /refresh for nodecloud-config-client.

## Usage

``` javascript
import Koa from 'koa';
import KoaConfig from 'koa-configuration';
import ConfigClient from 'nodecloud-config-client';

const app = new Koa();
const client = new ConfigClient(/* ignire */);

app.use(KoaConfig(client));
```

## API

### KoaConfig(client)

* client The instance of nodecloud-config-client.