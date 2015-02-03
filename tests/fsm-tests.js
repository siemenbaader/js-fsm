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

	});

	describe('Security', function(){
		it('it cannot assign the same state twice');
		it('it cannot be changed after initalState has been set');
		it('it needs to be started by setting the initalState before use');
		it('accepts only the defined states as inital state')
	});
});

