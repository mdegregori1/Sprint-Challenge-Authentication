const Users= require("./users-model.js")
const db = require('../database/dbConfig.js')

describe('The Users Model', () => {
    
    beforeEach(async () => {
        //wipe db
        await db('users').truncate();
    })
    describe('the add function', () => {
        it('should add a new user', async ()=>{
            const userData = {username: 'testing123', password: 'testing123'}
            await Users.add(userData)
            
            //assert
            const users = await db('users')
            expect(users.length).toBe(1);
            expect(users[0].username).toBe('testing123')

        })
        it('should resolve to the newly created user', async () => {
            //test setup
            const userData = {username: 'testing1235', password: 'testing123'}
            const user = await Users.add(userData);

            expect(user).toEqual({id: 1, username: 'testing1235', password: 'testing123'})
        })

    })


})

