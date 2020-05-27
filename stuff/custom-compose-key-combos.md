---
layout: page
title: Custom Compose Combinations
---
# {{ page.title }}
The compose key in Linux and macOS (and Windows, more on that later!) is a special modifier used in conjunction with other keys can produce characters not on your keyboard. For example, `Compose + ' + e` produces `é`.
This is all well and good, but what if I want my own, custom shortcuts? Well, with the `~/.Xcompose` file you can! Here's how:  
1. First, create the Xcompose file with `touch ~/.Xcompose` and edit it with your preferred editor.
2. At the top put `include "%L"` to add all the default shortcuts.
3. You're off to the races!

If you're a poor Windows user, the WinCompose project will help you with that.

The format is:  
<Multi\_key> \<key1> \<key2>… : result 

For example:  

<Multi\_key> \<at> : email@placeholder.com

A cheatsheet can be found <a href="https://github.com/samhocevar/wincompose/blob/master/src/rules/DefaultUserSequences.txt" class="current">here</a>.

Open an issue if I missed anything.

lyiriyah
<br/>
<br/>
<a href="/stuff.html" class="current">Back</a>
