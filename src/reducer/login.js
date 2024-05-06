

const loginValido = {
    email: "email@email.com",
    password: "123",
}


export default function LoginController(state, action ){
    switch(action.type){
        case "login":
            if(action.payload.email.toLowerCase() === loginValido.email){
                return true;
            }
    }
}