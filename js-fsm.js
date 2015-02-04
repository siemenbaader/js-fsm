var FSM = (function(){
	
	var FSM = Classy.newClass()
		.name('FSM')
		.field('states', [])
		.field('assigningState')
		.field('assigningEvent')
		.field('initialState')
		.field('currentState')
		.method('when', function( aString ){
			this.assigningState = aString;
			this.states[this.assigningState] = [];
			return this;
		})
		.method('on', function( aString ){
			this.assigningEvent = aString;
			this.states[this.assigningState][this.assigningEvent] = {
				action: null,
				resultingState: null
			};
			return this;
		})
		.method('do', function( aFunction ) {
			this.states[this.assigningState][this.assigningEvent].action = aFunction;
			return this;
		})
		.method('andBe', function( aFunction ) {
			this.states[this.assigningState][this.assigningEvent].resultingState = aFunction;
			return this;
		})
		.method('startAs', function( aString ) {
			this.initialState = aString;
			this.currentState = this.initialState;
			return this;
		})
		.method('transitionFor', function( aStateString, anEventString ){
			return this.states[aStateString][anEventString];
		})
		.method('handleEvent', function( aString ){
			if (!this.initialState ) {
				throw new Error('The FSM must be started with .startAs( aString ) before use');
			}
			var transition = this.transitionFor( this.currentState, aString );

			if ( !transition ) {
				throw new Error('Handling the event \'' + aString +'\' is not defined for state \'' + this.currentState + '\'');
			}

			transition.action();
			this.currentState = transition.resultingState;
		})
		;

	return FSM;

})()