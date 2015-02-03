# js-fsm

A small library to provide nice syntax for state machines.

The main use case is interaction programming.

## Usage
js-fsm is on Bower. You can get js-fsm by typing `$ bower install`. 

```
$ bower install js-fsm
```

fo


Use `bower install` to install the needed dependencies.
`
In your `index.html` file, do:

```html
  <script src="bower_components/js-fsm/js-fsm.js"></script>
```

js-fsm exposes a global FSM object which you use to create your own instances:

```javascript

var door = FSM.create()
	.when('closed')
		.on('lock')
			.do(function(){ console.log('locking'); })
			.andBe('locked')
	.startAs('closed');
```


## Differences from other JS state machine libraries

The syntax. js-fsm uses method chaining instead of JavaScript object notation. This results in fewer nesting parentheses, which I find more readable.

## Literature

* Thimbleby, Harold. Press On: Principles of interaction programming. The MIT Press, 2010.
* http://www.ibm.com/developerworks/library/wa-finitemach1/

## Development

Clone it from github. Do `bower install` to fetch the dependencies.