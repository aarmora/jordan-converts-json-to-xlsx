import json2xls from 'json2xls';
import * as fs from 'fs';

const businesses = [
    {
        Title: 'Pizza planet',
        'Registration date': '11-15-2020'
    },
    {
        Title: 'Root beer planet',
        'Registration date': '11-15-2020'
    },
    {
        Title: 'Oreos planet',
        'Registration date': '11-15-2020'
    },
    {
        Title: 'Cookies planet',
        'Registration date': '11-15-2020'
    },
    {
        Title: 'Tuna twirls planet',
        'Registration date': '11-15-2020'
    },
    {
        Title: 'Sword planet',
        'Registration date': '11-15-2020'
    }
];


const xls = json2xls(businesses);

fs.writeFileSync('businesses.xlsx', xls, 'binary');