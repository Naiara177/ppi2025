import {creatClient} from '@supabase/supabase-js';

export const supabase = creatClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);  

