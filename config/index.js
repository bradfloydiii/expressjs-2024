const config = {

    port: process.env.PORT || 8000,

    db: {
        database: process.env.DB_NAME || '',
        user: process.env.DB_USER || '',
        password:process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || '',
            host: process.env.HOST || '',
            storage: ''
        }
    },

    status: (port) => {
        let msg = `Server running at: http://localhost:${port}`
        return msg
    }
}

export default config;