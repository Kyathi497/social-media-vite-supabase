import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyeuimjegxpwdciciper.supabase.co'; // Replace with your actual Supabase URL
const supabaseKey = import.meta.env.VITE_SUPERBASE_ANON_KEY; // Correct way to access the key

if (!supabaseKey) {
    throw new Error('supabaseKey is required');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
