<h1 align="center">Mask Wizard</h1>

<p align="center">Mask strings catapimbas sou péssimo pra isso ainda vou por uma desc legal</p>

### Basic Usage

```js
const { time } = require('mask-wizard') 

//[...]

function applyTimeMask(e) {
   e.currentTarget.value = time(e.currentTarget.value)
}

<input
   placeholder="Example"
   onChange={applyTimeMask}
/>
```