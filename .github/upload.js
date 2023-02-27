const fs = require("fs");
const zip = fs.readFileSync("dist.zip");
const { discloud } = require("discloud.app");

async function load() {
    await discloud.login("eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ2ODE5MTgzMTc1OTM4ODY4MiIsImtleSI6ImFlOTBkZjMyOTJhZDFiMmVkZTIyNjNmY2U4NWEifQ.wbvk1f1UShnncBKpcysXm1GzdJm_jdJIVmUTPmjLDbQ");
    await discloud.apps.update("925095787514458167", {
        file: {
            data: zip,
            name: "dist.zip"
        }
    });

    // const reponse = await fetch(`https://api.discloud.app/v2/app/925095787514458167/commit/`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "multipart/form-data",
    //         "api-token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ2ODE5MTgzMTc1OTM4ODY4MiIsImtleSI6ImFlOTBkZjMyOTJhZDFiMmVkZTIyNjNmY2U4NWEifQ.wbvk1f1UShnncBKpcysXm1GzdJm_jdJIVmUTPmjLDbQ",
    //     },
    //     body: {
    //         file: 
    //     }
    // });

   
    // console.log(await reponse.json());
}

load();