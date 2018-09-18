!function(a){try{a=angular.module("app")}catch(i){a=angular.module("app",[])}a.run(["$templateCache",function(i){i.put("components/selected-variant/selected-variant.html",'<div ng-if="vm.pricingVariant" class="choosenFlight" ng-class="{ control_disabled: vm.loading }"><div class="choosenFlight__i"><h2 class="title">{{ \'web.choosenFlight.header\' | aliasStatic}}</h2><div class="chooseResult" ng-class="{ \'chooseResult--hasRoundTripDiscount\': vm.roundTripDiscount }"><div class="chooseResult__i"><div class="col"><div class="col__item"><div ng-repeat="(segNum, segment) in vm.selectedVariantsInfo" ng-init="isFirstSegment = $first" class="flight"><div class="route_item_container" ng-repeat="(flightNum, flight) in segment.flights"><div class="route_item"><div class="route__i route_container"><div class="route_table"><div class="dep"><div class="dep__heading" ng-if="isFirstSegment">Отправление</div><div class="dep__date" ng-class="{ nextDay: flight.departuredayshift, attention: flight.departuredayshift}">{{ flight.departuredate | formatDate: \'D MMM, dd\' }}</div><div class="dep__time">{{ flight.departuretime }}</div><geo-marker prefix="dep__point" key="selected-variant" city="flight.origincity" cityname="flight.origincityName" port="flight.originport" portname="flight.originportName"></geo-marker></div><div class="info"><i class="icon_plane"></i><div class="info__number">{{ flight.company.code_en }}-{{ flight.racenumber }}</div><div class="info__timeEnRoute">{{ flight.flighttime | timeAsWords }}</div></div><div class="arr"><div class="arr__heading" ng-if="isFirstSegment">прибытие</div><div class="arr__date" ng-class="{ nextDay: flight.arrivaldayshift, attention: flight.arrivaldayshift}">{{ flight.arrivaldate | formatDate: \'D MMM, dd\' }}</div><div class="arr__time">{{ flight.arrivaltime }}</div><geo-marker prefix="arr__point" key="selected-variant" city="flight.destinationcity" cityname="flight.destinationcityName" port="flight.destinationport" portname="flight.destinationportName"></geo-marker></div></div></div><div class="route__i additional"><div class="additional__heading" ng-if="isFirstSegment">Перевозчик</div><span class="additional__company">{{ \'web.choosenFlight.company\' | aliasStatic}} {{ flight.company.name }}</span> <span class="additional__company" ng-if="flight.operatingCompany">{{ \'web.search.results.operatingCompany\' | aliasStatic}} {{ flight.operatingCompany.name }}</span> <span class="additional__plane">{{ flight.airplaneName }}</span></div></div><div ng-if="segment.flightsInfo.connections[flightNum]" ng-init="connection=segment.flightsInfo.connections[flightNum]" class="transfer"><span class="transfer__text"><strong>{{ \'web.choosenFlight.connection\' | aliasStatic}} {{ connection.time | timeAsWords }}</strong></span> <span ng-if="connection.previousAirport && connection.nextAirport && connection.previousAirport != connection.nextAirport" class="terminalChange">{{ \'web.choosenFlight.airportChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousAirport }}</span> <span class="terminalName">{{ connection.nextAirport }}</span>)</span> <span ng-if="connection.previousAirport == connection.nextAirport && connection.previousTerminal && connection.nextTerminal && connection.previousTerminal != connection.nextTerminal" class="terminalChange">{{ \'web.choosenFlight.terminalChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousTerminal }}</span> <span class="terminalName">{{ connection.nextTerminal }}</span>)</span></div><div ng-repeat="landing in flight.landings" class="landing"><span class="landing__text"><strong>{{ \'web.searchScheduleResult.landing\' | aliasStatic}}</strong></span><p class="landing__airport">{{ landing.landingCityName }} ({{ landing.landingTime | timeAsWords }})</p></div></div><div ng-if="segment.flights.length > 1" class="timeEnRoute">{{ \'web.choosenFlight.flighttime\' | aliasStatic}} {{ segment.flightsInfo.flighttime | timeAsWords }}</div><brand-props-info ng-if="segment.brand" brand-name="segment.brandName" brand-available-props="segment.brandAvailableProps" brand-paid-props="segment.brandPaidProps" brand-unavailable-props="segment.brandUnavailableProps"><brand-props-info></brand-props-info></brand-props-info></div></div></div><div class="col"><div class="col__item"><div class="col__i"><div ng-if="vm.roundTripDiscount" class="roundTripDiscount"><div class="roundTripDiscount__i"><span class="roundTripDiscount__text" ng-bind-html="\'web.choosenFlight.roundTripDiscount\' | aliasStatic"></span> <span class="roundTripDiscount__summ" ng-bind-html="{ value: vm.roundTripDiscount, currency: vm.pricingVariant.currency } | price"></span></div></div><div class="passengers"><div ng-repeat="(pasNum, pasData) in vm.pricingVariant.passengerCategories" class="item"><div class="item__i dropWrapper"><a ng-click="vm.passDropOpened[pasNum] = !vm.passDropOpened[pasNum];" href="" class="showDrop_js" ng-class="{ active: vm.passDropOpened[pasNum] }"><table><tr><td><p>{{ pasData.passengerCountLabel }}</p></td><td ng-bind-html="{ value: pasData.price, currency: vm.pricingVariant.currency } | price"></td></tr></table></a><div class="drop" ng-class="{ active: vm.passDropOpened[pasNum] }"><div class="drop__i"><table><tr><td>{{ \'web.choosenFlight.fare\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.fare, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="!pasData.groupedTaxes" class="tax tax-all"><td>{{ \'web.choosenFlight.tax\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.tax, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="pasData.groupedTaxes" ng-repeat="taxGroup in pasData.groupedTaxes" class="tax tax-grouped"><td>{{ \'web.choosenFlight.taxGroup.\' | aliasWithPrefix:taxGroup.code }}</td><td ng-bind-html="{ value: taxGroup.value, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="pasData.otherTaxes" class="tax tax-other"><td>{{ \'web.choosenFlight.otherTaxes\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.otherTaxes, currency: vm.pricingVariant.currency } | price"></td></tr></table></div></div></div></div></div><div class="bottom"><div class="total"><table><tr><td>{{ \'web.choosenFlight.totalPrice\' | aliasStatic}}</td><td><span ng-bind-html="{ value: vm.pricingVariant.totalPrice, currency: vm.pricingVariant.currency } | price"></span></td></tr></table><p class="right"><a href="" fancybox="popupRemark">{{ \'web.choosenFlight.remarkLink\' | aliasStatic}}</a></p></div><div class="bonus" ng-if="vm.pricingVariant.ffpSumm"><table><tbody><tr><td><div class="accruedMiles"><i class="icon_milesPay"></i>{{ \'web.choosenFlight.ffpSumm\' | aliasStatic}}</div></td><td ng-bind-html="{ value: vm.pricingVariant.ffpSumm, currency: \'miles\' } | price"></td></tr></tbody></table></div><div class="bonus" ng-if="vm.ffpBonus"><table><tbody><tr><td><div class="accruedMiles"><i class="icon_milesPay"></i>{{ \'web.choosenFlight.ffpBonus\' | aliasStatic}}</div></td><td ng-bind-html="{ value: vm.ffpBonus, currency: \'miles\' } | price"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div><popup-remark></popup-remark>')}])}();