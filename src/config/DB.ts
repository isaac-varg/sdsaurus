import PocketBase from 'pocketbase'

export default new PocketBase(process.env.DATABASE_URL);