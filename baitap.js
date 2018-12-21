/*cau 1*/
// loi gia cua thay
const matches = (obj, source) =>{
    return object.key(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
};
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); 
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); 
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); 
