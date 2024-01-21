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
direnv allow
```
and then restart the shell again.

If your IDE has per-project Node.js support, point it to `./.devbox/nix/profile/default/bin/node` and `./.devbox/nix/profile/default/bin/npm`.

Finally run:
```bash
npm run bootstrap
```

### Development
```bash
npm run start
```

### Adding Content
The two most likely things to change are the main body content and the project list. So, I thought I'd jot down a bit of information about editing them.

#### Language List
The list of languages I have experience with matches the `span#langs` selector.

#### Current Project
The section detailing what I'm doing currently matches the `span#current` selector.

#### Projects List
To add something to the projects list, insert the following into `ul#projectlist` in`/src/windows/projects.html`. Make sure to replace the placeholders.
```html
<li class="group cursor-pointer block">
  <a href="Project Link">
    <div class="flex flex-row justify-between">
      <h3 class="subheader pb-3">
        Project Name
      </h3>
    </div>
    <p class="body pb-3">
      Project Description (~1 sentence long)
    </p>
    <div class="flex flex-row items-center gap-2 group-hover-focus:bg-gray rounded-full transition-colors w-fit">
      <div class="relative z-0 h-9 w-9">
        <div class="absolute bg-blue top-2 left-2 w-5 h-5 z-0"></div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="rgb(242,242,247)" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 w-9 h-full z-10">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.75 7.25C4.33579 7.25 4 7.58579 4 8C4 8.41421 4.33579 8.75 4.75 8.75H9.3401L7.23966 10.7004C6.93613 10.9823 6.91855 11.4568 7.20041 11.7603C7.48226 12.0639 7.95681 12.0814 8.26034 11.7996L11.7603 8.54959C11.9132 8.40769 12 8.20855 12 8C12 7.79145 11.9132 7.59231 11.7603 7.4504L8.26034 4.2004C7.95681 3.91855 7.48226 3.93613 7.2004 4.23966C6.91855 4.54319 6.93613 5.01774 7.23966 5.2996L9.3401 7.25H4.75Z" fill="rgb(242,242,247)"/>
        </svg>
      </div>
      <div class="caption group-hover-focus:text-blue text-gray transition-all pr-6 -translate-y-[0.0625rem]">
        Call To Action (also make sure to link the parent anchor to the project)
      </div>
    </div>
  </a>
</li>
```

### Building
This should be taken care of by Cloudflare Pages, however if needed the project can be built locally with:
```bash
npm run build
```

### Notes
This project is a little simple website using htmx, hyperscript, and TailwindCSS. The tooling may be a bit much, however I'm doing it on purpose to force all dev environments to be the exact same. And so I can have continuous deployment.

It's hosted on Cloudflare Pages at [tom-ricci.pages.dev](https://tom-ricci.pages.dev). I've also pointed all my personal portfolio domains to it (or, rather, will when it's done).
