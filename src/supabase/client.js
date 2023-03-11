import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

export const client = createClient(url, anon)
console.log(url)
