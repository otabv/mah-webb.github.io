Mah Webb
==================

> [mah-webb.github.io](http://mah-webb.github.io)

## Contribute

This site is made with [Jekyll](http://jekyllrb.com) and published with [GitHub Pages](https://pages.github.com/). Be sure to read up on both [Jekyll](http://jekyllrb.com) and [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages) before contributing.

To get started:

1. Clone this repository

    ```bash
    git clone https://github.com/mah-webb/mah-webb.github.io.git
    cd mah-webb.github.io
    ```

2. Install dependencies

    ```bash
    gem install bundle  # ignore if bundle is already installed
    bundle install
    ```

3. Build & preview the site locally at `0.0.0.0:4000`

    ```bash
    bundle exec jekyll serve    # add --watch for auto-regeneration
    ```

Now you're ready to start contributing!

### Workflow Example

```bash
git checkout -b fix#123     # Create a new branch
# Fix stuff!
git add .
git commit . -m "message"   # Commit changes
git checkout master
git pull                    # Fetch remote changes
git merge fix#123           # Merge changes to master
git push origin master      # Push changes to github
# (Optional)
git branch -D fix#123       # Delete local branch
```

## Courses

Adding a new course:

1. Add the new course in `_data/courses.yml`. 
2. Create course file in `_data/`, ex. `_data/me105a.yml`.
3. Create a new directory in `courses/`, ex. `courses/me105a/`.
4. Create the course main page `index.md` and the needed subdirectories for assignments, exercises, projects and lectures.

Preview existing courses for example files.

## License

All content is available under a [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/legalcode) license. In most cases, this should be equal to the [generic version](http://creativecommons.org/licenses/by/4.0/). Attribution in the form of a link to <http://mah-webb.github.io/> is much appreciated.
