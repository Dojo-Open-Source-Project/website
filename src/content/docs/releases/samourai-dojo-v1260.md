---
title: Samourai Dojo v1.26.0
date: 2024-10-09
excerpt: Minor release of Samourai Dojo introducing testnet4 support, Snowflake bridges for Tor and updated dependnecies. 
tags:
  - Samourai Dojo
---

## Notable changes
### Testnet4 support
This version updates Bitcoin Core to v28.0 with support for testnet4.

If you wish to stay on testnet3, DO NOT upgrade.

Furthermore, testnet4 is only supported by Fulcrum. Addrindexrs does not support testnet4.

Dojo tracker will automatically detect block hash mismatch and will delete the block database and resync - all tracked addresses and XPUBs will stay tracked, only their history will be erased due to switch to new chain.

Fulcrum DB has to be deleted manually using `docker exec -it fulcrum rm -rf /home/fulcrum/.fulcrum/db`.

**Mainnet users are unaffected by this change**.

### Snowflake bridges support in Tor
This version adds support for Snowflake bridges in Tor. Snowflake is a pluggable transport for Tor that uses WebRTC to disguise traffic.

[See documentation](https://github.com/Dojo-Open-Source-Project/samourai-dojo/blob/master/doc/DOCKER_advanced_setups.md#configure-tor-bridges) on how to setup Tor bridges.

## Changelog
- Updated dependencies
- Updated Fulcrum to v1.11.1
- Updated Bitcoin Core to v28.0 + testnet4 support
- Updated Tor to v0.4.8.12
- Updated MariaDB to v11.5.2
- Updated Nginx to v1.27.1
- Updated electrum client library
- Added support for Snowflake Tor bridges
- Better multistage build for Tor image
- Switch from axios to undici
- Updated documentation

## Downloads
- [Source code (zip)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.26.0.zip)
- [Souce code (tar.gz)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.26.0.tar.gz)
- [Fingerprints](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.26.0/samourai-dojo-1.26.0-fingerprints.txt)
- [Signature](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.26.0/samourai-dojo-1.26.0-fingerprints.txt.sig)
