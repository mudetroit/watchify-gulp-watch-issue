# watchify-gulp-watch-issue
To demonstrate problem

```
> npm install
> npm run gulp
```

Tweak app.js --> lint task will run, scripts will compile

Tweak app.js --> lint task won't run, scripts will compile

```
> gulp

[11:56:13] Using gulpfile ~/repo/watchify-gulp-watch-issue/gulpfile.js
[11:56:13] Starting 'lint'...
[11:56:13] Finished 'lint' after 23 ms
[11:56:13] Starting 'scripts'...
[11:56:13] Finished 'scripts' after 100 ms
[11:56:13] Starting 'build'...
[11:56:13] Finished 'build' after 9.24 μs
[11:56:13] Starting 'watch'...
[11:56:13] Finished 'watch' after 7.94 ms
[11:56:13] Starting 'default'...
[11:56:13] Finished 'default' after 7.52 μs
[11:56:33] Starting 'lint'...
[11:56:33] Finished 'lint' after 2.63 ms
[11:56:33] Now Updating Scripts...
[11:56:38] Now Updating Scripts...
```
