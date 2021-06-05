const bcrypt = require('bcryptjs');

module.exports = {
  generateHash(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    
    return hash;
  },

  compare(password, hash){
    return bcrypt.compareSync(password, hash);
  }
}