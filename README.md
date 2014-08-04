Mah Webb
==================

> [mah-webb.github.io](http://mah-webb.github.io)

## Contribute

This site is made with [Jekyll](http://jekyllrb.com) and published with [GitHub Pages](https://pages.github.com/).

To get started:

1. Clone this repository

    ```bash
    git clone git@github.com:mah-webb/mah-webb.github.io.git
    cd mah-webb.github.io
    ```

2. Install dependencies and modules

    ```bash
    bundle install
    ```

3. Build & preview the site locally at `0.0.0.0:4000`

    ```bash
    bundle exec jekyll serve
    ```

Now you're ready to start contributing!

## Courses

To add a new course:

1. Add the new course to the list of courses in: `_data/courses.yml`
2. Create a new course file (name should be in the form of the course code or an equivalent identifier)
    * This file contains course meta information and lists of assignments, exercises, etc. (check existing courses for examples)
3. Create a new directory in `courses` directory with the name of the course code
4. Now you can create the course main page `index.md` and the subdirectories for assignments, exercises, etc. (check existing courses for examples)

## License

All content is available under a [Creative Commons Attribution 2.5 Sweden](http://creativecommons.org/licenses/by/2.5/se/) license. In most cases, this should be equal to the [generic version](http://creativecommons.org/licenses/by/2.5/). Attribution in the form of a link to <http://mah-webb.github.io/> is much appreciated.
