'use strict';

const person = require('../model/person');

class PersonRepository {
    constructor(){
        this.persons = new Map([
            [1,new person(1, 'danu','email1@email.na')],
            [2,new person(2, 'sinta','email1@email.na')],
        ]);
    }

    getById(id){
        return this.persons.get(id);
    }

    getAll(){
        return Array.from(this.persons.values());
    }

    remove() {
        const keys = Array.from(this.persons.keys());
        this.persons.delete(keys[keys.length - 1]);
    }

    save(person) {
        if (this.getById(person.id) !== undefined) {
            this.persons[person.id] = person;
            return 'Updated Person with id=' + person.id;
        }
        else {
            this.persons.set(person.id, person);
            return 'Added Person with id=' + person.id;
        }
    }
}

const personRepository = new PersonRepository();
module.exports = personRepository;