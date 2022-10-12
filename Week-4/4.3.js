const fib = {
    n:5,
    [Symbol.iterator]: function(){
        let i=1; 
            let n2=0,n1=0;
            let nextNumber;
        return {
            next: ()=>{
               if(i++ <= this.n){
                    nextNumber = n1+n2;
                    n1=n2;
                    n2=nextNumber || 1;
                   return {value: n1, done:false}
            }else{
                return { done:true}
            }
            }
        }
    }
}
console.log([...fib])