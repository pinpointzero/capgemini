# capgemini

The test work for Capgemini

## folder layout

/
  .gitignore
  LICENCE
  README.md
  index.html
  js/
    index.js
  css/
    index.css
  img/
    crown-copyright.png
    hmrc-logo.jpg
    tcrn.png

The entry point is the static index.html file.

## index.html

As requested, the page replication uses only HTML5, CSS3 and native Javascript.
The HTML document begins with the standard doctype and layout for an HTML5 document.

The header consists of a meta for the character set, title and the link inclusion of the static file index.css.
I've attempted to mark up the body as closely as possible to the screenshot I've been
given. With the time constraint, I've not really matched the header well, and the images I've stolen from HMRC aren't quite the correct one's!

The form adds both the input elements required and adds a hidden one too to
manage the use of a CSRF token.
The two form elements use native HTML5 validation, for non-JS compliant browsing, in addition to some JS native code to provide blur listener's for the inputs, and a click
for the submit button.
The additional Javascript listener code could add extra functionality beyond the
simple validation of format, for example, making AJAX's calls to confirm the existence
and the activity of a given value.
This functionality would still be completed on the back-end also, but having it
on the front-end is always a better addition.

As it stands, I ran out of time to do anything further, other than set up these
listeners and their subsequent handler functions. Given more time, I'd have added
Axios and some demonstrative code.

The index.js file is included after the closing body tag.

## index.js

I took the option to dispense with the inclusion of jQuery.
As the exercise assumes a browser capable of HTML5, when Javascript is switched on,
that assumption would still stand for the native JS call that I have used to
demonstrate validation and eventual submission.

## index.css

Contains all of the CSS3 detail required to mark up the HTML.
Ordinarily, I would employ a SASS directory for this.

## overall

The entry point provides both a page and bootstrapping for the CSS and the JS to
start up.
The aesthetics aren't great. The header is off, and the HMRC logo I downloaded is not
inline with the screenshot.
The form does not submit anywhere, but the validation (using HTML5) does work to a
degree. Given more time, the NI regex would be better. As it stands, I'm only looking
at the format of 2 letters, 6 numbers, & 2 letters.

Given free reign, I'd have utilised npm to install webpack, sass, and either VueJS or React and componentised much of the entire page, most of which is currently not
reusable.

I would be delighted to talk through all or any of the aspects of this exercise.

Thanks and best regards,

Darryl
