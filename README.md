# Vylma Homepage & CRUD Example

NSY PHP Framework Example with HTML5 Boilerplate and Bulma CSS Framework. This also provides Font-Awesome and several optimizations for Datatables plugin.

This is an example of a `CRUD` program & homepage using the NSY Framework ([Vylma Project](https://github.com/kazuyamarino/vylma)), i hope it can be useful for everyone to start using NSY as the project framework. I made this because I know that everyone loves `CRUD`..so Enjoy it!

**Site example :**
[https://vylma.nsyframework.com](https://vylma.nsyframework.com)

## How to dating with Vylma?

## The Requirement

Before installing NSY, there are several applications that must be installed to support NSY operation.

### 1. Install Wget

**Windows Installation :**

* Download Wget from this site [https://eternallybored.org/misc/wget/](https://eternallybored.org/misc/wget/).
* Copy the `wget.exe` file into your `C:\Windows\System32` folder. Simply copy it from one location to the other.
* Verify the Installation on Windows, open the command prompt (cmd.exe) and run `wget -V` to see if it is installed.

**Linux Installation (Debian based) :**

* To install Wget on Linux Ubuntu/Debian use the apt-get command `apt-get install wget`.
* And verify installation with the wget command with the `wget --version` flag.

**MacOS Installation :**

* Install Homebrew, In Terminal type the following command:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* Install Wget, In Terminal Type the following command: `brew install wget`.
* Check if Wget is installed open Terminal and type `wget -V`.

### 2. Install Composer

**Windows Installation :**

* Download Composer here, [https://getcomposer.org/doc/00-intro.md#installation-windows](https://getcomposer.org/doc/00-intro.md#installation-windows).
* Run the installer and follow the instructions to install Composer.
* Verify the Installation on Windows, open the command prompt (cmd.exe) and run `composer -V` to see if it is installed.

**Linux Installation (Debian based) :**

* Download the installer and composer setup:

```bash
sudo php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');".
```

* Run the installer:

```bash
sudo php composer-setup.php --install-dir=/usr/bin --filename=composer
```

* Verify the Installation, open Terminal and run `composer -V` to see if it is installed.

**MacOS Installation :**

* Download and install Composer using the following commands:

```bash
curl -sS https://getcomposer.org/installer -o composer-setup.php
```

```bash
HASH="$(curl -sS https://composer.github.io/installer.sig)"
```

```bash
php -r "if (hash_file('sha384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

* If the installer is verified, proceed with the installation:

```bash
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer.
```

* Remove the installer script: `rm composer-setup.php`.
* Check that Composer is installed and accessible: `composer`.

### 3. Install Git

**Windows Installation :**

* Go to the official Git website at [https://git-scm.com/](https://git-scm.com/).
* Click on the `Download` button to get the latest version of Git for Windows.

**Linux Installation (Debian based) :**

* Install Git using the package manager: `sudo apt install git`
* Check the installed Git version: `git --version`

**MacOS Installation :**

* Install Homebrew, In Terminal type the following command:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* Once Homebrew is installed, use it to install Git: `brew install git`

* Check the installed Git version: `git --version`

---

## NSY Installation

### Download from Github

* Download source from this link [https://github.com/kazuyamarino/vylma/releases](https://github.com/kazuyamarino/vylma/releases).
* Simply rename the source folder that has been downloaded to `vylma` & copy it to your `html` or `htdocs` or anythings folder.
* For apache, please go to the `docs/apache` folder and read the Readme.txt.

```text
// Apache Readme.txt
1. Copy .htaccess inside 'for_public' folder to 'public' folder
2. Copy .htaccess inside 'for_root' folder to 'root(vylma)' folder
```

* For nginx, please go to the `docs/nginx` folder and read the `Readme.txt` too.

```text
// Nginx Readme.txt
1. Open 'sudo nano /etc/nginx/sites-enabled/default'
2. Copy the text in the 'default' file and paste it to /etc/nginx/sites-enabled/default
3. And restart nginx service, 'sudo service nginx restart'
```

* Go to the `docs/env.example` folder and copy the `env.example` to root folder, and rename it to `env`.
* Import database example. (see below)
* And save the date..

### Download from Composer

#### Install NSY by creating a new directory called `blog`

```sh
composer create-project --prefer-dist vikry/vylma blog
```

#### Restart Bash

```sh
source ~/reloader.sh
```

#### NSY Setup

```sh
cd blog && nsy --setup

Enter directory name >
blog
```

---

## Database Example

There is an example mysql or mariadb database (for test the CRUD process) in the `Migrations` folder. You can restore it to a database with this way [NSY Migration](https://github.com/kazuyamarino/nsy-docs/blob/master/NSY_MIGRATION.md).

---

## Vylma contain package

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

---

## NSY Framework

NSY is a simple PHP Framework that works well on MVC or HMVC mode.

Site example :
[https://nsyframework.com/](https://nsyframework.com/)

See further explanation here... [NSY Documentation](https://github.com/kazuyamarino/nsy-docs/blob/master/README.md) *(Documentation is undercontruction, sorry for many information have been missed)*

---

## License

The code is available under the [MIT license](LICENSE.txt).
