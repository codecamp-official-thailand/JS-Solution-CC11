
// Lab 1.4
const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
const concatArray = [5, ...nums1, -6, -1, ...nums2];
const sum = concatArray.reduce((acc, el) => acc + el, 0);