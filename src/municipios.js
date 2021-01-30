const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
  res.send(Provincias);
} );

const Provincias = [
  {
    "project" : "API",
    "name" : "ProvinciasMunicipiosAngola-API",
    "description" : "Uma API totalmente gratuita com alguns dados geográficos de Angola, Como distribuição territorial das províncias onde está incluído a extenção da província, a quantidade de habitantes, os municípios, data de fundação, os governadores das mesmas, os administradores, e autarquias e etc. ",
    "author" : "Mário Varela - https://github.com/mariovarela99",
    "datecreated" : "Janeiro 2021",
    "dateupdated" : null
  },
	{
		"id" : 1,
		"nome" : "Bengo",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Caxito",
    "area" : 33016,
    "municipios" : [
      {
        "id" : 106,
        "nome" : "Ambriz",
        "provinciaID" : 1,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 107,
        "nome" : "Bula Atumba",
        "provinciaID" : 1,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 108,
        "nome" : "Dande",
        "provinciaID" : 1,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 109,
        "nome" : "Dembos",
        "provinciaID" : 1,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 110,
        "nome" : "Nambuangongo",
        "provinciaID" : 1,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
      "id" : 111,
      "nome" : "Pango Aluquém",
      "provinciaID" : 1,
      "datecreated" : null,
      "dateupdated" : null
      }  
    ]
	},
	{
		"id" : 2,
		"nome" : "Benguela",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Benguela",
    "area" :  3178,
    "municipios" : [
    {
      "id" : 112,
      "nome" : "Balombo",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 113,
      "nome" : "Baía Farta",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 114,
      "nome" : "Benguela",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 115,
      "nome" : "Bocoio",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 116,
      "nome" : "Caimbambo",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 117,
      "nome" : "Catumbela",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 118,
      "nome" : "Chongorói",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 119,
      "nome" : "Cubal",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 120,
      "nome" : "Ganda",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    },

    {
      "id" : 121,
      "nome" : "Lobito",
      "provinciaID" : 2,
      "datecreated" : null,
      "dateupdated" : null
    }
    ]
    },
    {
      "id" : 3,
      "nome" : "Bié",
      "datecreated" : null,
      "dateupdated" : null,
      "capital" : "Cuito",
      "area" : 70314,
      "municipios" : [
        {
          "id" : 39,
          "nome" : "Andulo",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 40,
          "nome" : "Camacupa",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 41,
          "nome" : "Catabola",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 42,
          "nome" : "Chinguar",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 43,
          "nome" : "Chitembo",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 44,
          "nome" : "Cuemba",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 45,
          "nome" : "Cunhinga",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 46,
          "nome" : "Cuíto",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        },
      
        {
          "id" : 47,
          "nome" : "Nharea",
          "provinciaID" : 3,
          "datecreated" : null,
          "dateupdated" : null
        }
      ]
    },
	{
		"id" : 4,
		"nome" : "Cabinda",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Cabinda",
    "area" : 7270,
    "municipios" : [

      {
        "id" : 1,
        "nome" : "Belize",
        "provinciaID" : 4,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 2,
        "nome" : "Buco-Zau",
        "provinciaID" : 4,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 3,
        "nome" : "Cabinda",
        "provinciaID" : 4,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 4,
        "nome" : "Cacongo",
        "provinciaID" : 4,
        "datecreated" : null,
        "dateupdated" : null
      },
    ],
	},
	{
		"id" : 5,
		"nome" : "Cuando Cubango",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Menongue",
    "municipios" : [
      {
        "id" : 30,
        "nome" : "Calai",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 31,
        "nome" : "Cuangar",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 32,
        "nome" : "Cuchi",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 33,
        "nome" : "Cuito Cuanavale",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 34,
        "nome" : "Diricio",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 35,
        "nome" : "Mavinga",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 36,
        "nome" : "Menongue",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 37,
        "nome" : "Nancova",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 38,
        "nome" : "Rivungo",
        "provinciaID" : 5,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 6,
		"nome" : "Cuanza Norte",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "N'dalatando",
    "municipios" : [
      {
        "id" : 96,
        "nome" : "Ambaca",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 97,
        "nome" : "Banga",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 98,
        "nome" : "Bolongongo",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 99,
        "nome" : "Cambambe",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 100,
        "nome" : "Cazengo",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 101,
        "nome" : "Golungo Alto",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 102,
        "nome" : "Gonguembo",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 103,
        "nome" : "Lucala",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 104,
        "nome" : "Quiculungo",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 105,
        "nome" : "Samba Caju",
        "provinciaID" : 6,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 7,
		"nome" : "Cuanza Sul",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Sumbe",
    "municipios" : [
      {
        "id" : 122,
        "nome" : "Amboim",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 123,
        "nome" : "Cassongue",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 124,
        "nome" : "Cela",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 125,
        "nome" : "Conda",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 126,
        "nome" : "Ebo",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 127,
        "nome" : "Libolo",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 128,
        "nome" : "Mussende",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 129,
        "nome" : "Porto Amboim",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 130,
        "nome" : "Quibala",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 131,
        "nome" : "Quilenda",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 132,
        "nome" : "Seles",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 133,
        "nome" : "Sumbe",
        "provinciaID" : 7,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 8,
		"nome" : "Cunene",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Ondjiva",
    "municipios" : [
      {
        "id" : 5,
        "nome" : "Cahama",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 6,
        "nome" : "Cuanhama",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 7,
        "nome" : "Curoca",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 8,
        "nome" : "Cuvelai",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 9,
        "nome" : "Namacunde",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 10,
        "nome" : "Ombadja",
        "provinciaID" : 8,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 9,
		"nome" : "Huambo",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Haumbo",
    "municipios" : [
      {
        "id" : 85,
        "nome" : "Bailundo",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 86,
        "nome" : "Cachiungo",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 87,
        "nome" : "Caála",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 88,
        "nome" : "Ecunha",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 89,
        "nome" : "Hambo",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 90,
        "nome" : "Londuimbali",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 91,
        "nome" : "Longonjo",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 92,
        "nome" : "Mungo",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 93,
        "nome" : "Chicala-Choloanga",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 94,
        "nome" : "Chinjenje",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 95,
        "nome" : "Ucuma",
        "provinciaID" : 9,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 10,
		"nome" : "Huíla",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Lubango",
    "municipios" : [
      {
        "id" : 71,
        "nome" : "Caconda",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 72,
        "nome" : "Cacula",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 73,
        "nome" : "Caluquembe",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 74,
        "nome" : "Chiange",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 75,
        "nome" : "Chibia",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 76,
        "nome" : "Chicomba",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 77,
        "nome" : "Chipindo",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 78,
        "nome" : "Cuvango",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 79,
        "nome" : "Humpata",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 80,
        "nome" : "Jamba",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 81,
        "nome" : "Lubango",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 82,
        "nome" : "Matala",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 83,
        "nome" : "Quilengues",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 84,
        "nome" : "Quipungo",
        "provinciaID" : 10,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 11,
		"nome" : "Luanda",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Luanda",
    "municipios" : [
      {
        "id" : 11,
        "nome" : "Belas",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 12,
        "nome" : "Cacuaco",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 13,
        "nome" : "Cazenga",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 14,
        "nome" : "Ícolo e Bengo",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 15,
        "nome" : "Luanda",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 16,
        "nome" : "Quilamba Quiaxi",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 17,
        "nome" : "Quissama",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 18,
        "nome" : "Talatona",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 19,
        "nome" : "Viana",
        "provinciaID" : 11,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 12,
		"nome" : "Lunda Norte",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Dundo",
    "municipios" : [  
      {
        "id" : 48,
        "nome" : "Cambulo",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 49,
        "nome" : "Capenda-Camulemba",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 50,
        "nome" : "Chitato",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 51,
        "nome" : "Cuango",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 52,
        "nome" : "Cuílo",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 53,
        "nome" : "Lóvua",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 54,
        "nome" : "Lubalo",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 55,
        "nome" : "Lucapa",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 56,
        "nome" : "Xá-Muteba",
        "provinciaID" : 12,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 13,
		"nome" : "Lunda Sul",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Saurimo",
    "municipios" : [
      {
        "id" : 26,
        "nome" : "Saurimo",
        "provinciaID" : 13,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 27,
        "nome" : "Dala",
        "provinciaID" : 13,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 28,
        "nome" : "Muconda",
        "provinciaID" : 13,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 29,
        "nome" : "Cacolo",
        "provinciaID" : 13,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 14,
		"nome" : "Malange",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Malange",
    "municipios" : [
      {
        "id" : 134,
        "nome" : "Cacuso",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 135,
        "nome" : "Calandula",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 136,
        "nome" : "Cmbundi-Catembo",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 137,
        "nome" : "Cangandala",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 138,
        "nome" : "Caombo",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 139,
        "nome" : "Cuba Nzoji",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 140,
        "nome" : "Cunda-Dia-Baze",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 141,
        "nome" : "Luquembo",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 142,
        "nome" : "Malanje",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 143,
        "nome" : "Marimba",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 144,
        "nome" : "Massango",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 145,
        "nome" : "Mucari",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 146,
        "nome" : "Quela",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 147,
        "nome" : "Quirima",
        "provinciaID" : 14,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 15,
		"nome" : "Moxico",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Luena",
    "municipios" : [
      {
        "id" : 62,
        "nome" : "Alto Zambeze",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 63,
        "nome" : "Bundas",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 64,
        "nome" : "Camanongue",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 65,
        "nome" : "Léua",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 66,
        "nome" : "Luau",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 67,
        "nome" : "Luacano",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 68,
        "nome" : "Luchazes",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 69,
        "nome" : "Cameia",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 70,
        "nome" : "Moxico",
        "provinciaID" : 15,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 16,
		"nome" : "Namibe",
		"datecreated" : null,
    "dateupdated" : null,
    "municipios" : [
      {
        "id" : 57,
        "nome" : "Bibala",
        "provinciaID" : 16,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 58,
        "nome" : "Camucuio",
        "provinciaID" : 16,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 59,
        "nome" : "Moçâmedes",
        "provinciaID" : 16,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 60,
        "nome" : "Tômbua",
        "provinciaID" : 16,
        "datecreated" : null,
        "dateupdated" : null
      },

      {
        "id" : 61,
        "nome" : "Virei",
        "provinciaID" : 16,
        "datecreated" : null,
        "dateupdated" : null
      }
    ], 
    "capital" : "Namibe"
	},
	{
		"id" : 17,
		"nome" : "Uíge",
		"datecreated" : null,
    "dateupdated" : null,
    "capital" : "Uíge",
    "municipios" : [
      {
        "id" : 148,
        "nome" : "Zombo",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 149,
        "nome" : "Quimbele",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 150,
        "nome" : "Damba",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 151,
        "nome" : "Mucaba",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 152,
        "nome" : "Macocola",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 153,
        "nome" : "Bembe",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 154,
        "nome" : "Songo",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 155,
        "nome" : "Bengas",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 156,
        "nome" : "Sanza",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 157,
        "nome" : "Pombo",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 158,
        "nome" : "Ambuíla",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 159,
        "nome" : "Uíge",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 160,
        "nome" : "Negage",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 161,
        "nome" : "Puri",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 162,
        "nome" : "Alto Cuale",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      },
      {
        "id" : 163,
        "nome" : "Quitexe",
        "provinciaID" : 17,
        "datecreated" : null,
        "dateupdated" : null
      }
    ]
	},
	{
		"id" : 18,
		"nome" : "Zaire",
		"datecreated" : null,
    "dateupdated" : null,
    "municipios" : [
      {
        "id" : 20,
        "nome" : "Cuimba",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 21,
        "nome" : "Mabanza Congo",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 22,
        "nome" : "Nóqui",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 23,
        "nome" : "Nezeto",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 24,
        "nome" : "Soio",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      },
    
      {
        "id" : 25,
        "nome" : "Tomboco",
        "provinciaID" : 18,
        "datecreated" : null,
        "dateupdated" : null
      }
    ], 
    "capital" : "Mbanza Congo"
	}
];

module.exports = router;