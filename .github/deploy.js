const fs = require("fs");
const buffer = require("buffer");
require("dotenv/config");

async function deploy() {
    if (!fs.existsSync("dist.zip")) {
        throw "Dist zip folder not exists, deploy canceled.";
    }

    const formData = new FormData();
    formData.append("file", new buffer.Blob([fs.readFileSync("./dist.zip").buffer]), "dist.zip")

    const reponse = await fetch(`https://api.discloud.app/v2/app/${process.env.BOT_ID}/commit/`, {
        method: "PUT",
        headers: {
            "api-token": `${process.env.DISCLOUD_TOKEN}`
        },
        body: formData
    });

    console.log(await reponse.json());
}

deploy();