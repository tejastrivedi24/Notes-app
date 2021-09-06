const tasks = {
    tasks:[
        {
            text:"Grocery shopping",
            completed:true
        },{
            text:"Clean yard",
            completed:false
        },{
            text:"film course",
            completed:false
        }
    ],

    getTasksToDo(){

        const fin = this.tasks.filter((cat)=>
            cat.completed===false
        )

        return fin

    }
}
console.log(tasks.getTasksToDo())