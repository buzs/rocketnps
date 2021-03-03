import { Connection, createConnection, getConnectionOptions } from "typeorm";

const inProd = process.env.NODE_ENV === "production"

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();


    return createConnection(
        Object.assign(defaultOptions, {
            database: 
                inProd 
                    ? defaultOptions.database 
                    : "./src/database/database.test.sqlite"
        })
    );
}