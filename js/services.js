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

/* Services */
App.Services = angular.module('App.Services', []);

App.Services.value('appVersion', '0.0.1');

App.Services.factory('versionControl', [
	'$log',
	function($log) {
		return function(v) {
			//$log.log(v);

			v = v.split('.');
			//$log.log(v);

			var major = parseInt(v[0]);
			var minor = parseInt(v[1]);
			var build = parseInt(v[2]);

			//$log.log(major, minor,build);

			var version = {
				major: major || 0,
				minor: minor || 0,
				build: build || 0
			};

			return version;
		};
	}
]);