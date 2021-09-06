const validator=require('validator')
const chalk=require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')
// console.log(validator.isEmail('example@abc.com'))
// console.log(chalk.green.bold.italic.inverse('Success'))

//Create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOptions:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOptions:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Note title',
            demandOptions:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'Reading notes',
    handler(){
        console.log('Reading the notes!')
    }
})
console.log(yargs.argv)
// console.log(yargs.argv[1],yargs.argv['title'])
