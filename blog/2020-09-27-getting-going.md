---
slug: Getting Going
title: Getting Going
author: Brendan Hulme
author_title: Consultant and Developer
author_url: https://github.com/b-hulme
author_image_url: https://avatars3.githubusercontent.com/u/64170317?s=460&u=6869a9778ace6f2c221e49bde22b904797e84097&v=4
tags: [docusaurus]
---

So I've finally got round to setting up a simple Bio and Blog website to tell the tech world what it's doing wrong. Ok, I'm joking - I do that some times.

As I wanted to easily create documents and blogs and version them without actually paying for the priviledge I decided to try and do this using Docusaurus v2 and GitHub Pages.

The local installation process was easy and really did just take a few minutes, which is great to see. The documentation around this aspect is spot on, so I doubt anyone will have any problem there.

With the local instance running, it was time to get the site into GitHub and published as a set of GitHub pages. This part wasn't quite as easy.
The deployment section on the Docusaurus website details how to publish on GitHub Pages and it does seem quite complex in comparison to other platforms mentioned. The Gist is that you commit your document changes to a `documentation` branch (rather than `master`) and the CI script (using GitHub workflows and actions) compiles the documents to static files and commits them back into the `master` branch.

This requires the CI script to be able to access the Git repo with write access and so things get a little more complex.

The good news is you don't need to do any CI scripting, just copy the script on the docusaurus deployment page and it'll work.
You will however, need to create a public/private SSH key pair.

Instructions are provided, just make sure you don't set a passphrase on the private key otherwise the you will get authentication failures when the GitHub workflow runs.
