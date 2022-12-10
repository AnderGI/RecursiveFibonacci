 function fibsRec(num, prev = 0, current = 1){
    /**
     *if(num == 2){ 
        the first two values of the fibonacci
        secuence are prev and current
        that's why it does it six times
        return current;
    }else{
        return fibsRec(num - 1, current, current + prev)
    }
     */
    num === 2 ? current : fibsRec(num - 1, current, current + prev);
 }

 console.log(fibsRec(8))