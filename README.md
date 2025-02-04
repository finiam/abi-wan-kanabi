# ABI-WAN-KANABI
<details>
<summary>Table of Contents</summary>

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Build](#build)
  - [Demo](#demo)
  - [Warning](#warning)
- [Contributing](#contributing)
- [Authors \& contributors](#authors--contributors)
- [Acknowledgements](#acknowledgements)

</details>

## About
Abi-wan-kanabi is an UNLICENSE standalone TypeScript parser for Cairo smart contracts. 
It enables on the fly typechecking and autocompletion for contracts call directly in typescript.
Developers can now catch typing mistakes early, prior to executing the call on-chain, and thus enhancing the overall Dapp development experience.

## Getting Started
### Prerequisites
Abiwan is a standalone typescript library. Its only dependence is on typescript version 4.9.5 or higher.
Also, it makes use of BigInt, so the tsconfig.json should target at least ES2020:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",                         
    "lib": ["ES2020", "ESNext"],
  }
}
```         
### Build
To use abiwan, you must first generate types from your contracts' ABI json files, for example using the helper script (deprecated):
```bash
./scripts/extract_abi.sh <path>/<to>/<abi>.json <path>/<to>/<other_abi>.json ./
```
This will create a declaration file (.d.ts) for the abi.
You can then import it in any script and you are set to go:
```typescript
import abi from './abi_demo.ts'
import {call} from './kannabi.ts'
call(abi, "balance_of", 5n);
```

> If you think that we should be able to import types directly from the json files, we think so too!
> See this typescript [issue](https://github.com/microsoft/TypeScript/issues/32063) and thumb it up!

### Demo
https://drive.google.com/file/d/1OpIgKlk-okvwJn-dkR2Pq2FvOVwlXTUJ/view?usp=sharing

### Warning
Abiwan is still very young and has not yet been subject to an official release. We do not recommand using it in production yet.

## Contributing
Contributions on abiwan are most welcome!
If you are willing to contribute, please get in touch with one of the project lead or via the repositories [Discussions](https://github.com/keep-starknet-strange/abi-wan-kanabi/discussions/categories/general)

## Acknowledgements
### Authors and Contributors
For a full list of all authors and contributors, see [the contributors page](https://github.com/keep-starknet-strange/abi-wan-kanabi/contributors).

### Special mentions
Big thanks and shoutout to [Francesco](https://github.com/fracek)! :clap: who is at the origin of the project!

### Other projects
Abiwan is greatly influenced by the similar project for EVM-compatible contracts [wagmi/abitype](https://github.com/wagmi-dev/abitype).