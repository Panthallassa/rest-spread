const items = ["hello", 45, true, "wow", 3, "lol", false];

const keyVals = { a: 1, b: 2, c: 3 };

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

const findMin = (...vals) => Math.min(...vals);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...vals) => {
	const doubledArr = arr.map((num) => num * 2);
	const doubledVals = vals.map((num) => num * 2);
	return [...doubledArr, ...doubledVals];
};

const removeRandom = (arr) => {
	if (arr.length === 0) {
		return undefined;
	}
	const randomize = Math.floor(Math.random() * arr.length);
	const randomItem = arr[randomize];
	return [randomItem];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
	return {
		...obj,
		[key]: val,
	};
};

const removeKey = (obj, key) => {
	const { [key]: removedKey, ...newObject } = obj;
	return newObject;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
	return {
		...obj,
		[key]: val,
	};
};
