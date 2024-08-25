declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PORT?: string;
        DB_NAME: string;
        DB_HOST: string;
        DB_USER: string;
        DB_PASS: string;
        DB_DIALECT: string;
    }
}