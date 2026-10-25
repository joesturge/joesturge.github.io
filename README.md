# joesturge / dev

This is the source for my personal development blog. I write about projects, technology, tutorials, and things I've learned along the way.

The site is built with [Hugo](https://gohugo.io/) and the [Stack theme](https://github.com/CaiJimmy/hugo-theme-stack). Posts and pages are written in Markdown under `content/`.

## Run the site locally

You need Hugo Extended and Go installed. Hugo uses Go modules to load the theme.

Start the local server with:

```bash
hugo server -D
```

The `-D` flag includes draft posts. Hugo prints the local address when the server starts, usually `http://localhost:1313/`.

To check a production build:

```bash
hugo --minify --gc
```

The generated site goes into `public/`, which is build output and isn't committed.

## Write a post

Use the helper script to create a numbered post directory and its Markdown file:

```bash
./new-post.sh my-new-post
```

This creates `content/post/<number>-my-new-post/index.md`. Add the post text there. The file starts with front matter for the title, description, date, tags, category, and other page settings. Set `draft: true` while a post is still in progress; drafts are visible locally with `hugo server -D` and aren't included in the normal production build.

Keep images for a post in its directory and refer to them from the Markdown using a relative path. For example, `image: my-cover.jpg` in the front matter sets the post's cover image.

## Contributing

This is a personal blog, but corrections and suggestions are welcome. You can open an issue to discuss an idea or submit a pull request with a focused change.

Before submitting:

1. Preview the site with `hugo server -D`.
2. Check that it builds with `hugo --minify --gc`.
3. Include any post images alongside the post, and check that they render in the preview.

Keep post edits in the author's informal British English voice. For new posts, use the helper script so the post directory follows the existing numbering convention.

## Deployment

GitHub Actions builds the site and deploys it to GitHub Pages when changes are pushed to `master`. The workflow is in `.github/workflows/deploy.yml`; it uses Hugo Extended and publishes the generated `public/` directory.

## Update the theme

The Stack theme is managed as a Hugo module. To update it:

```bash
hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3
hugo mod tidy
```

Review the resulting changes to `go.mod` and `go.sum`, then build the site before submitting them.
