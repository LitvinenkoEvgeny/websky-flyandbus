angular.module('ox').filter('timeAsWords', ['backend', function (backend) {
    return function (str) {
        var strArr = String(str).split(':');

        if (strArr.length === 2) {
            str = parseInt(strArr[0], 10) + ' ' + backend.getAlias('web.reduction.hour');

            if (strArr[1] !== '00') {
                var minutes = parseInt(strArr[1], 10);

                if (minutes < 10){
                    minutes = '0' + minutes;
                }

                str += ' ' + minutes + ' ' + backend.getAlias('web.reduction.minute');
            }
        }

        return str;
    };
}]);
