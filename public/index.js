// Note that a dynamic `import` statement here is required due to
// webpack/webpack#6615, but in theory `import { greet } from './pkg/hello_world';`
// will work here one day as well!
const rust = import('../pkg/wasm_lib');

rust
  .then(m => {
    const obj = { name: "John Doe", password: 1234 };
    m.get_json(JSON.stringify(obj))
  })
  .catch(console.error);
