class Library{
    constructor (section,book,manager,opentime,closetime){
        this.section=section;
        this.book=book;
        this.manager=manager;
        this.opentime=opentime;
        this.closetime=closetime;
    }
    manageLibrary=()=>{
        console.log(`library manager ${this.manager}`)
    }
    issuebooks=()=>{
        return new Promise(function(myResolve,myReject){
            setTimeout(function(){
                myResolve(`issue books Java Script`);       
            }, 2000)
        });
        myPromise.then((response)=>{
            console.log(response)
        })
    }
    addnewsection=()=>{
        console.log(`New Section of books ${this.section}`)
    }
    openLibrary=()=>{
        return new Promise(function(myResolve,myReject){
            setTimeout(function(){
                myResolve(`Open Time 12:30`);       
            }, 2000)
        });
        myPromise.then((response)=>{
            console.log(response)
        })
    }
    closeLibrary=()=>{
        return new Promise(function(myResolve,myReject){
            setTimeout(function(){
                myResolve(`Close Time 1:00`);       
            }, 2000)
        });
        myPromise.then((response)=>{
            console.log(response)
        })
    }
}

async function test(){
    var lib= new Library('A','Java Script', 'M. Talha Rehman', '12:30', '1:00')
    lib.manageLibrary()
    lib.addnewsection()
    const j= await lib.openLibrary()
    const k= await lib.closeLibrary()
    const l= await lib.issuebooks()
    console.log(l)
    console.log(j)
    console.log(k)
}
test()