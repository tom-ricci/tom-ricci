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
This should be taken care of by Cloudflare Pages, however if needed the project can be built locally with:
```bash
npm run build
```

### Notes
This project is a little simple website using htmx and TailwindCSS. The tooling may be a bit much, however I'm doing it on purpose to force all dev environments to be the exact same. And so I can have continuous deployment.

It's hosted on Cloudflare Pages at [tom-ricci.pages.dev](https://tom-ricci.pages.dev). I've also pointed all my personal portfolio domains to it (or, rather, will when it's done).

Cloudflare Pages, as noted above, also takes care of building.
