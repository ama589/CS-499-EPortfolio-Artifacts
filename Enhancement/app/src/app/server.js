var express = require('express');
var path = require("path");
var bodyParser=require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017")