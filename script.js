function firstname() {

    console.log('arshit');
}
async function main() {
    setTimeout(firstname, 10000);
    let lastname = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("koshiya");
        }, 5000);
    });
    console.log(await lastname);
}
main();




/*function firstname(main) {
    return new Promise(resolve => {
        setTimeout(() => {
            let lastname = setTimeout(() => {
                resolve('arshit');
            }, 5000);
            console.log('koshiya');
        }, 5000);
    });
}

async function fullname() {

    var main = await firstname();
    console.log(main);

}

fullname();*/