require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();
const models = require('./models')

models.Bando.create({band: "Led Zeppelin",

members: [{name: 'Robert Plant', image: "image.com", joined_band: '1968'},
{name: 'Jimmy Page', image: "jiimy.pic", joined_band: '1968', instrument:[{type:"guitar",brand:"gibson", color: "brown", year: "1950"}] },
{name: 'John Paul Jones', image: "image", joined_band: '1968', instrument:[{type:"bass", brand:"fender", year: "1960", color: "black"},{type:"organ", brand:"hammond", year:"1950" }]} ,
{name: 'John Bonham', image: " iamge 3", joined_band: '1968', instruments:[{type:"drums", year:"1980", color:"blue", make:"yamaha"}]}],
albums:[{name: "Led Zeppelin I", year:"1969", label: "Atlantic"}]
}).then(() => {console.log('done');}).catch((err)=>{console.log(err)})

