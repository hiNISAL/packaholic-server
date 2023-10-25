# packaholic-server

A simple implementation of packaging service based on packaholic.

## Usage

```shell
git clone https://github.com/hiNISAL/packaholic-server

cd packaholic-server

bun install
bun start
```

## Quick Start

There is an example in the /test/project directory of the project, which can be triggered by the following curl.

```bash
curl -X POST \
  http://localhost:3001/pack \
  -H 'Content-Type: application/json' \
  -d '{
    "source": "./test/project"
}'
```
