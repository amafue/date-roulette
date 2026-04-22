import app from "./app.js";
import './models/database.js';

async function main() {
    await app.listen(app.get('port'))
    console.log('Server is running at port: ', app.get('port'));
}

main();

