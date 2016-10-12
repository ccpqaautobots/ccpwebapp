// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1583973215244062', // your App ID
        'clientSecret'  : 'b36280c4da773aad9371eeb3b0aaee0b', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'profileFields' : ['id', 'displayName', 'link', 'photos', 'gender', 'emails']
    },

    'twitterAuth' : {
        'consumerKey'       : 'ElzTN8e3b4IPU1FmAgfvu4Mp3',
        'consumerSecret'    : 'dMVfaOqsuen4kTHJ655y9McOQXuUJZ7PcFiV9fBywzqkFpkzpr',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1013039992399-8ve0a2d9np470ku4t0k4af3f3io5v2fk.apps.googleusercontent.com',
        'clientSecret'  : 'mQulr-Ppyk77K4ijAO-EEtsH',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};