var expect = chai.expect;

describe('App module', function () {
    before(function (done) {
        require(['app', '../test/mocks/mockFb', '../test/mocks/mockRadio'], function (app, fb, radio) {
            module = app;
            this.fb = fb;
            this.radio = radio;
            done();
        }.bind(this))
    });
    describe('method: init', function () {
        it('should be a function', function () {
            expect(module.init).to.be.an.instanceOf(Function)
        });


        it('should call radio.on method to set up handler on fb/initialized event', function () {
            var radioOnSpy = sinon.spy(this.radio, 'on');

            module.init();

            sinon.assert.calledOnce(radioOnSpy);
            sinon.assert.calledWith(radioOnSpy, 'fb/initialized', module.initializeModules);
        });
        it ('should call fb.init method for firebase initialization', function() {
            var fbSpy = sinon.spy (this.fb, 'init');
            module.init();
            sinon.assert.calledOnce(fbSpy);
        })
    })

});
