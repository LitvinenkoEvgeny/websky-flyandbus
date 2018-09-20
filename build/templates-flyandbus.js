!function(s){try{s=angular.module("app")}catch(e){s=angular.module("app",[])}s.run(["$templateCache",function(e){e.put("components/search-variants/search-variants.html",'<div class="searchResultsPlain"><div class="searchResultsPlain__i"><div ng-repeat="(rowNum, priceRow) in vm.searchResult.priceRows" class="flight"><div class="flight__container"><a ng-repeat="segment in priceRow.segments" href="" fancybox="popupFlightDetail" ng-click="vm.flightDetail = segment" class="searchResultsPlain__link popup_js"><div class="flight__i"><div class="route_item"><div class="route__i route_container"><div class="route_table"><div class="dep"><div class="dep__date">{{ segment.flightsInfo.departuredate | formatDate: \'D MMM, dd\' }}</div><div class="dep__time">{{ segment.flightsInfo.departuretime }}</div><geo-marker prefix="dep__point" key="search-variants" city="segment.flightsInfo.origincity" cityname="segment.flightsInfo.origincityName" port="segment.flightsInfo.originport" portname="segment.flightsInfo.originportName"></geo-marker></div><div class="info"><i ng-repeat="flight in segment.flights" class="icon_plane"></i><div class="info__number"><wrap ng-if="segment.flights.length == 1">{{ segment.flights[0].company.code || segment.flights[0].company.code_en }}-{{ segment.flights[0].racenumber }}</wrap><wrap ng-if="segment.flights.length > 1">{{ \'web.popupOrderFlightDetail.flighttime\' | aliasStatic}}</wrap></div><div class="info__timeEnRoute">{{ segment.flightsInfo.flighttime | timeAsWords }}</div><div ng-if="segment.flights[0].landings.length" class="landingPlain">{{ vm.suffixCount(segment.flights[0].landings.length, ( \'web.searchResult.landings\' | aliasStatic)) }}</div></div><div class="arr"><div class="arr__date" ng-class="{ nextDay: segment.flightsInfo.arrivaldayshift, attention: segment.flightsInfo.arrivaldayshift }">{{ segment.flightsInfo.arrivaldate | formatDate: \'D MMM, dd\' }}</div><div class="arr__time">{{ segment.flightsInfo.arrivaltime }}</div><geo-marker prefix="arr__point" key="search-variants" city="segment.flightsInfo.destinationcity" cityname="segment.flightsInfo.destinationcityName" port="segment.flightsInfo.destinationport" portname="segment.flightsInfo.destinationportName"></geo-marker></div></div></div><div ng-if="segment.flightsInfo.connections.length" ng-repeat="connection in segment.flightsInfo.connections" class="route__i transferPlain"><span class="transferPlain__caption">{{ \'web.searchResult.connection\' | aliasStatic}}</span> <span class="transferPlain__text">{{ connection.cityName }}, <span>{{ connection.time | timeAsWords }}</span></span></div><div ng-if="!segment.flightsInfo.connections.length" class="route__i additional"><span class="additional__company">{{ \'web.choosenFlight.company\' | aliasStatic}} {{ segment.flights[0].company.name }}</span> <span class="additional__plane">{{ segment.flights[0].airplaneName || segment.flights[0].airplane }}</span></div></div></div></a></div><div class="flight__button"><a href="" ng-click="vm.selectVariant(rowNum)" class="btn btn_search">{{ \'web.buttons.buyPrice\' | aliasStatic}}&nbsp;<wrap ng-bind-html="{ value: priceRow.price.price, currency: priceRow.price.currency } | price"></wrap></a></div></div></div></div><popup-flight-detail detail="vm.flightDetail"></popup-flight-detail>')}])}(),function(s){try{s=angular.module("app")}catch(e){s=angular.module("app",[])}s.run(["$templateCache",function(e){e.put("components/selected-variant/selected-variant.html",'<div ng-if="vm.pricingVariant" class="choosenFlight" ng-class="{ control_disabled: vm.loading }"><div class="choosenFlight__i"><h2 class="title">{{ \'web.choosenFlight.header\' | aliasStatic}}</h2><div class="chooseResult" ng-class="{ \'chooseResult--hasRoundTripDiscount\': vm.roundTripDiscount }"><div class="chooseResult__i"><div class="col"><div class="col__item"><div ng-repeat="(segNum, segment) in vm.selectedVariantsInfo" ng-init="first" class="flight"><div class="route_item_container" ng-repeat="(flightNum, flight) in segment.flights" ng-init="isFirstFlightInSegment = $first"><div class="route_item"><div class="route__i route_container"><div class="route_table"><div class="dep"><div class="dep__heading" ng-if="isFirstFlightInSegment">Отправление</div><div class="dep__date" ng-class="{ nextDay: flight.departuredayshift, attention: flight.departuredayshift}">{{ flight.departuredate | formatDate: \'D MMM, dd\' }}</div><div class="dep__time">{{ flight.departuretime }}</div><geo-marker prefix="dep__point" key="selected-variant" city="flight.origincity" cityname="flight.origincityName" port="flight.originport" portname="flight.originportName"></geo-marker></div><div class="info"><i class="icon_plane"></i><div class="info__number">{{ flight.company.code_en }}-{{ flight.racenumber }}</div><div class="info__timeEnRoute">{{ flight.flighttime | timeAsWords }}</div></div><div class="arr"><div class="arr__heading" ng-if="isFirstFlightInSegment">прибытие</div><div class="arr__date" ng-class="{ nextDay: flight.arrivaldayshift, attention: flight.arrivaldayshift}">{{ flight.arrivaldate | formatDate: \'D MMM, dd\' }}</div><div class="arr__time">{{ flight.arrivaltime }}</div><geo-marker prefix="arr__point" key="selected-variant" city="flight.destinationcity" cityname="flight.destinationcityName" port="flight.destinationport" portname="flight.destinationportName"></geo-marker></div></div></div><div class="route__i additional"><div class="additional__heading" ng-if="isFirstFlightInSegment">Перевозчик</div><span class="additional__company">{{ \'web.choosenFlight.company\' | aliasStatic}} {{ flight.company.name }}</span> <span class="additional__company" ng-if="flight.operatingCompany">{{ \'web.search.results.operatingCompany\' | aliasStatic}} {{ flight.operatingCompany.name }}</span> <span class="additional__plane">{{ flight.airplaneName }}</span></div></div><div ng-if="segment.flightsInfo.connections[flightNum]" ng-init="connection=segment.flightsInfo.connections[flightNum]" class="transfer"><span class="transfer__text"><strong>{{ \'web.choosenFlight.connection\' | aliasStatic}} {{ connection.time | timeAsWords }}</strong></span> <span ng-if="connection.previousAirport && connection.nextAirport && connection.previousAirport != connection.nextAirport" class="terminalChange">{{ \'web.choosenFlight.airportChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousAirport }}</span> <span class="terminalName">{{ connection.nextAirport }}</span>)</span> <span ng-if="connection.previousAirport == connection.nextAirport && connection.previousTerminal && connection.nextTerminal && connection.previousTerminal != connection.nextTerminal" class="terminalChange">{{ \'web.choosenFlight.terminalChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousTerminal }}</span> <span class="terminalName">{{ connection.nextTerminal }}</span>)</span></div><div ng-repeat="landing in flight.landings" class="landing"><span class="landing__text"><strong>{{ \'web.searchScheduleResult.landing\' | aliasStatic}}</strong></span><p class="landing__airport">{{ landing.landingCityName }} ({{ landing.landingTime | timeAsWords }})</p></div></div><div ng-if="segment.flights.length > 1" class="timeEnRoute">{{ \'web.choosenFlight.flighttime\' | aliasStatic}} {{ segment.flightsInfo.flighttime | timeAsWords }}</div><brand-props-info ng-if="segment.brand" brand-name="segment.brandName" brand-available-props="segment.brandAvailableProps" brand-paid-props="segment.brandPaidProps" brand-unavailable-props="segment.brandUnavailableProps"><brand-props-info></brand-props-info></brand-props-info></div></div></div><div class="col"><div class="col__item"><div class="col__i"><div ng-if="vm.roundTripDiscount" class="roundTripDiscount"><div class="roundTripDiscount__i"><span class="roundTripDiscount__text" ng-bind-html="\'web.choosenFlight.roundTripDiscount\' | aliasStatic"></span> <span class="roundTripDiscount__summ" ng-bind-html="{ value: vm.roundTripDiscount, currency: vm.pricingVariant.currency } | price"></span></div></div><div class="passengers"><div ng-repeat="(pasNum, pasData) in vm.pricingVariant.passengerCategories" class="item"><div class="item__i dropWrapper"><a ng-click="vm.passDropOpened[pasNum] = !vm.passDropOpened[pasNum];" href="" class="showDrop_js" ng-class="{ active: vm.passDropOpened[pasNum] }"><table><tr><td><p>{{ pasData.passengerCountLabel }}</p></td><td ng-bind-html="{ value: pasData.price, currency: vm.pricingVariant.currency } | price"></td></tr></table></a><div class="drop" ng-class="{ active: vm.passDropOpened[pasNum] }"><div class="drop__i"><table><tr><td>{{ \'web.choosenFlight.fare\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.fare, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="!pasData.groupedTaxes" class="tax tax-all"><td>{{ \'web.choosenFlight.tax\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.tax, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="pasData.groupedTaxes" ng-repeat="taxGroup in pasData.groupedTaxes" class="tax tax-grouped"><td>{{ \'web.choosenFlight.taxGroup.\' | aliasWithPrefix:taxGroup.code }}</td><td ng-bind-html="{ value: taxGroup.value, currency: vm.pricingVariant.currency } | price"></td></tr><tr ng-if="pasData.otherTaxes" class="tax tax-other"><td>{{ \'web.choosenFlight.otherTaxes\' | aliasStatic}}</td><td ng-bind-html="{ value: pasData.otherTaxes, currency: vm.pricingVariant.currency } | price"></td></tr></table></div></div></div></div></div><div class="bottom"><div class="total"><table><tr><td>{{ \'web.choosenFlight.totalPrice\' | aliasStatic}}</td><td><span ng-bind-html="{ value: vm.pricingVariant.totalPrice, currency: vm.pricingVariant.currency } | price"></span></td></tr></table><p class="right"><a href="" fancybox="popupRemark">{{ \'web.choosenFlight.remarkLink\' | aliasStatic}}</a></p></div><div class="bonus" ng-if="vm.pricingVariant.ffpSumm"><table><tbody><tr><td><div class="accruedMiles"><i class="icon_milesPay"></i>{{ \'web.choosenFlight.ffpSumm\' | aliasStatic}}</div></td><td ng-bind-html="{ value: vm.pricingVariant.ffpSumm, currency: \'miles\' } | price"></td></tr></tbody></table></div><div class="bonus" ng-if="vm.ffpBonus"><table><tbody><tr><td><div class="accruedMiles"><i class="icon_milesPay"></i>{{ \'web.choosenFlight.ffpBonus\' | aliasStatic}}</div></td><td ng-bind-html="{ value: vm.ffpBonus, currency: \'miles\' } | price"></td></tr></tbody></table></div></div></div></div></div></div></div></div></div><popup-remark></popup-remark>')}])}(),function(s){try{s=angular.module("app")}catch(e){s=angular.module("app",[])}s.run(["$templateCache",function(e){e.put("screens/passengers/passengers.html",'<app-loader ng-if="vm.loading"></app-loader><section class="out" ng-if="!vm.loading"><app-header></app-header><div class="searchSteps"><div class="wrap"><div class="searchSteps__i"><ol><li class="prev"><a href="{{ \'web.site.firstStepUrl\' | aliasStatic }}">{{ \'web.steps.search\' | aliasStatic}}</a></li><li class="prev"><a href="#{{$root.ROUTES.SEARCH}}">{{ \'web.steps.selectVariant\' | aliasStatic}}</a></li><li class="active">{{ (vm.passengers.length == 1) ? ( \'web.steps.passenger\' | aliasStatic) : ( \'web.steps.passengers\' | aliasStatic) }}</li><li>{{ \'web.steps.extraServices\' | aliasStatic}}</li><li>{{ \'web.steps.payment\' | aliasStatic}}</li><li>{{ \'web.steps.order\' | aliasStatic}}</li></ol></div></div></div><div ng-if="vm.orderInfo && vm.passengersCheck" class="searchParams searchParams_passengers"><div class="wrap"><div class="searchParams__i"><div class="info"><ul><li><geo-marker prefix="dep__point" key="passengers" city="vm.orderInfo.flights[0].flights[0].origincity" cityname="vm.orderInfo.flights[0].flights[0].origincityName" port="vm.orderInfo.flights[0].flights[0].originport" portname="vm.orderInfo.flights[0].flights[0].originportName"></geo-marker>–<geo-marker prefix="arr__point" key="passengers" city="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcity" cityname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcityName" port="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationport" portname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationportName"></geo-marker><wrap ng-if="vm.orderInfo.flights.length == 2">–<geo-marker prefix="arr__point" key="passengers" city="vm.orderInfo.flights[1].flights[vm.orderInfo.flights[0].flights.length-1].destinationcity" cityname="vm.orderInfo.flights[1].flights[vm.orderInfo.flights[0].flights.length-1].destinationcityName" port="vm.orderInfo.flights[1].flights[vm.orderInfo.flights[0].flights.length-1].destinationport" portname="vm.orderInfo.flights[1].flights[vm.orderInfo.flights[0].flights.length-1].destinationportName"></geo-marker></wrap></li><li>{{ vm.orderInfo.flights[0].date | formatDate: \'DD.MM.YY\' }} <span ng-if="vm.orderInfo.flights.length == 2">– {{ vm.orderInfo.flights[1].date | formatDate: \'DD.MM.YY\' }}</span></li><li ng-show="vm.orderInfo.flights.length == 2">{{ \'web.searchForm.roundtrip\' | aliasStatic}}</li><li ng-show="vm.orderInfo.flights.length == 1">{{ \'web.searchForm.oneway\' | aliasStatic}}</li><li>{{ vm.getDescPassCountStr() }}</li></ul></div></div></div></div><div class="content"><div class="wrap wrap_pt32"><div class="content__i"><div class="passengersInfo"><div class="passengersInfo__i"><h2>{{ (vm.passengers.length == 1) ? ( \'web.passengerInfo.header\' | aliasStatic) : ( \'web.passengersInfo.header\' | aliasStatic) }}</h2><div ng-repeat="alertMessage in vm.alertMessages" class="infoMessage infoMessage_error"><div class="infoMessage__i"><p ng-bind-html="alertMessage | aliasDynamic"></p></div></div><p class="intAttention" ng-if="vm.passengersCheck.isLatinNamesOnly && !(\'site.foreignSite\' | param)">{{ \'web.messages.passNamesLabel\' | aliasStatic}} <span ng-bind-html="\'web.messages.passNamesLatin\' | aliasStatic"></span></p><p class="login" ng-if="!vm.authoriseCustomer && !vm.accountExist">{{ \'web.passengersInfo.loginInvitationMessage\' | aliasStatic}} <a href="" fancybox="popupLogin">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><form class="passengerForm__js {{ vm.getOrderCountriesCssClasses() }}" ng-repeat="(passengerNumber, passenger) in vm.passengers" name="vm.passengerForms[{{passengerNumber}}]" form-submit-error-highlight="" novalidate=""><input type="hidden" name="categoryCode" ng-model="passenger.categoryCode"><div class="item"><div class="item__i"><div class="itemName"><div class="itemName__number"><span ng-show="vm.passengers.length > 1">{{ passengerNumber + 1 }}.</span> {{ \'web.passengerCategory.\' | aliasWithPrefix:passenger.categoryCode }}</div><div class="selectWrap itemName__ui-select" ng-if="vm.authoriseCustomer && vm.privatePassengers.length"><ui-select name="privatePassenger" search-enabled="false" ng-model="passenger.privatePassenger" theme="selectize" ui-select-custom="" ng-change="vm.setPrivatePassenger(passengerNumber)" class="ui-select-passengers-header"><ui-select-match placeholder="{{(vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName) || ( \'web.passengersInfo.privatePassengerSelect\' | aliasStatic)}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}">{{vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}</ui-select-match><ui-select-choices repeat="privatePassenger.num as (num, privatePassenger) in vm.privatePassengers"><div class="ui-select-passengers-data">{{ vm.currentLanguage !== \'ru\' && privatePassenger.value.firstNameEn ? privatePassenger.value.firstNameEn : privatePassenger.value.firstName }} {{ vm.currentLanguage !== \'ru\' && privatePassenger.value.lastNameEn ? privatePassenger.value.lastNameEn : privatePassenger.value.lastName }}</div><div class="ui-select-passengers-birth">{{ privatePassenger.value.dateOfBirth }}</div></ui-select-choices></ui-select></div></div><table class="passengerInfo"><tbody><tr><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.lastName\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].lastName" format-alias="passenger.documentType == \'PSP\' ? \'web.messages.pspFormatName\' : \'web.messages.format\'" touched="vm.submitTouched"></error-message><input type="text" name="lastName" ng-model="passenger.lastName" ng-blur="vm.lastNameBlurHandler(passengerNumber)" required="" ng-pattern="passenger.documentType == \'PSP\' ? vm.passengerLastNameLatRegexp : vm.passengersCheck.passengerLastNameRegexp" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.lastName\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.firstName\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].firstName" format-alias="passenger.documentType == \'PSP\' ? \'web.messages.pspFormatName\' : \'web.messages.format\'" touched="vm.submitTouched"></error-message><input type="text" name="firstName" ng-model="passenger.firstName" ng-blur="vm.firstNameBlurHandler(passengerNumber)" required="" ng-pattern="passenger.documentType == \'PSP\' ? vm.passengerFirstNameLatRegexp : vm.passengersCheck.passengerFirstNameRegexp" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.firstName\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.dateOfBirth\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].dateOfBirth" touched="vm.submitTouched"></error-message><input type="text" name="dateOfBirth" ng-model="passenger.dateOfBirth" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.rangeBirthByPassenger[passengerNumber].from }}" data-max-date="{{ vm.rangeBirthByPassenger[passengerNumber].to }}" class="textInp" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}" placeholder="{{ \'web.passengersInfo.dateOfBirth\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.gender\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].gender" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.gender" theme="selectize" name="gender" search-enabled="false" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.privatePassengers.gender\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="gender.code as gender in vm.passangersAlias"><div ng-bind-html="gender.name"></div></ui-select-choices></ui-select></div></td></tr><tr><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.nationality\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].nationality" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.nationality" theme="selectize" name="nationality" search-enabled="{{ !vm.isMobile }}" skip-focusser="true" ng-change="vm.nationalityChangeHandler(passengerNumber)" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected[vm.localNamePropName] || ( \'web.privatePassengers.nationality\' | aliasStatic) }}">{{$select.selected[vm.localNamePropName]}}</ui-select-match><ui-select-choices repeat="country.code as country in vm.countriesList | filter: {[vm.localNamePropName]: $select.search} track by country.code"><div ng-bind-html="country[vm.localNamePropName]"></div></ui-select-choices></ui-select></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.documentType\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].documentType" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.documentType" name="documentType" theme="selectize" search-enabled="false" ng-change="vm.documentTypeChangeHandler(passengerNumber)" class="ui-select-custom ui-select-passengers" ui-select-custom="" error-highlight="{{vm.submitTouched}}" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.passengersInfo.documentType\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="doc.code as doc in vm.documentTypesByPassenger[passengerNumber]"><div class="{{ \'documentTypeOption_\' + doc.code }}" ng-bind-html="doc.name"></div></ui-select-choices></ui-select></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.documentNumber\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].documentNumber" touched="vm.submitTouched"></error-message><info-message ng-if="passenger.documentType && vm.hasAlias(\'web.messages.formatDocumentNumber.\' + passenger.documentType)" touched="vm.submitTouched" control="vm.passengerForms[passengerNumber].documentNumber" format-alias="\'web.messages.formatDocumentNumber.\' + passenger.documentType"></info-message><input type="text" name="documentNumber" ng-model="passenger.documentNumber" required="" clean-document-number="" ng-pattern="vm.documentNumberRegexByPassenger[passengerNumber]" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.documentNumber\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp" ng-if="vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode)"><label class="inp-label">{{ \'web.passengersInfo.label.documentDate\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].documentDate" touched="vm.submitTouched"></error-message><input type="text" name="documentDate" ng-model="passenger.documentDate" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode) }}" class="textInp" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" placeholder="{{ \'web.passengersInfo.documentDate\' | aliasStatic}}" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}" prevent-browser-suggestions=""></div></td></tr><tr ng-if="vm.passengersRulesByNum[passengerNumber].additionalDocuments"><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.additionalDocumentType\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].additionalDocumentType" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.additionalDocumentType" name="additionalDocumentType" theme="selectize" search-enabled="false" class="ui-select-custom ui-select-passengers" ui-select-custom="" error-highlight="{{vm.submitTouched}}" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.passengersInfo.additionalDocumentType\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="doc.code as doc in vm.passengersRulesByNum[passengerNumber].additionalDocuments"><div class="{{ \'documentTypeOption_\' + doc.code }}" ng-bind-html="doc.name"></div></ui-select-choices></ui-select></div></td><td><div class="inp"><label class="inp-label">{{ \'web.passengersInfo.label.additionalDocumentNumber\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].additionalDocumentNumber" touched="vm.submitTouched"></error-message><input type="text" name="additionalDocumentNumber" ng-model="passenger.additionalDocumentNumber" required="" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.additionalDocumentNumber\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr><tr ng-if="passenger.type == \'ADULT\' && (vm.passengersCheck.allowEmail || vm.passengersCheck.allowPhone)"><td><div class="inp" ng-if="vm.passengersCheck.allowPhone"><label class="inp-label">{{ \'web.passengersInfo.label.phone\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" ng-model="passenger.phone" ng-blur="vm.phoneBlurHandler(passengerNumber)" phone-mask="" ng-required="vm.passengersCheck.requirePhone" ng-pattern="\'customer.phoneRegexp\' | param" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.phone\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp" ng-if="vm.passengersCheck.allowEmail"><label class="inp-label">{{ \'web.passengersInfo.label.email\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].email" touched="vm.submitTouched"></error-message><input type="email" name="email" ng-model="passenger.email" ng-blur="vm.emailBlurHandler(passengerNumber)" ng-required="vm.passengersCheck.requireEmail" ng-pattern="vm.passengersCheck.emailRegex" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.email\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr><tr ng-if="passenger.type == \'ADULT\' && vm.allowBonusCard"><td><div class="inp"><div class="customCheckbox"><label><input class="haveCart_js" type="checkbox" name="hasBonusCard" ng-model="passenger.hasBonusCard" ng-change="passenger.bonusCard = \'\';"> <span></span> {{ \'web.passengersInfo.hasBonusCard\' | aliasStatic}}</label></div></div></td><td><div class="inp" ng-class="{ invisibleBonusCard: !passenger.hasBonusCard, visibleBonusCard: passenger.hasBonusCard }"><label class="inp-label">{{ \'web.passengersInfo.label.bonusCard\' | aliasStatic}}</label><error-message control="vm.passengerForms[passengerNumber].bonusCard" touched="vm.submitTouched"></error-message><input type="text" name="bonusCard" ng-model="passenger.bonusCard" ng-pattern="\'passengers.bonusCardRegex\' | param" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.passengersInfo.bonusCard\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr></tbody></table></div></div></form><form ng-if="vm.orderInfo && vm.passengersCheck" name="vm.customerForm" class="customerForm__js" form-submit-error-highlight="" novalidate=""><div class="item item_contact"><div class="item__i"><h3 class="itemName">{{ \'web.passengersInfo.customerHeader\' | aliasStatic}}</h3><table><tbody><tr><td><div class="inp"><error-message control="vm.customerForm.lastName" touched="vm.submitTouched"></error-message><input type="text" name="lastName" ng-model="vm.customer.lastName" required="" ng-pattern="\'customer.lastNameRegexp\' | param" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.customerInfo.lastName\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><error-message control="vm.customerForm.firstName" touched="vm.submitTouched"></error-message><input type="text" name="firstName" ng-model="vm.customer.firstName" required="" ng-pattern="\'customer.firstNameRegexp\' | param" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.customerInfo.firstName\' | aliasStatic}}" prevent-browser-suggestions=""></div></td></tr><tr><td><div class="inp"><error-message control="vm.customerForm.phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" ng-model="vm.customer.phone" phone-mask="" ng-pattern="\'customer.phoneRegexp\' | param" required="" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.customerInfo.phone\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><error-message control="vm.customerForm.email" touched="vm.submitTouched"></error-message><input type="email" name="email" ng-model="vm.customer.email" required="" ng-pattern="\'site.emailRegexp\' | param" ng-change="vm.checkLogin()" class="textInp" error-highlight="{{vm.submitTouched}}" placeholder="{{ \'web.customerInfo.email\' | aliasStatic}}" prevent-browser-suggestions=""></div></td></tr><tr ng-if="(\'customer.showIsSmsSend\' | param) || (\'customer.showIsEmailSend\' | param)"><td><div class="inp" ng-if="\'customer.showIsSmsSend\' | param"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.sendSms"> <span></span> {{ \'web.customerInfo.sendSms\' | aliasStatic}}</label></div></div></td><td><div class="inp" ng-if="\'customer.showIsEmailSend\' | param"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.sendEMail"> <span></span> {{ \'web.customerInfo.sendEMail\' | aliasStatic}}</label></div></div></td></tr><tr ng-if="!vm.authoriseCustomer && vm.allowCreateAccount && vm.customer.createAccount"><td><div class="inp"><error-message control="vm.customerForm.password" touched="vm.submitTouched"></error-message><input type="password" name="password" ng-model="vm.customer.password" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.passwordRepeat }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1000" placeholder="{{ \'web.customerInfo.password\' | aliasStatic}}" prevent-browser-suggestions=""></div></td><td><div class="inp"><error-message control="vm.customerForm.passwordRepeat" touched="vm.submitTouched"></error-message><input type="password" name="passwordRepeat" ng-model="vm.customer.passwordRepeat" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.password }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1001" placeholder="{{ \'web.customerInfo.passwordRepeat\' | aliasStatic}}" prevent-browser-suggestions=""></div></td></tr><tr><td colspan="2"><div class="inp" ng-if="!vm.authoriseCustomer && vm.allowCreateAccount"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.createAccount"> <span></span> {{ \'web.passengersInfo.createAccountInvitationMessage\' | aliasStatic}}</label></div></div></td></tr></tbody></table></div></div></form><p class="login" ng-if="!vm.authoriseCustomer && vm.accountExist">{{ \'web.passengersInfo.accountExistMessage\' | aliasStatic}} {{ vm.customer.email }} <a href="" fancybox="popupLogin" data-login="{{ vm.customer.email }}">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><div ng-if="vm.errorMessage" class="infoMessage infoMessage_error"><div class="infoMessage__i"><p ng-bind-html="vm.errorMessage | aliasDynamic"></p></div></div><div ng-if="\'passengers.usePersonalDataAgreeCheckbox\' | param" class="iconfirm"><div class="iconfirm__i"><div class="customCheckbox"><label><input type="checkbox" id="personalDataShareAgreeChb" ng-model="vm.personalDataShareAgree"> <span></span></label><div ng-if="!vm.personalDataShareAgree && vm.submitButtonHover" class="errorMessage">{{ \'web.personalDataShareAgreeTooltip\' | aliasStatic}}</div></div><p><label for="personalDataShareAgreeChb"><wrap ng-bind-html="\'web.personalDataShareAgree\' | aliasStatic"></wrap></label></p></div></div><div class="passengers-form-footer" ng-bind-html="\'web.passengersInfo.footer\' | aliasStatic"></div></div></div><div class="searchResultsControl"><div class="searchResultsControl__i"><a href="#{{$root.ROUTES.SEARCH}}" class="btn btn_back">{{ \'web.buttons.back\' | aliasDynamic }}</a> <a href="" ng-click="vm.submitHandler()" class="btn btn_next" ng-class="{ disabled: (!vm.personalDataShareAgree && (\'passengers.usePersonalDataAgreeCheckbox\' | param)) }" ng-mouseenter="vm.swithcSubmitButtonHoverState();" ng-mouseleave="vm.swithcSubmitButtonHoverState();" ng-if="!vm.submitLoading"><span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a> <a href="" class="btn btn_next disabled loading-start" ng-if="vm.submitLoading"><span class="loader"><img alt="" src="themes/websky/assets/static/img/general/form/loader-circle-64.gif"></span> <span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a></div></div></div></div></div><div class="push"></div></section><app-footer ng-if="!vm.loading"></app-footer>')}])}();