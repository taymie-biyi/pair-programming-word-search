const transpose = require('./transpose');


const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (horizontalJoin.includes(word)) return true;
    
    const vert = transpose(letters);
    const verticalJoin = vert.map(ls => ls.join(''));
    if (verticalJoin.includes(word)) return true;
    
    return false;
}

module.exports = wordSearch