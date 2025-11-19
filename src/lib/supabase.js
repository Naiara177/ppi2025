import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://seu-projeto.supabase.co';
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || 'sua-chave-anon';

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);
