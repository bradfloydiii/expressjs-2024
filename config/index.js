module.exports = {

    port: process.env.PORT || 8082,

    db: {
        database: process.env.DB_NAME || 'mos',
        user: process.env.DB_USER || 'postgres',
        password:process.env.DB_PASS || 'mos',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || '3.60.34.186',
            storage: '/logs/database.log'
        }
    },

    status: (port) => {
        let msg = `Server running at: http://localhost:${port}`
        return msg
    }
}