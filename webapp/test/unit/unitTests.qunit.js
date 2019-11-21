/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ui5/template/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});