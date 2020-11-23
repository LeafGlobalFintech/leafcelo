class Utils{
    static navigate(...args){
        if(global.navigationRef){
            global.navigationRef.current?.navigate(...args);
        }
    }
}

global.Utils = Utils;
export default Utils;