import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    
    const { userId, pillName, time, daysType } = req.body;
    
    const { error } = await supabase
        .from('reminders')
        .insert([{ user_id: String(userId), pill_name: pillName, time, days_type: daysType }]);

    if (error) return res.status(500).json(error);
    return res.status(200).json({ success: true });
