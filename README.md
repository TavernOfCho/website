# TavernDeCho [![Build Status](https://travis-ci.com/TavernOfCho/website.svg?branch=master)](https://travis-ci.com/TavernOfCho/website) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Installation

```
git clone git@github.com:TavernOfCho/config.git TavernOfCho
cd TavernOfCho
./scripts/init.sh
docker-compose run website yarn install
docker-compose run website
```

Open [http://127.0.0.1:8054](http://127.0.0.1:8054) to view it in the browser.


## FIREBASE

Normally travis deploy on firebase when we merge to master.
If you want to deploy manually, you can run these command :

```
docker-compose exec website npm run-script build
docker-compose exec website firebase login
docker-compose exec website firebase deploy
```

Open https://tavernofcho.com 