# Contributing Guide
This project is my personal portfolio&mdash;it's not exactly meant for people to contribute to, but if you want to, go ahead! This page is mainly for me to refer back to when I want to make a change since I can't use this project's readme.
### Installing
Make sure [Devbox](https://jetpack.io/devbox) and [direnv](https://direnv.net/) are installed and set up. 

If the system has bash and apt, run:
```bash
bash <(curl -s https://raw.githubusercontent.com/tom-ricci/easy-devbox/master/script.sh)
```
to get everything working and then restart the shell.

Then, in the project directory, run:
```bash
devbox generate direnv
```
and then restart the shell again.

If the IDE has per-project Node.js support, point it to `./.devbox/nix/profile/default/bin/node` and `./.devbox/nix/profile/default/bin/npm`.

Finally run:
```bash
npm run bootstrap
```

### Development
```bash
npm run start
```

### Building
This should be taken care of by a CD workflow, however if needed the project can be built locally with:
```bash
npm run build
```
