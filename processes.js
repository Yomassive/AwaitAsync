var util = require('util');
var wait = util.promisify(setTimeout);

module.exports = {
    async process01(){
        try{
            console.log('Process 01 started');
            throw new Error('Big ERROR in Process01');
            console.time('Process 01 ended');
            await wait(5000);
            console.timeEnd('Process 01 ended');
            console.log();
            return 'Process01-value';
        } catch(err){
            console.error('error', err);
        }
    },

    async process02(){
        try{
            console.log('Process 02 started');
            console.time('Process 02 ended');
            await wait(3000);
            console.timeEnd('Process 02 ended');
            console.log();
            return 'Process02-value';
        } catch(err){
            console.error('error', err);
        }
    }    
};