require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();
const models = require('./models')

models.Bando.create({former_members: ['Hillel Slovak','Jack Irons','Cliff Martinez','Jack Sherman','DeWayne McKnight','D. H. Peligro','Arik Marshall','Jesse Tobias','Dave Navarro', 'Josh Klinghoffer'],
vocal: [{name: 'Anthony Kiedis', image: "https://ilarge.lisimg.com/image/2654625/740full-anthony-kiedis.jpg", joined_band: '1983'}],
guitar:[{name: 'John Frusciante', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/JohnFruscianteAugust2006.jpg/220px-JohnFruscianteAugust2006.jpg", joined_band: '1989'}] ,
bass:[{name: 'Flea', image: "https://d26horl2n8pviu.cloudfront.net/link_data_pictures/images/000/334/371/shared_link/1200px-2016_RiP_Red_Hot_Chili_Peppers_-_Michael_Flea_Balzary_-_by_2eight_-_DSC0041.jpg?1539689224", joined_band: '1983'}] ,
drums:[{name: 'Chad Smith', image: " https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2016_RiP_Red_Hot_Chili_Peppers_-_Chad_Smith_-_by_2eight_-_DSC0184.jpg/220px-2016_RiP_Red_Hot_Chili_Peppers_-_Chad_Smith_-_by_2eight_-_DSC0184.jpg", joined_band: '1988'}]
}).then(() => {console.log('done');}).catch((err)=>{console.log(err)})

