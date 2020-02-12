var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

//models
var db = require("./models");

var PORT = process.env.PORT || 3000;

//Express
var app = express();