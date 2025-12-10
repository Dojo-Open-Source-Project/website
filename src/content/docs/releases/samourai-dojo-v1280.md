---
title: Samourai Dojo v1.28.0
date: 2025-10-06
excerpt: Minor release of Samourai Dojo introducing Fulcrum 2.0 and other updated components.
tags:
  - Samourai Dojo
---

## Notable changes
### Fulcrum v2.0.0
This version updates Fulcrum to v2.0.0. This Fulcrum update brings more stability and better performance.

After Dojo uograde, Fulcrum needs to migrate its database to a new format which can take a couple of hours. During this time, it won't be possible to perform a rescan or wallet import.

It is crucial that this process is not interrupted (no Dojo shutdown/restart) because that would cause Fulcrum DB to end up corrupted.

Observe progress in Fulcrum logs to identify when this process has finished.

## Changelog
- Updated dependencies [bdda4a4a](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/bdda4a4a)
- Bump BTC-RPC Explorer to 3.5.1 [a30a00fa](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/a30a00fa)
- Use Node.js v22 [98f3ae8a](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/98f3ae8a)
- Updated base docker images to Bookworm [affd6f9a](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/affd6f9a)
- Use MARIADB_AUTO_UPGRADE env variable [0d158b32](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/0d158b32)
- Bump Fulcrum to v2.0.0 [8c2232ae](https://github.com/Dojo-Open-Source-Project/samourai-dojo/commit/8c2232ae)

## Downloads
- [Source code (zip)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.28.0.zip)
- [Souce code (tar.gz)](https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/tags/v1.28.0.tar.gz)
- [Fingerprints](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.28.0/samourai-dojo-1.28.0-fingerprints.txt)
- [Signature](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases/download/v1.28.0/samourai-dojo-1.28.0-fingerprints.txt.sig)
