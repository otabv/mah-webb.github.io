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
git pull                        # Fetch remote updates to master
git checkout -b me134a#ex-2     # Create a new branch
# Code changes...
git add .                       
git commit -am "message"
git push origin me134a#ex-2     # Commit and push changes
git checkout master
git merge me134a#ex-2
git push origin master          # Merge with master and push to github
```

Deleting a temporary branch locally and remotely:

```bash
git branch -D me134a#ex-2
git push origin --delete me134a#ex-2    # From the master branch
```

## Courses

Adding a new course:

1. Add the new course in `_data/courses.yml`. 
2. Create course file in `_data/`, ex. `_data/me105a.yml`.
3. Create a new directory in `courses/`, ex. `courses/me105a/`.
4. Create the course main page `index.md` and the needed subdirectories for assignments, exercises, projects and lectures.

Preview existing courses for example files.

## License

All content is available under a [Creative Commons Attribution 2.5 Sweden](http://creativecommons.org/licenses/by/2.5/se/) license. In most cases, this should be equal to the [generic version](http://creativecommons.org/licenses/by/2.5/). Attribution in the form of a link to <http://mah-webb.github.io/> is much appreciated.
