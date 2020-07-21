const chalk=require('chalk')

const yargs=require('yargs')

const notes=require('./note.js')

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
      notes.addNote(argv.title, argv.body)

    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list the note',
    
    handler(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'read the note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        } 
    },
    
    handler(argv){
notes.readNote(argv.title)
     }
})

yargs.parse()