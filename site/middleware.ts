/**
 * Global middleware — runs on every request.
 */

export default [
  async (req: any, res: any, next: any) => {
    const start = performance.now();
    const response = await next();
    const ms = (performance.now() - start).toFixed(1);
    console.log(`  ${req.method} ${req.url.pathname} → ${response.status} (${ms}ms)`);
    return response;
  },
];
