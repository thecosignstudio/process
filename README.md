# Development
## Setting up
```
npm install
```

```
bundle install
```

## Running
To run the project, execute following commands:
```
bundle exec jekyll serve
```

```
gulp watch
```

# Organizing files
## Where do I put chapter contents?
You should place files that contain chapter contents into `_chapters` folder,
e.g:
```
_chapters
  - 01-chapter.md
  - 02-chapter.md
```
Chapters should be named according to following naming schema
`[chapter_number]_chapter.md`.

## Table of contents generation
There are two tables of contents: main table of contents and chapter contents.
The main table of contents is generated for you based on the titles of chapters
(that is what is inside the h1 heading - `# Heading`). The chapter contents are
generated from the secondary headings (`## Heading`),

## Setting the book title
To set the book title, change the `book_title` key in `_config.yml`:
```yml
# ...
book_title: "Design Process For Pros"
# ...
```

# Writing tips
## Include necessary front matter
When creating file for new chapter remember to add necessary front matter, eg.:
```md
---
title: "Project introduction & setup"
chapter_number: "01"
---

# Project introduction & setup

Chapter content goes here.
```
Both `title` and `chapter_number` are required. Furthermore `chapter_number`
needs to include leading zero, if it's less than 10. Make sure that `title` in
front matter corresponds to the primary heading - as in the above example.

## Use only one h1 heading
Don't use more than one first-size heading - it's reserved for general chapter
title, eg:

```
# Project introduction & setup
```

## Using images
If you need to use an image, place it in folder `assets/content_imgs`. You can
then use it using the `{% include image.html %}` tag, e.g.:
```
{% include image.html img="sample.jpg" alt="Sample image" %}
```
This will include image `sample.jpg` placed in `assets/content_imgs`
**Important**: do not use the markdown version of image tag - this will mess up
the vertical rhythm of the page.

## Using quotes
You can insert quotes by using following syntax:
```
{% include quote.html text="Quote text goes here" author="Quote author goes here" %}
```
This will produce a following quote:
![Quote](doc_imgs/quote.png?raw=true)

## Using Q&A
You can insert Q&A sections by using following syntax:
```
{% include qa.html question="Why do you want to know the business model?" answer="This will allow us some amount of lorem ipsum dolor sit amet conscetur blah blah" %}
```
This will produce a following outcome:
![qa](doc_imgs/qa.png?raw=true)

## Using DOs and DON'Ts
You can insert DOs and DONT's sections by using following syntax:
```
{% include dosndonts.html introduction="There are a couple of things we need to cover:" dos="
Create your wireframes based on a muted color pallete
|Use color only if it helps defining the idea behind the design
" donts="
Don't use color in your wireframe designs unless it has a solid purpose
| Don't use various tints of grey
"%}
```
This will produce a following outcome:
![qa](doc_imgs/dosdonts.png?raw=true)

**Note**: You have to separate items in both DOs and DON'Ts list by a pipe (`|`)
symbol.
