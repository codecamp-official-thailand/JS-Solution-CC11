const state1 = { username: 'john', point: 100, loading: true };
const state2 = Object.assign({}, state1, { point: 75, loading: false, success: true });
console.log(state2);