## Vylma Homepage & CRUD Example
NSY PHP Framework Example with HTML5 Boilerplate and Bulma CSS Framework. This also provides Font-Awesome and several optimizations for Datatables plugin.

This is an example of a `CRUD` program & homepage using the NSY Framework ([Vylma Project](https://github.com/kazuyamarino/vylma)), i hope it can be useful for everyone to start using NSY as the project framework. I made this because I know that everyone loves `CRUD`..so Enjoy it!

Site example :
[https://vylma.kazuyamarino.com](https://vylma.kazuyamarino.com)

## Lets start!
### Download from Github
* Download source from this link [https://github.com/kazuyamarino/vylma/releases](https://github.com/kazuyamarino/vylma/releases).
* Simply rename the source folder that has been downloaded to `vylma` & copy it to your `html` or `htdocs` folder or anythings folder.
* For apache, please go to the `docs/apache` folder and read the Readme.txt.
* For nginx, please go to the `docs/nginx` folder.
* Go to the `docs/env.example` folder and copy the `env.example` to root folder, and rename it to `env`.
* Import database example. (see below)
* And save the date..

### From Composer
```
composer create-project vikry/vylma
```

## Database Example
There is an example database (sql file) in the `dump` folder. You can restore the sql file to a database that you created yourself.

## Vylma contain package :
* [Datatables jQuery Javascript Library](https://www.datatables.net/) with Responsive Plugin
* [Bulma CSS Framework with Plugin](https://bulma.io/)
* [Modal FX](https://postare.github.io/bulma-modal-fx/)
* NormaJS, A Foundation Abide based javascript validation
* [SimpTip](http://arashm.net/lab/simptip/)
* [JQuery](https://jquery.com/)
* [Modernizr](https://modernizr.com/)
* [WhatInputJs](https://github.com/ten1seven/what-input)
* [Font Awesome](https://fontawesome.com/)
* [Flatpicker](https://flatpickr.js.org/examples/)

## User Guide.
See [USERGUIDE.md](https://github.com/kazuyamarino/nsy/blob/master/docs/USERGUIDE.md).

## System Guide.
Part 1 of [SYSGUIDE.md](https://github.com/kazuyamarino/nsy/blob/master/docs/SYSGUIDE_1.md).<br/>
Part 2 of [SYSGUIDE.md](https://github.com/kazuyamarino/nsy/blob/master/docs/SYSGUIDE_2.md).

## License
The code is available under the [MIT license](LICENSE.txt).
