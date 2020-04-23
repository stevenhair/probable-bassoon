# probable-bassoon
Repro of [planttheidea/moize#119](https://github.com/planttheidea/moize/issues/119)

To reproduce the issue, run `npm test`. This runs jest tests in parallel and returns the warning:

> A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due
> to improper teardown. Try running with --runInBand --detectOpenHandles to find leaks.

This issue is not present when the tests are run in series. To demonstrate this, run `npm run test:in-band`.
