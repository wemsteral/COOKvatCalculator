# What is it?

A single page VAT calculator web app written in Javascript (w/ jQuery), HTML & CSS.

A tech-test given to me by COOK Kitchen.

![ss1](https://github.com/wemsteral/COOKvatCalculator/blob/master/ss1.png)

# What does it do?

The COOK Vat Calculator takes two values as input, and upon submission, displays the total of those two values, the amount of tax and the grand total; the former two combined.

Extra features:

- A reset button to make all displayed totals go to zero
- The ability to change the country in question, via drop down box.
- Changing currency symbols depending on choice of country.
- Changing visible tax rate.
- COOK styling!

# How do I use it?

Clone this repo, copy the index.html full path into your browser.

# Approach

I began with an MVC approach in mind. I knew that, as a small-scale application, one model/class functioning as the calculator would be sufficient. This is the file vatCalculator.js, which is written in plain ES6 javascript. It contains the properties and logic required by the app, and is instantiated in the index.html. I tested the functionality in the browser console to drive development.

Next, I wrote a simple form layout in html. Then, I imported the script vatCalculator.js & the jQuery library, and wrote functions to make the website responsive.

Finally, styling. I was fortunate to be able to get the COOK font and background colour by using the dev tools in the browser. Overall, the styling is clean and minimal. I aimed to make use of vertical space so the app can be used on smaller screens with no formatting problems.

# Challenges

As with all user-input-related apps, there were a lot of edge cases that needed guarding against:

- Negative numbers
- Unrecognised characters
- Numbers beyond two decimal places
- No entries

Most of these were solved with clauses in the `<form>`, for instance setting the “pattern” to the appropriate RegEx to ensure an integer with a maximum of 2 decimal places was used, setting a `min`imum value, making it `required` etc.

Of course there is a difference between an integer and a float in almost all programming languages, so all entries needed to be converted to floats and fixed to two decimal places before they were processed in any way.

Javascript also has a default upper limit to the memory it can allocate to a float, so extremely large numbers pose a problem to this app. I believe there are some popular external libraries one can use to overcome this. If this were written in a lower level language, I understand that the memory allocation could be manually set.
