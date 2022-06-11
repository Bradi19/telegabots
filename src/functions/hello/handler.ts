
import { middyfy } from '@libs/lambda';
import Telegraf from 'telegraf-ts';

import schema from './schema';

const hello = async (event) => {
    console.log(event);
    
    let body: any = event.body[0] === JSON.parse(event.body);
    const bot = new Telegraf("5290846070:AAFS3BLIFylc50S74_WFrTm6JOaGlIIQuYA");

    bot.hears('hi', ctx => ctx.reply('Hello from bot'));

    console.log('Request: ' + JSON.stringify(body));
     bot.handleUpdate(body);
    return {statusCode: 200, body: ''};
};

export const main = middyfy(hello);
