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

# Writing tips

## Use only one h1 heading
Don't use more than one first-size heading - it's reserved for general chapter
title, eg:

```
# Project introduction & setup
```

## Using images
If you need to use an image, place it in folder `assets/content_imgs`. You can
then use it using the `{% include img.html %}` tag, e.g.:
```
{% include img.html img="sample.jpg" alt="Sample image" %}
```
This will include image `sample.jpg` placed in `assets/content_imgs`

## Using quotes
You can insert quotes by using following syntax:
```
{% include quote.html text="Quote text goes here" author="Quote author goes here" %}
```
This will produce a following quote:
![Quote][doc_imgs/quote.png?raw=true]

## Using Q&A
You can insert Q&A sections by using following syntax:
```
{% include qa.html question="Why do you want to know the business model?" answer="This will allow us some amount of lorem ipsum dolor sit amet conscetur blah blah" %}
```
This will produce a following outcome:
![qa][doc_imgs/qa.png?raw=true]

## Using DOs and DON'Ts
You can insert DOs and DONT's sections by using following syntax:
```
{% include dosndonts.html dos="
Create your wireframes based on a muted color pallete
|Use color only if it helps defining the idea behind the design
" donts="
Don't use color in your wireframe designs unless it has a solid purpose
| Don't use various tints of grey
"%}
```
This will produce a following outcome:
![qa][doc_imgs/dosdonts.png?raw=true]

**Note**: You have to separate items in both DOs and DON'Ts list by a pipe (`|`)
symbol.
