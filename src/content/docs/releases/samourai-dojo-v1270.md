---
title: Samourai Dojo v1.27.0
date: 2025-05-22
excerpt: Minor release of Samourai Dojo introducing the Soroban P2P network, API key management, new API endpoints and updated components.
tags:
  - Samourai Dojo
---

## Notable changes
### Soroban P2P network
This version introduces Soroban P2P network. MyDojo (docker setup) users will automatically have Soroban installed as part of their Dojo.

Dojo will be able to leverage Soroban P2P network for various future applications.

Dojo already has its first feature based on Soroban: PandoTx.

PandoTx is a transaction transport layer - when your wallet pushes a transaction to Dojo, it will be relayed to a random Soroban node which will then push it to the Bitcoin network.

This also means that your Soroban node can receive other people's transactions and relay them to Bitcoin network.

This feature is meant to break the heuristic that a node relaying the transaction is closely coupled with person who made that transaction.

Pushing transactions through Soroban can be deactivated by setting `NODE_PANDOTX_PUSH=off` in `docker-node.conf`.

Processing incoming transactions from Soroban network can be deactivated by setting `NODE_PANDOTX_PROCESS=off` in `docker-node.conf`.

### API key management
There has been an uptick of people providing their Dojos for the community. In order to make giving access to Dojo more manageable, the API key management has been introduced.

Dojo admins can now find new API management tab in their DMT. Here they can create unlimited number of API keys, assign labels for easy identification and set expiration of an API key.

This allows admins to not compromise their main API key and distribute specific API keys just to desired parties.

### New API endpoints
Several new API endpoints have been created so that API consumers have better time developing new features on top of Dojo.

**New:**
- `/latest-block` - returns data about latest block
- `/txout/:txid/:index` - returns unspent output data
- `/support/services` - returns info about services that Dojo exposes

**Updated:**
- `/tx/:txid` - endpoint has been updated to return raw transaction with parameter `?rawHex=1`

The introduction of `/support/services` now also means that the explorer field in the Dojo pairing payload is deprecated.
While it will still be present, API consumers should switch to using this new endpoint to get explorer and other pairing information.

Please refer to the [API docs](https://github.com/Dojo-Open-Source-Project/samourai-dojo/blob/master/doc/README.md) for details.

## Changelog
- Added Soroban and PandoTx functionality
- Update ban script to disconnect inbound Knots nodes [8ca7a8a1](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/8ca7a8a1)
- Regenerate fulcrum certificate if expired [4a2aba15](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/4a2aba15)
- Check if transaction already exists in pushTx [33ca0451](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/33ca0451)
- Bump BTC-RPC Explorer [3c3c48ed](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/3c3c48ed)
- Bump Tor to v0.4.8.16, bump Snowflake [eaf7c79d](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/eaf7c79d)
- Updated Bitcoin Core to v29.0 [b50bded2](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/b50bded2)
- Removed unnecessary middleware [f7591c36](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/f7591c36)
- Added "/latest-block" API endpoint [fa19416a](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/fa19416a)
- Added new information to transaction API endpoint [4433d4b1](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/4433d4b1)
- Added txout API endpoint [5376e16d](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/5376e16d)
- Added ability to manage API keys [a82e0e5e](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/a82e0e5e)
- Fixed DB update mechanism, added api_keys table [3de7e80f](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/3de7e80f)
- Add new /support/services RPC endpoint [8b4f39e4](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/8b4f39e4)
- Add an option to use blocksdir config for bitcoin blocks directory [d873d275](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/d873d275)
- Removed deprecated configuration [7b5c44fa](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/7b5c44fa)
- Updated Fulcrum to v1.12.0 [d073e59e](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/d073e59e)
- Updated Node.js dependencies c1981d0b, [fbc1f1e1](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/fbc1f1e1)
- Reconfigured container dependencies [d5a73c65](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/d5a73c65)
- Fix Snowflake git URL [7baa71c5](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/7baa71c5)
- Fix log path for testnet4 [c8c6a805](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/c8c6a805)
- Use prebuilt addrindexrs binaries [7dd4f55e](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/7dd4f55e)
- Add instructions to migrate blockchain/fulcrum [f00ac34b](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/f00ac34b)
- Added pull policies [425d6d6e](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/425d6d6e)

## Downloads
- [Source code (zip)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.27.0.zip)
- [Souce code (tar.gz)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.27.0.tar.gz)
- [Fingerprints](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.27.0/samourai-dojo-1.27.0-fingerprints.txt)
- [Signature](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.27.0/samourai-dojo-1.27.0-fingerprints.txt.sig)
