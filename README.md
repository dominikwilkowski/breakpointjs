BreakpointJS
============

Sometimes you need to know what breakpoint you are at in `JS` but you don't want to hardcode the breakpoint in both, `CSS` and `JS`.
You should never [repeat yourself](http://pragmatictips.com/11) as we all know becasue:

> It isn't a question of whether you'll remember: it's a question of when you'll forget.

This tiny repo just shows you how you can synch up your `CSS` breakpoints with `JS` while maintaining the breakpoints only in `CSS`.

## Technique

In your `CSS` you just add a class where you change the `width` depending on your current breakpoint:

```CSS
.temp-responsivejs {
	width: 0;
	position: absolute;
	top: -9999px;
	left: -9999px;
	height: 1px;
	overflow: hidden;
}

@media screen and (max-width: 319px) {
	.temp-responsivejs { width: 1px }
}
@media screen and (min-width : 320px) {
	.temp-responsivejs { width: 1px }
}
```

In `JS` you create this div and look at its `witdh`.
You can ad a listener to the browser width but I would try to avoid that.