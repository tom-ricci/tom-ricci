# Contributing Guide
This project is my personal portfolio&mdash;it's not exactly meant for people to contribute to, but if you want to, go ahead! No guarantees I'll merge anything, though. This file is primarily for me to refer to when I want to make a change.

### Setup
This project provides dependencies in a Nix shell defined in `flake.nix`. If you have nix-direnv, it will Just Work™.

### Development
```bash
npm run dev
```

### Adding Content
The two most likely things to change are the main body content and the project list. So, I thought I'd jot down a bit of information about editing them.

#### Language List
The list of languages I have experience with matches the `#langs` selector.

#### 88x31s
88x31s are listed in `/windows/buttons.html`, inside the element matching the `#friends` selector. They are ALSO listed in `index.html` inside the element matching the `#bots` selector. You should add an 88x31 to both so that it can be listed in the `Extras` panel as well as be scraped by Mat, Jules, etc.

#### Projects List
To add something to the project list, insert the following into `ul#projectlist` in`/src/windows/projects.html`. Make sure to replace the placeholders.
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

#### Resume
To update the resume, replace `src/resume.pdf`, `src/assets/resume.pdf`, and `src/resume/index.html` (by copying the resume over and changing its name to `index.html`).

(You should also go update the resume on the CDN as well, since it is copied over there too.)

Cloudflare Pages will handle headers automatically for `src/resume/index.html` so browsers know to interpret it as a PDF. 

However, some browsers just won't render anything except hypertext unless there's an extension, so I'm going to be switching to redirecting to `/resume.pdf` in all circumstances. Currently, though, `/resume.pdf` redirects to `/resume` with a 301 redirect, so I need to have a cooldown period before setting up the redirect to `/resume.pdf` (if I set it up now, browsers which have cached the 301 redirect will eventually fail with `ERR_TOO_MANY_REDIRECTS`). Google recommends at least 1 year, so my plan is to wait until at least 6/1/2027.

`src/assets/resume.pdf` is used to work around this for the time being. Cloudflare returns a 302 redirect from `/resume` to `/assets/resume.pdf`, so anyone who gets redirected to `/resume` will eventually still end up with a PDF that browsers actually like.

Eventually I should set up some sort of analytics to see how many people are being redirected to `/resume` so I know when nobody's using it anymore and I can actually set up the redirect to `/resume.pdf`.

### Building
This should be taken care of by Cloudflare Pages, however, if needed, the project can be built locally with:
```bash
npm run build
```

### Notes
This project is a little simple website using htmx, hyperscript, and TailwindCSS. The tooling may be a bit much; however, I'm doing it on purpose to force all dev environments to be the exact same. And so I can have continuous deployment.

It's hosted on Cloudflare Pages at [tom-ricci.pages.dev](https://tom-ricci.pages.dev). I've also pointed all my personal portfolio domains to it (or, rather, will when it's done).
