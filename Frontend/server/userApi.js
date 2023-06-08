import  {Router} from "express";

export function UserApi(sqlite){
    const router = new Router();

    router.get('/RegisterPage', async (req, res) => {
        const newUser = await sqlite
            .collation("user")
            .find()
            .map(({id, firstName, lastName, birthDate, email, phone, roles, profilePic, username, password}) =>({
                id,
                firstName,
                lastName,
                birthDate,
                email,
                phone,
                roles,
                profilePic,
                username,
                password
            }))
            .toArray();
        return res.json(user)
    })

    router.post('/new', (req, res) => {
        const {id, firstName, lastName, birthDate, email, phone, roles, profilePic, username, password} = req.body;
        const result = sqlite
            .collation("user")
            .insert({id, firstName, lastName, birthDate, email, phone, roles, profilePic, username, password});
    res.sendStatus(200)
    })
    return router;
}