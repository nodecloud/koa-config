export default function (client, options) {
    return async (ctx, next) => {
        if ('/config' === ctx.url) {
            return ctx.body = await client.getConfig();
        } else if ('/refresh' === ctx.url) {
            return ctx.body = await client.refreshConfig();
        }

        return next();
    }
};