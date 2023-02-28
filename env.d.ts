declare namespace NodeJS {
    export interface ProcessEnv {
        BOT_TOKEN: string;
        BOT_ID: string;
        DISCLOUD_TOKEN: string;
    }
}

//Create .env file in raiz project and add environment github secrets.