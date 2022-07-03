"use strict";

const players = [
  {
    Alias: "DOG",
    QualifierScore: "944,269",
  },
  {
    Alias: "HUFFULUFUGUS",
    QualifierScore: "948,920",
  },
  {
    Alias: "JOSEPH",
    QualifierScore: "989,680",
  },
  {
    Alias: "PIXELANDY",
    QualifierScore: "973,493",
  },
  {
    Alias: "RICHY",
    QualifierScore: "994,920",
  },
  {
    Alias: "TRISTOP",
    QualifierScore: "997,420",
  },
  {
    Alias: "NENU",
    QualifierScore: "987,700",
  },
  {
    Alias: "TETRSTIME",
    QualifierScore: "928,020",
  },
  {
    Alias: "ASTA",
    QualifierScore: "964,580",
  },
  {
    Alias: "MEME",
    QualifierScore: "880,880",
  },
  {
    Alias: "EREN",
    QualifierScore: "996,520",
  },
  {
    Alias: "SODIUM",
    QualifierScore: "985,340",
  },
  {
    Alias: "LUIS",
    QualifierScore: "999,460",
  },
  {
    Alias: "FRACTAL",
    QualifierScore: "756,440",
  },
  {
    Alias: "POKENERD",
    QualifierScore: "991,980",
  },
  {
    Alias: "BENJY",
    QualifierScore: "963,980",
  },
  {
    Alias: "MARQ",
    QualifierScore: "932,284",
  },
  {
    Alias: "KORYAN",
    QualifierScore: "955,400",
  },
  {
    Alias: "MYLES",
    QualifierScore: "990,700",
  },
  {
    Alias: "JERPIDUDE",
    QualifierScore: "981,420",
  },
  {
    Alias: "CHEEZ",
    QualifierScore: "999,540",
  },
  {
    Alias: "RHUBARB",
    QualifierScore: "969,840",
  },
  {
    Alias: "HYDRANT",
    QualifierScore: "990,300",
  },
  {
    Alias: "RICARDO",
    QualifierScore: "953,074",
  },
  {
    Alias: "ALEX T",
    QualifierScore: "990,913",
  },
  {
    Alias: "BEN",
    QualifierScore: "943,296",
  },
  {
    Alias: "SIDNEV",
    QualifierScore: "964,081",
  },
  {
    Alias: "STONE",
    QualifierScore: "869,840",
  },
  {
    Alias: "MOJA",
    QualifierScore: "973,260",
  },
  {
    Alias: "DMJ",
    QualifierScore: "970,460",
  },
  {
    Alias: "ERICICX",
    QualifierScore: "973,060",
  },
  {
    Alias: "DAN V.",
    QualifierScore: "876,760",
  },
  {
    Alias: "KOFI",
    QualifierScore: "997,360",
  },
  {
    Alias: "GREENTEA",
    QualifierScore: "941,101",
  },
  {
    Alias: "JESPER",
    QualifierScore: "932,760",
  },
  {
    Alias: "REDSHURT",
    QualifierScore: "874,640",
  },
  {
    Alias: "DOGE",
    QualifierScore: "950,980",
  },
  {
    Alias: "LAZER",
    QualifierScore: "974,676",
  },
  {
    Alias: "CLOCKWRKR",
    QualifierScore: "994,000",
  },
  {
    Alias: "SAM FINCH",
    QualifierScore: "934,120",
  },
  {
    Alias: "NEVANATOR",
    QualifierScore: "997,420",
  },
  {
    Alias: "ODINN",
    QualifierScore: "994,935",
  },
  {
    Alias: "DAASIANN",
    QualifierScore: "963,520",
  },
  {
    Alias: "ELLA",
    QualifierScore: "999,800",
  },
  {
    Alias: "IAN",
    QualifierScore: "732,340",
  },
  {
    Alias: "MELONSODA",
    QualifierScore: "958,640",
  },
  {
    Alias: "ADAMMTS",
    QualifierScore: "974,360",
  },
  {
    Alias: "NERDZZZZZ",
    QualifierScore: "995,412",
  },
  {
    Alias: "BLAU",
    QualifierScore: "966,260",
  },
  {
    Alias: "NIGHT",
    QualifierScore: "885,780",
  },
  {
    Alias: "MCRACC",
    QualifierScore: "916,860",
  },
  {
    Alias: "TERENCE Y",
    QualifierScore: "999,240",
  },
  {
    Alias: "GUERRERO",
    QualifierScore: "960,285",
  },
  {
    Alias: "YEEZY",
    QualifierScore: "976,842",
  },
  {
    Alias: "TUGI",
    QualifierScore: "917,708",
  },
  {
    Alias: "B14NK",
    QualifierScore: "907,960",
  },
  {
    Alias: "SCOTTO",
    QualifierScore: "995,359",
  },
  {
    Alias: "LONGBOY",
    QualifierScore: "983,567",
  },
  {
    Alias: "COBALT",
    QualifierScore: "944,440",
  },
  {
    Alias: "QUAID",
    QualifierScore: "975,579",
  },
  {
    Alias: "IBALL1",
    QualifierScore: "906,280",
  },
  {
    Alias: "TSUKI",
    QualifierScore: "979,516",
  },
  {
    Alias: "VALOR",
    QualifierScore: "983,420",
  },
  {
    Alias: "BRIGHTON",
    QualifierScore: "994,409",
  },
  {
    Alias: "SUPRMINES",
    QualifierScore: "967,913",
  },
  {
    Alias: "TOBIGH3",
    QualifierScore: "966,392",
  },
  {
    Alias: "XENO",
    QualifierScore: "868,580",
  },
  {
    Alias: "DRACO",
    QualifierScore: "947,955",
  },
  {
    Alias: "VISCHER",
    QualifierScore: "877,160",
  },
  {
    Alias: "JOSHUA",
    QualifierScore: "962,900",
  },
  {
    Alias: "OSCAR",
    QualifierScore: "873,200",
  },
  {
    Alias: "ANOMALOUS",
    QualifierScore: "993,054",
  },
  {
    Alias: "ZOMBEK",
    QualifierScore: "854,640",
  },
  {
    Alias: "HEPPS",
    QualifierScore: "881,120",
  },
  {
    Alias: "MATT M",
    QualifierScore: "976,483",
  },
  {
    Alias: "ALEJO",
    QualifierScore: "998,564",
  },
  {
    Alias: "WING",
    QualifierScore: "967,513",
  },
  {
    Alias: "SV",
    QualifierScore: "996,700",
  },
  {
    Alias: "ELIWA",
    QualifierScore: "966,540",
  },
  {
    Alias: "MAX",
    QualifierScore: "975,251",
  },
  {
    Alias: "PHAMTOM",
    QualifierScore: "970,680",
  },
  {
    Alias: "MECEX",
    QualifierScore: "966,418",
  },
  {
    Alias: "SVAVAR",
    QualifierScore: "945,220",
  },
  {
    Alias: "JOHJOH",
    QualifierScore: "890,480",
  },
  {
    Alias: "YUSIF",
    QualifierScore: "932,180",
  },
  {
    Alias: "DEEWEE",
    QualifierScore: "985,072",
  },
  {
    Alias: "C.BRADY",
    QualifierScore: "989,371",
  },
  {
    Alias: "BUUUCOOOO",
    QualifierScore: "970,056",
  },
  {
    Alias: "JORDAN",
    QualifierScore: "959,020",
  },
  {
    Alias: "SCAMPER9",
    QualifierScore: "894,320",
  },
  {
    Alias: "ZACK",
    QualifierScore: "900,080",
  },
  {
    Alias: "DMSY",
    QualifierScore: "770,540",
  },
  {
    Alias: "ANTHONY",
    QualifierScore: "976,280",
  },
  {
    Alias: "MORKOS",
    QualifierScore: "959,680",
  },
  {
    Alias: "AUR9",
    QualifierScore: "868,560",
  },
  {
    Alias: "SHARKY",
    QualifierScore: "984,175",
  },
  {
    Alias: "NOLAN",
    QualifierScore: "961,760",
  },
  {
    Alias: "LMAO",
    QualifierScore: "961,354",
  },
  {
    Alias: "JOEY",
    QualifierScore: "966,533",
  },
  {
    Alias: "NOEL",
    QualifierScore: "834,520",
  },
  {
    Alias: "JONESY",
    QualifierScore: "868,232",
  },
  {
    Alias: "PEYTON",
    QualifierScore: "834,660",
  },
  {
    Alias: "COLIN",
    QualifierScore: "868,524",
  },
  {
    Alias: "HEZZULI",
    QualifierScore: "924,985",
  },
  {
    Alias: "SQR",
    QualifierScore: "901,309",
  },
  {
    Alias: "JOACOZEP",
    QualifierScore: "881,700",
  },
  {
    Alias: "TIM WONG",
    QualifierScore: "906,760",
  },
  {
    Alias: "3ARRETT",
    QualifierScore: "917,660",
  },
  {
    Alias: "BILL H",
    QualifierScore: "955,300",
  },
  {
    Alias: "OBELEX",
    QualifierScore: "859,760",
  },
  {
    Alias: "SMOOTH",
    QualifierScore: "925,792",
  },
  {
    Alias: "HIDERI",
    QualifierScore: "856,846",
  },
  {
    Alias: "666_TIM",
    QualifierScore: "849,158",
  },
  {
    Alias: "N0MORI",
    QualifierScore: "845,360",
  },
  {
    Alias: "KIRBY",
    QualifierScore: "892,060",
  },
  {
    Alias: "HAVEN",
    QualifierScore: "908,440",
  },
  {
    Alias: "BEASTIN",
    QualifierScore: "948,392",
  },
  {
    Alias: "REED",
    QualifierScore: "837,563",
  },
  {
    Alias: "FOILED",
    QualifierScore: "904,100",
  },
  {
    Alias: "BISBY",
    QualifierScore: "939,860",
  },
  {
    Alias: "SALVO",
    QualifierScore: "864,780",
  },
  {
    Alias: "PETER L",
    QualifierScore: "875,929",
  },
  {
    Alias: "JAPORTO",
    QualifierScore: "944,620",
  },
  {
    Alias: "MICETRO",
    QualifierScore: "837,700",
  },
  {
    Alias: "TEBANOKU",
    QualifierScore: "942,420",
  },
  {
    Alias: "LOUIE",
    QualifierScore: "868,380",
  },
  {
    Alias: "RIZZ1010",
    QualifierScore: "860,938",
  },
  {
    Alias: "LU OUYANG",
    QualifierScore: "946,520",
  },
  {
    Alias: "BEN M",
    QualifierScore: "896,848",
  },
  {
    Alias: "GIO",
    QualifierScore: "950,432",
  },
  {
    Alias: "THESCHOOL",
    QualifierScore: "901,014",
  },
  {
    Alias: "AVGEEK",
    QualifierScore: "866,180",
  },
  {
    Alias: "MADDY!",
    QualifierScore: "859,970",
  },
  {
    Alias: "GRAND",
    QualifierScore: "841,160",
  },
  {
    Alias: "FOUAD Z",
    QualifierScore: "834,088",
  },
  {
    Alias: "BETASTREP",
    QualifierScore: "832,488",
  },
  {
    Alias: "ALEX K",
    QualifierScore: "831,820",
  },
  {
    Alias: "MENDION",
    QualifierScore: "825,060",
  },
  {
    Alias: "IANKEITH",
    QualifierScore: "823,720",
  },
  {
    Alias: "YAMIR",
    QualifierScore: "819,476",
  },
  {
    Alias: "JEFF",
    QualifierScore: "814,190",
  },
  {
    Alias: "ULFORCE",
    QualifierScore: "812,560",
  },
  {
    Alias: "GDUDGE",
    QualifierScore: "809,010",
  },
  {
    Alias: "JOHANN",
    QualifierScore: "807,900",
  },
  {
    Alias: "BRIAN",
    QualifierScore: "801,540",
  },
  {
    Alias: "BIRB",
    QualifierScore: "799,220",
  },
  {
    Alias: "ALEX_H",
    QualifierScore: "798,360",
  },
  {
    Alias: "ELPAILTEM",
    QualifierScore: "792,400",
  },
  {
    Alias: "JUSTOLIVE",
    QualifierScore: "787,510",
  },
  {
    Alias: "JAZZIE",
    QualifierScore: "784,000",
  },
  {
    Alias: "TIMOTHY K",
    QualifierScore: "782,800",
  },
  {
    Alias: "MADROMAN",
    QualifierScore: "780,600",
  },
  {
    Alias: "ROBIN M",
    QualifierScore: "777,714",
  },
  {
    Alias: "GUNTER",
    QualifierScore: "777,320",
  },
  {
    Alias: "JEEZ",
    QualifierScore: "774,280",
  },
  {
    Alias: "OLDTAPPER",
    QualifierScore: "771,932",
  },
  {
    Alias: "PACKIE",
    QualifierScore: "771,528",
  },
  {
    Alias: "MO",
    QualifierScore: "765,740",
  },
  {
    Alias: "MEL",
    QualifierScore: "760,740",
  },
  {
    Alias: "VINCE",
    QualifierScore: "752,751",
  },
  {
    Alias: "GIZMO4487",
    QualifierScore: "747,969",
  },
  {
    Alias: "SKIP",
    QualifierScore: "746,380",
  },
  {
    Alias: "POLLO",
    QualifierScore: "730,533",
  },
  {
    Alias: "SCOUT",
    QualifierScore: "729,380",
  },
  {
    Alias: "MICHU",
    QualifierScore: "718,333",
  },
  {
    Alias: "HEIST",
    QualifierScore: "709,140",
  },
  {
    Alias: "JOHN WONG",
    QualifierScore: "708,980",
  },
  {
    Alias: "NOWI",
    QualifierScore: "693,240",
  },
  {
    Alias: "DARTH",
    QualifierScore: "689,160",
  },
  {
    Alias: "KING",
    QualifierScore: "669,736",
  },
  {
    Alias: "AKGMB",
    QualifierScore: "668,135",
  },
  {
    Alias: "Z WING",
    QualifierScore: "658,351",
  },
  {
    Alias: "MIL0-",
    QualifierScore: "655,463",
  },
  {
    Alias: "JAKEY",
    QualifierScore: "655,276",
  },
  {
    Alias: "ANNA D",
    QualifierScore: "651,512",
  },
  {
    Alias: "DG",
    QualifierScore: "643,160",
  },
  {
    Alias: "PISSARSE",
    QualifierScore: "642,898",
  },
  {
    Alias: "ANDREW D",
    QualifierScore: "640,050",
  },
  {
    Alias: "DEAN",
    QualifierScore: "621,389",
  },
  {
    Alias: "RYAN W",
    QualifierScore: "614,604",
  },
  {
    Alias: "RYENW/ANE",
    QualifierScore: "588,536",
  },
  {
    Alias: "CWIEK",
    QualifierScore: "586,940",
  },
  {
    Alias: "BIGGIE",
    QualifierScore: "586,832",
  },
  {
    Alias: "MATT S",
    QualifierScore: "567,102",
  },
  {
    Alias: "MICHAEL",
    QualifierScore: "566,060",
  },
  {
    Alias: "VANDY",
    QualifierScore: "562,040",
  },
  {
    Alias: "DIGGS",
    QualifierScore: "555,180",
  },
  {
    Alias: "MATTH",
    QualifierScore: "552,740",
  },
  {
    Alias: "ZARCONE",
    QualifierScore: "544,480",
  },
  {
    Alias: "YOBI",
    QualifierScore: "517,320",
  },
  {
    Alias: "RAFAEL",
    QualifierScore: "511,680",
  },
  {
    Alias: "CBAS",
    QualifierScore: "506,140",
  },
  {
    Alias: "FORYST",
    QualifierScore: "504,001",
  },
  {
    Alias: "SNWGLFGAL",
    QualifierScore: "501,300",
  },
  {
    Alias: "JAWS",
    QualifierScore: "493,300",
  },
  {
    Alias: "ADAMCORN",
    QualifierScore: "491,080",
  },
  {
    Alias: "TWEAK",
    QualifierScore: "486,488",
  },
  {
    Alias: "SAMUEL",
    QualifierScore: "479,047",
  },
  {
    Alias: "MINRTYLER",
    QualifierScore: "468,680",
  },
  {
    Alias: "PARADIGM",
    QualifierScore: "457,046",
  },
  {
    Alias: "SIRMASER",
    QualifierScore: "443,184",
  },
  {
    Alias: "BSG4000",
    QualifierScore: "430,927",
  },
  {
    Alias: "ARBARO",
    QualifierScore: "359,820",
  },
  {
    Alias: "RETROGUY",
    QualifierScore: "301,905",
  },
  {
    Alias: "UNCLEMIKE",
    QualifierScore: "290,735",
  },
  {
    Alias: "ALG857",
    QualifierScore: "215,564",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const playerDetails = await queryInterface.sequelize
      .query(`SELECT * FROM "PlayerDetails";`)
      .then(async (results) => {
        const playerList = results[0];
        let insertlist = [];
        players.forEach((player) => {
          let playerid = playerList.filter((Player) => {
            return Player.alias == player.Alias;
          })[0];
          playerid != undefined
            ? insertlist.push({
                seederId: 1,
                playerId: playerid.id,
                score: player.QualifierScore.slice(0, 3).concat(
                  player.QualifierScore.slice(4, 7),
                ),
              })
            : false;
        });
        await queryInterface.bulkInsert("QualifyingScores", insertlist);
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
