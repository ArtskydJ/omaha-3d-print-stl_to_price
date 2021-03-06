﻿var test = require('tap').test
var Database = require('omaha-3d-print-database')
var db = new Database()
var PriceFromHash = require("../priceFromHash.js")

var fakeHash = "Md5HashesAre32CharactersInLength"
var fakeObj = { volume: 16387 }

test("test getting a price from a hash", function test1(t) {
	t.plan(5)
	var priceFromHash = new PriceFromHash(db)
	db.insert(fakeHash, fakeObj, function doneInserting(err) {
		t.notOk(err, "no error")
		priceFromHash(fakeHash, function cbGetPrice2(error, price) {
			t.notOk(error, "there is no error")
			t.ok(price, "price is truthy")
			t.ok(price>13.60317, "returns correct price")
			t.ok(price<13.60318, "returns correct price")
			t.end()
		})
	})
})