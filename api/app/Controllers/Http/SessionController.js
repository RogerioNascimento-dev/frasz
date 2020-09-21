'use strict'
const User = use('App/Models/User')
class SessionController {
    async store({request,response,auth}){
        const {email,password,name,imageProfile,origin} = request.all()

        const userLocatedOrCreated = await User.findOrCreate({email},
            {   name,
                email,
                password,
                image_profile:imageProfile,
                origin_access:origin
            });   
            
            userLocatedOrCreated.image_profile = imageProfile
            userLocatedOrCreated.name = name
            userLocatedOrCreated.save()

        const token = await auth.attempt(email, password)
        const user = await  User.findBy('email',email)
        return {token,user}
    }
}

module.exports = SessionController
/*
https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1708482992632667&width=200&ext=1603250317&hash=AeTrVeDkdDoOaAEM

*/