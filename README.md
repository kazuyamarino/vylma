## Vylma Homepage & CRUD Example
NSY PHP Framework Example with HTML5 Boilerplate and Bulma CSS Framework. This also provides Font-Awesome and several optimizations for Datatables plugin.

This is an example of a `CRUD` program & homepage using the NSY Framework ([Vylma Project](https://github.com/kazuyamarino/vylma)), i hope it can be useful for everyone to start using NSY as the project framework. I made this because I know that everyone loves `CRUD`..so Enjoy it!

Site example :
[https://vylma.nsyframework.com](https://vylma.nsyframework.com)

## Lets start!
### Download from Github
* Download source from this link [https://github.com/kazuyamarino/vylma/releases](https://github.com/kazuyamarino/vylma/releases).
* Simply rename the source folder that has been downloaded to `vylma` & copy it to your `html` or `htdocs` or anythings folder.
* For apache, please go to the `docs/apache` folder and read the Readme.txt.

```
// Apache Readme.txt
1. Copy .htaccess inside 'for_public' folder to 'public' folder
2. Copy .htaccess inside 'for_root' folder to 'root(vylma)' folder
```

* Go to the `docs/env.example` folder and copy the `env.example` to root folder, and rename it to `env`.
* Import database example. (see below)
* And save the date..

### From Composer

### Install NSY by creating a new directory called `blog`
```
composer create-project --prefer-dist vikry/vylma blog
```

##### 2. Restart Bash
```
source ~/reloader.sh
```

##### 3. NSY Setup
```
cd blog && nsy --setup

Enter directory name >
blog
```

---

```
For nginx, please go to the `docs/nginx` folder and read the `Readme.txt` too.

// Nginx Readme.txt
1. Open 'sudo nano /etc/nginx/sites-enabled/default'
2. Copy the text in the 'default' file and paste it to /etc/nginx/sites-enabled/default
3. And restart nginx service, 'sudo service nginx restart'
```

---

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

# NSY Framework
NSY is a simple PHP Framework that works well on MVC or HMVC mode.

[![Build Status](https://travis-ci.com/kazuyamarino/nsy.svg?branch=master)](https://nsyframework.com/)

Site example :
[https://nsyframework.com/](https://nsyframework.com/)

See further explanation here... [NSY Documentation](https://github.com/kazuyamarino/nsy-docs/blob/master/README.md)

## License
The code is available under the [MIT license](LICENSE.txt).
