import { createClient } from '@supabase/supabase-js';
import { Telegraf } from 'telegraf';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const bot = new Telegraf(process.env.BOT_TOKEN);

export default async function handler(req, res) {
    const now = new Date();
    const currentTime = now.toISOString().substr(11, 5); 
    const currentDay = now.getUTCDay(); 

    const isWeekend = (currentDay === 0 || currentDay === 6);
    
    const { data: reminders } = await supabase
        .from('reminders')
        .select('*')
        .eq('time', currentTime);

    if (!reminders || reminders.length === 0) {
        return res.status(200).json({ status: 'no reminders at this time' });
    }

    for (const item of reminders) {
        let needToSend = false;

        if (item.days_type === 'everyday') needToSend = true;
        if (item.days_type === 'weekdays' && !isWeekend) needToSend = true;
        if (item.days_type === 'weekends' && isWeekend) needToSend = true;

        if (needToSend) {
            try {
                await bot.telegram.sendMessage(item.user_id, `💊 Напоминание: Время принять "${item.pill_name}"!`);
            } catch (err) {
                console.error(err);
            }
        }
    }

    return res.status(200).json({ status: 'success' });
}
