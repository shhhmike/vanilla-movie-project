'use strict'


//DOM Elements
const searchButton = document.querySelector('.search-btn');
const searchField = document.querySelector('.search-data');
const searchResultsTitle = document.getElementById('Title');
const unorderedList = document.getElementById('UL');
const main = document.querySelector('.main')




fetch(`https://api.themoviedb.org/3/search/movie?api_key=b55a703a0746fd72f6219dd74056c81f&query=${searchField.value}`)
