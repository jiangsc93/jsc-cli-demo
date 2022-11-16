import { Command } from 'commander';
// import inquirer from 'inquirer';
import Commands from '@commands';
import pkg from '../package.json';
import { loading, Cblue, Cred, Cgreen } from '@utils';
const program = new Command();
// begin


    // .command('loading')
    // .action(() => {
    //     loading.start({
    //         color: 'red',
    //         text: 'begin'
    //     });
    //     setTimeout(() => {
    //         loading.warn('警告');
    //         setTimeout(() => {
    //             loading.info('提示');
    //             setTimeout(() => {
    //                 loading.start('第二次');
    //                 setTimeout(() => {
    //                     loading.stop();
    //                 })
    //             }, 2000)
    //         }, 2000)
    //     }, 2000)
    // })


    // .command('chooes')
    // .action(() => {
    //     inquirer.prompt([
    //         {
    //             type: 'rawlist',
    //             name: 'rawlist',
    //             message: 'Select toppings',
    //             choices: [
    //                 {
    //                     name: 'Perpperro',
    //                     value: 1
    //                 },
    //                 {
    //                     name: 'Ham',
    //                     value: 2
    //                 },
    //             ],
    //             validate(answer) {
    //                 if (answer.length) {
    //                     return 'You must chooose at least on topping.'
    //                 }

    //                 return true;
    //             }
    //         },
    //         // {
    //         //     type: 'confirm',
    //         //     name: 'toBeDelivered',
    //         //     message: 'Is this for delivery?',
    //         //     default: false,
    //         // },
    //         // {
    //         // type: 'input',
    //         // name: 'phone',
    //         // message: "What's your phone number?",
    //         // validate(value) {
    //         //     const pass = value.match(
    //         //     /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //         //     );
    //         //     if (pass) {
    //         //     return true;
    //         //     }
        
    //         //     return 'Please enter a valid phone number';
    //         // },
    //         // },
    //         // {
    //         // type: 'list',
    //         // name: 'size',
    //         // message: 'What size do you need?',
    //         // choices: ['Large', 'Medium', 'Small'],
    //         // filter(val) {
    //         //     return val.toLowerCase();
    //         // },
    //         // },
    //         // {
    //         // type: 'input',
    //         // name: 'quantity',
    //         // message: 'How many do you need?',
    //         // validate(value) {
    //         //     const valid = !isNaN(parseFloat(value));
    //         //     return valid || 'Please enter a number';
    //         // },
    //         // filter: Number,
    //         // },
    //         // {
    //         // type: 'expand',
    //         // name: 'toppings',
    //         // message: 'What about the toppings?',
    //         // choices: [
    //         //     {
    //         //     key: 'p',
    //         //     name: 'Pepperoni and cheese',
    //         //     value: 'PepperoniCheese',
    //         //     },
    //         //     {
    //         //     key: 'a',
    //         //     name: 'All dressed',
    //         //     value: 'alldressed',
    //         //     },
    //         //     {
    //         //     key: 'w',
    //         //     name: 'Hawaiian',
    //         //     value: 'hawaiian',
    //         //     },
    //         // ],
    //         // },
    //         // {
    //         // type: 'rawlist',
    //         // name: 'beverage',
    //         // message: 'You also get a free 2L beverage',
    //         // choices: ['Pepsi', '7up', 'Coke'],
    //         // },
    //         // {
    //         // type: 'input',
    //         // name: 'comments',
    //         // message: 'Any comments on your purchase experience?',
    //         // default: 'Nope, all good!',
    //         // },
    //         // {
    //         // type: 'list',
    //         // name: 'prize',
    //         // message: 'For leaving a comment, you get a freebie',
    //         // choices: ['cake', 'fries'],
    //         // when(answers) {
    //         //     return answers.comments !== 'Nope, all good!';
    //         // },
    //         // },
    //     ]).then(answer => {
    //         console.log(answer)
    //     })
    // })

    Object.keys(Commands).forEach(command => {
        const current = program.command(command);
        if (Commands[command].option && Commands[command].option.length ) {
            Commands[command].option.forEach(item => {
                current.option(item.cmd, item.msg || '')
            })
        }
        current.action(Commands[command].action);
    })
    
    program.name(pkg.name)
    .version(pkg.version)
    .helpOption('-h, --help')
    .usage('<command> [option]')
    // .command('chalk')
    // .action(() => {
    //     console.log(Cblue('蓝色'));
    //     console.log(Cred('红色'));
    //     console.log(Cgreen('绿色'));
    // })
program.parse()
