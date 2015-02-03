var FSM = (function(){
	
	var FSM = Classy.newClass()
		.name('FSM')
		.field('states', [])
		.field('assigningState')
		.field('assigningEvent')
		.field('initialState')
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
			this.states[this.assigningState][this.assigningEvent]['action'] = aFunction;
			return this;
		})
		.method('andBe', function( aFunction ) {
			this.states[this.assigningState][this.assigningEvent].resultingState = aFunction;
			return this;
		})
		.method('startAs', function( aString ) {
			this.initialState = aString;
		})
		;

	return FSM;

})()