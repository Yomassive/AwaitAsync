var {process01, process02} = require('./processes');

//sequentially ran
async function main(){
    try{
        console.time('Total Running Time');
        var val1 = await process01();
        var val2 = await process02();

        console.log('Process 01 returned: ', val1);
        console.log('Process 02 returned: ', val2);

        console.log();

        console.timeEnd('Total Running Time');
    }
    catch(err){
        console.error('error', err);
    }
}

main();
