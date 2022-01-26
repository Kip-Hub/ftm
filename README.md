# Follow the money

![gif](https://i.imgur.com/7DVltVt.gif)    
[live demo link (mobile devices)](https://ftm-zeta.vercel.app)

## 📁 Contents
[🚀 Description](https://github.com/Kip-Hub/ftm#-description)  
[⚙️ Installation](https://github.com/Kip-Hub/ftm#-installation)  
[📚 Documentation](https://github.com/Kip-Hub/ftm#-documentation)  
[🧩 Data](https://github.com/Kip-Hub/ftm#-data)    
[📦 Resources](https://github.com/Kip-Hub/ftm#-resources)   
[🙋 Contributors](https://github.com/Kip-Hub/ftm#-contributors)   
[📎 License](https://github.com/Kip-Hub/ftm#-license)   

## 🚀 Description

During this semester of information design at the  Hogeschool van Amsterdam, [Follow the money](https://www.ftm.nl/) gave us the assignment to show the impoverishment of essential services in parts of the Netherlands. Ftm had previously published an [article](https://www.ftm.nl/artikelen/verschraling-platteland) which dovered this topic, but they asked us to explore different ways of showcasing the data in other ways than showing a map.

We decided to do just that by creating an instagram story like app (similar to spotify wrapped), that shows the user the data that is relevant to the areacode they had searched for and how it has changed over the years.

This repository consists of our teams work to create this product.

## ⚙️ Installation

If you would like to use this repository on your own computer, you can paste the following code into your terminal to create a local copy of this project.  
(Note: you are required to have [Git](https://git-scm.com/downloads) installed on your machine for this to work)

```
git clone https://github.com/Kip-Hub/ftm.git
```

After making a local copy of the repo you'll have to run the following code from within the folder you just created, to install the needed dependancies.

```
npm install
```

After installing the dependancies you can run the project locally with

```
npm start
```


## 📚 Documentation

The process we went through while concepting, designing and building the project was documented on our [Notion page](https://jewel-wildcat-bc4.notion.site/FTM-470915b610ab40c38b645c1915a629ca) along with the choices, and iterations that were made.


## 🧩 Data

The data that was used in this project consists of:

* [cbs.json](https://github.com/Kip-Hub/ftm/blob/master/public/cbs.json)  
This file contains all the collected data on impoverishment of services over the course of multiple years in countless parts of the Netherlands. This data was provided by ftm.    
```json
//example of data structure cbs.json
{
    "GWB_CODE": "BU01935200",
    "GWB_NAAM": "Windesheim",
    "Jaar": 2012,
    "huisarts_afst": "4,8",
    "huisartsenpost_afst": "8,9",
    "ziekenhuis_incl_afst": "8,1",
    "ziekenhuis_excl_afst": "8,1",
    "basis_afst": "0,4",
    "vmbo_afst": 5,
    "havovwo_afst": 5,
    "bibliotheek_afst": 5,
    "inwoners": 380
  },
```  

* [areacodes.csv](https://github.com/Kip-Hub/ftm/blob/master/public/areacodes.csv)  
This file acts as sort of a 'join' to create a link between the areacodes the cbs assigns to certain parts of the Netherlands, and their actual areacodes as they are known by the people living there.   

```csv
//example of data structure of areacodes.csv

PC6,Buurt2020,Wijk2020,Gemeente2020
1011AB,3630400,36304,363
1011AC,3630400,36304,363
1011AD,3630400,36304,363
1011AE,3630400,36304,363
1011AG,3630403,36304,363
1011AH,3630403,36304,363
1011AJ,3630403,36304,363
1011AK,3630401,36304,363
1011AL,3630408,36304,363
1011AM,3630401,36304,363
1011AN,3630401,36304,363
```

* [shapefiles](https://github.com/ftmnl/verschraling_voorzieningen)
A library full of shapefiles to draw maps with according to the collected data, we ended up not using these, but ftm provided us with this data either way. 



## 📦 Resources  


* [react.js](https://reactjs.org/)  
* [d3.js](https://d3js.org/)  
* [react-insta-stories](https://mohitk05.github.io/react-insta-stories/)  
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)  


## 🙋 Contributors  

[Tom Mandemaker](https://github.com/mandemt) (Tech student)     
[Judith Koelewijn](https://github.com/judithkoelewijn) (Visual student)       
[Daniel Kip](https://github.com/Kip-Hub) (Tech student)   


## 📎 License

License used for this project: [MIT](https://github.com/Kip-Hub/ftm/blob/master/LICENSE)