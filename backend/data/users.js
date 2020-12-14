import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Yasir Ansari',
        email: 'yasiransari73@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Maaz Abdullah',
        email: 'maaz.abdullah111@gmail.com',
        password: bcryptjs.hashSync('123456', 10)
    },
    {
        name: 'Yasir Ansari',
        email: 'yasiransari.elith@gmail.com',
        password: bcryptjs.hashSync('123456', 10)
    }

]

export default users
