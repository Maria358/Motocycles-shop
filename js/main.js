import MotocycleController from "../motocycle/motocycleController.js";
import SearchController from "../search/searchController.js";
import CategoryController from '../categoryFilter/categoryController.js'
import windowController from './../window/windowController.js';

const search = new SearchController();
const motocycle = new MotocycleController();
const category = new CategoryController();
const window = new windowController();

motocycle.init();
