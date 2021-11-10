import MotocycleController from "../motocycle/motocycleController.js";
import SearchController from "../search/searchController.js";
import CategoryController from '../categoryFilter/categoryController.js'
import WindowController from './../window/windowController.js';
import SortController from './../sort/sortController.js';

const search = new SearchController();
const motocycle = new MotocycleController();
const category = new CategoryController();
const window = new WindowController();
const sort = new SortController();

motocycle.init();
