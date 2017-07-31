exports.dbConfig = {
    localhostConnection: 'mongodb://localhost/movies',

    hostingServices: {
        credientials:{
            username: 'shahzaib',
            password: 'zx112233'
        },
        mlab: 'mongodb://'+this.credientials.username+':'+this.credientials.password+'@ds163417.mlab.com:63417/movies'
    }
};