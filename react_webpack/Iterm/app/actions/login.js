export const LOGIN = 'LOGIN'
export const SIGNOUT = 'SIGNOUT'
export const USER = 'USER'
export const user = (user) => ({
	type: USER,
	user: user
})

export const login = (user) => ({
	type: LOGIN,
	isAuth:true,
	user
})

export const signout = (user) => ({
	type: SIGNOUT,
	user
})


