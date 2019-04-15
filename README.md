## Work flow /!\ Need test

```
git clone git@github.com:TavernOfCho/config.git TavernOfCho
cd TavernOfCho
./scripts/init.sh
docker-compose run website yarn install
docker-compose run website
```

Open [http://127.0.0.1:8054](http://127.0.0.1:8054) to view it in the browser.


## FIREBASE

```
npm run-script build
docker-compose exec website firebase login
docker-compose exec website firebase deploy
```

Open [https://tavernedecho.firebaseapp.com/] (https://tavernedecho.firebaseapp.com/) 