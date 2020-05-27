---
layout: default
title: AUR on Manjaro
---
<a href="../stuff.html" class=current>Back</a>

# AUR on Manjaro
So, you're a new Arch user so you installed Manjaro. But you didn't see an option in Calamares to install AUR support. So what do you do? Well, you could:  
1. <a href="/stuff/stupid.html" class=current>Use Manjaro Architect and reinstall</a>
2. Continue with this tutorial and install support yourself.

Installing support is pretty simple. Just run `sudo pacman -Syyuu` and then `sudo pacman -Sy base-devel yay`. The first updates your system and the second installs two things, the base-devel group, which installs build tools and it also installs the yay package manager, an AUR helper written in Go. Here are some tips.

1. You don't use sudo with yay. `sudo yay` will shout at you.
2. If a package looks like it's going to take a long time to install, and I mean a ***loooooong*** time, use `yay -Sy $package --sudoloop` substituting `$package` for the package you want to install.
3. yay uses pacman syntax as it is a wrapper around pacman.

That's probably it! Open a GitHub issue if I missed anything.

lyiriyah
