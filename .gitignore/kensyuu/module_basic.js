import { Article, getTriangle } from './App.js';

console.log(getTriangle(10, 5)); // 25

const a = new Article();
console.log(a.getAppTitle()); // Reactアプリ

import { getTriangle as tri } from './App.js';
console.log(tri(10, 5)); // 25

import * as app from './App.js';
console.log(app.getTriangle(10, 5)); // 25