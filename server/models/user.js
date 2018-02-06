// ==================== //
// ===  VARIABLES   === //
// ==================== //
var mongoose = require('mongoose');

// ==================== //
// ===     MODEL    === //
// ==================== //
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true//=== REPLACE WHITESPACES ===//
  }
});

module.exports = { User };
// ============== //
// ============== //
