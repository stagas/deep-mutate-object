<h1>
deep-mutate-object <a href="https://npmjs.org/package/deep-mutate-object"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-9-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/deep-mutate-object@1.0.0/dist/deep-mutate-object.min.js"><img src="https://img.shields.io/badge/brotli-173b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Deep traverse walk and mutate object keys and/or values.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i deep-mutate-object </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add deep-mutate-object </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add deep-mutate-object</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
import { add } from 'deep-mutate-object'

console.log(add(1, 2))
```

</p>
</details></ul></details><details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { add } from 'deep-mutate-object'

const main = document.querySelector('main')!

main.innerHTML = `<h1>1 + 2 = ${add(1, 2)}</h1>`
```

</p>
</details></ul></details>

## API

<p>  <details id="deepMutate$1" title="Function" open><summary><span><a href="#deepMutate$1">#</a></span>  <code><strong>deepMutate</strong></code><em>(obj, walkFn)</em>    </summary>  <a href="src/deep-mutate-object.ts#L1">src/deep-mutate-object.ts#L1</a>  <ul>    <p>    <details id="obj$3" title="Parameter" ><summary><span><a href="#obj$3">#</a></span>  <code><strong>obj</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="walkFn$4" title="Function" ><summary><span><a href="#walkFn$4">#</a></span>  <code><strong>walkFn</strong></code><em>(key, value, holder)</em>    </summary>    <ul>    <p>    <details id="key$7" title="Parameter" ><summary><span><a href="#key$7">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="value$8" title="Parameter" ><summary><span><a href="#value$8">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="holder$9" title="Parameter" ><summary><span><a href="#holder$9">#</a></span>  <code><strong>holder</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong>walkFn</strong><em>(key, value, holder)</em>  &nbsp;=&gt;  <ul>tuple</ul></p></p>    </ul></details>  <p><strong>deepMutate</strong><em>(obj, walkFn)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/deep-mutate-object/fork) or [edit](https://github.dev/stagas/deep-mutate-object) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
