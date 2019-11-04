# photo-app

This project is intended to replace my current website link to that GitHub Repository can be found [here] (https://github.com/salv236/MySite). I wanted to develop something that would provide more visual appeal. To access photo-app please click on the following [link] (http://salvatoresaia.com/photo-app/)

As you browse the photos once you hover the mouse over a picture it should scale larger than its current state.

# Technologies

The technologies used throughout this project were as follows:

* HTML5
* CSS3
* BEM
* SASS

# CSS3

The advanced featured used included CSS Grid & Flexbox, 
within the photo sections CSS Grid was used on the parent element with its child elements becoming grid items.

Th sudden bounce effect of the headings for each page was achieved using keyframes and animations, using the below code:

```
@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(20px);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(30px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(20px);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
```

#SASS

SASS is a CSS pre-processor which enables a developer to use programming concepts as a layer on top of CSS which helps avoid repetiton. A component driven development was implemented where separate scss files were applied for each component such as _header.scss, _navigation.scss Mixins were used, some examples of mixins can be seen below:

```
@mixin transitionImages() {
  transition: all 2s;
  -webkit-transition: all 2s;
  -moz-transition: all 2s;
  -ms-transition: all 2s;
  -o-transition: all 2s;
}

@mixin hoverImages() {
  transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
}

@mixin transitionBackground() {
  transition: background 1s;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -ms-transition: background 1s;
  -o-transition: background 1s;
}

@mixin transitionHeadingLeft() {
  -webkit-animation-duration: 2;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
```

In terms of responsive design breakpoint names were used below is an example:

```
@mixin breakpoint-1200px {
  @media screen and (max-width: 1200px) {
    @content;
  }
}
```

The inclusion of a viewport at 1200px can be viewed as follows:

```
.container {
  max-width: 100%;
  width: 75%;
  margin: 0 auto;
  @include breakpoint-1200px {
    width: 85%;
  }
}
```

The different shade of color when hovering a particular menu iten on the navigation was achieved using the lighten() function in SASS which called the variable of the existing color:

```
background: lighten($bgColorGradientDarkest, 40%);
```

# Features under review

Currently the website is 75% completed, viewport for smartphones has to be addressed. In addition I would like to add an animation where as you select a picture category within the navigation that a fade effect is applied at onload for several seconds of delay which should be achievable with Javascript. 

The hamburger menu used jquery for the show/hide of the menu which is a temporary solution until i am able to determine how this can be achieved with Raw Javascript.