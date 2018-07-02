# ldd

Programmic interface to `ldd`

```
npm install ldd
```

## Usage

``` js
const ldd = require('ldd')

// prints the shared libraries used by node
ldd(process.execPath, console.log)
```

## API

#### `ldd(path, callback)`

Calls `ldd` on the path and calls the callback with an array looking like this

```js
[{
  name: 'name of the shared lib',
  path: 'path/to/resolved/shared/lib',
  address: 'memory-address of shared lib'
}, {
  ...
}]
```

#### `list = ldd.sync(path)`

Same as above but sync

## License

MIT
