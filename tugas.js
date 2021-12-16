function showdownload() {
    return new Promise (function (resolve,reject) {
        setTimeout(() => {
            resolve("Download Selesai");
        }, 5000);
    })
}

function download() {
    return new Promise (function(resolve,reject){
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve("Hasil Download :" + result)
        }, 3000);
    })
}

async function main(){
    console.log(await showdownload());
    console.log(await download());
    }

main();