var MontyHallSimulation = (function () {
    'use strinct';

    return function (options) {

        var self = this;
        var doors = [0, 0, 0];
        var count = 0, cars = 0, goats = 0;

        var running = false;

        options = options || {};

        var _run = function () {
            var loop = function () {
                var lopp = _setupDoors();
                var guess = _getRandomDoorIndex();

                if (options.change_door) {
                    doors[guess] ? goats++ : cars++;
                } else {
                    doors[guess] ? cars++ : goats++;
                }

                count++;

                if (options.on_update) {
                    options.on_update.call(self, count, goats, cars);
                }

                if (running) {
                    setTimeout(loop, options.interval || 1);
                }
            };

            loop();
        };

        var _getRandomDoorIndex = function () {
            return Math.floor(Math.random() * 3);
        };

        var _setupDoors = function () {
            doors = [0, 0, 0];

            doors[_getRandomDoorIndex()] = 1;
        };

        self.start = function () {
            if (running) {
                return;
            }

            running = true;
            _run();

            if (options.on_start) {
                options.on_start.call(self);
            }
        };

        self.stop = function () {
            running = false;

            if (options.on_stop) {
                options.on_stop.call(self);
            }
        };

        self.reset = function () {
            count = goats = cars = 0;

            if (options.on_reset) {
                options.on_reset.call(self);
            }
        };
    };
}());
