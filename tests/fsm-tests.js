describe ('Finite State Machine', function () {
	describe ('Construction', function () {

		beforeEach(function() {

		})

		it('is created using nice chaining syntax', function() {
			var door = FSM.create()
				.when('closed')
					.on('lock')
						.do(function(){ console.log('locking'); })
						.andBe('locked')
				.startAs('closed');
		});

		it('transits states', function() {
			var door = FSM.create()
				.when('closed')
					.on('lock')
						.do(function(){})
						.andBe('locked')
				.startAs('closed');

			door.handleEvent('lock');
			door.currentState.should.equal('locked');
		});
	});

	describe('Security', function(){
		it('it cannot assign the same state twice');
		it('it cannot be changed after initalState has been set');
		it('it needs to be started with an inital state before use', function(){
			var door = FSM.create()
				.when('closed')
					.on('lock')
						.do(function(){})
						.andBe('locked');
			chai.expect(function(){ door.handleEvent('lock') }).to.throw('The FSM must be started with .startAs( aString ) before use');

		});
		it('accepts only the defined states as inital state');
		it('raises an exception when called for undefined state/event combinations', function(){
			var door = FSM.create()
				.when('closed')
					.on('lock')
						.do(function(){})
						.andBe('locked')
				.startAs('closed');
			chai.expect(function(){ door.handleEvent('unlock') }).to.throw('Handling the event \'unlock\' is not defined for state \'closed\'');
		});
	});
});

