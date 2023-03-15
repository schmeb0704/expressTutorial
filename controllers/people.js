let {people} = require("../data")

const getPeople = (req, res)=>{
    res.status(200).json(people)
}

const createPerson = (req, res)=>{
    const {name} = req.body

    if(!name){
       return res.status(401).send({success: false, msg: "Please enter a name"})
    }
    
    res.status(201).json({success: true, person: name})
}

const createPersonPostman = (req, res)=>{
    const {name} = req.body
    
    if(!name){
        return res.status(401).send({success: false, msg: "Please enter a name"})
    }

    res.status(201).json({success: true, data: [...people, {id: 6, name}]})

}

const updatePerson = (req, res)=>{
    const {id} = req.params
    const {name} = req.body

    if(people.some(person => person.id === Number(id))){
        people.forEach(person => {
            if(person.id === Number(id)){
                person.name = name
            }
        })
        return res.status(200).json({success: true, response: people})
    } else{
        return res.status(200).json({success: false, response: `No records for ID ${id}`})
    }
}

const deletePerson = (req, res)=>{
    const {id} = req.params

    if(people.some(person => person.id === Number(id))){

        people = people.filter(person => person.id !== Number(id))

        return res.status(200).json({success: true, response: people})
    } else{
        return res.status(200).json({success: false, response: `No records for ID`})
    }
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}