/* 
 * Copyright (C) 2014 Enrico Reinsdorf <enrico.reinsdorf@re-design.de>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
'use strict';

/* Controllers */
App.Controllers = angular.module('App.Controllers', []);

/* MainCtrl */
App.Controllers.controller('MainCtrl', [
	'$scope','$log',

	function ($scope,$log) {
		
		$scope.rate = 100;
		$scope.period = 10;
		$scope.dynamic = 5;
		$scope.interest = 2;
		$scope.result = 0;
		
		$scope.calculate = function calculate ($event) {
			//$log.log($event);
			$scope.result = 0;
			
			var _rate = $scope.rate;
			
			for(var i=0; i<$scope.period; i++) {
				var _jaehrlich = _rate*12;
				//$log.log(_jaehrlich);	
				
				$scope.result += _jaehrlich;
				
				var _zinsen = $scope.interest*$scope.result/100;
				$scope.result += _zinsen;
				
				_rate += $scope.dynamic*100/_rate;
			}
			
		};
		$scope.calculate();
	}
]);