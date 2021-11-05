/**
 * Define data for each year
 */
var chartData = {
    "2009": [

        { "sector": "Mining and Quarrying", "size": 0.6 },
        { "sector": "Manufacturing", "size": 23.2 },
        { "sector": "Electricity and Water", "size": 2.2 },
        { "sector": "Construction", "size": 4.5 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.6 },
        { "sector": "Transport and Communication", "size": 9.3 },
        { "sector": "Finance, real estate and business services", "size": 22.5 }
    ],
    "2010": [

        { "sector": "Mining and Quarrying", "size": 0.5 },
        { "sector": "Manufacturing", "size": 22.4 },
        { "sector": "Electricity and Water", "size": 2 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.8 },
        { "sector": "Transport and Communication", "size": 9.7 },
        { "sector": "Finance, real estate and business services", "size": 22 }
    ],
    "2011": [
        { "sector": "Agriculture", "size": 6.1 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.9 },
        { "sector": "Electricity and Water", "size": 1.8 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 13.7 },
        { "sector": "Transport and Communication", "size": 9.4 },
        { "sector": "Finance, real estate and business services", "size": 22.1 }
    ],
    "2012": [
        { "sector": "Agriculture", "size": 6.2 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 21.4 },
        { "sector": "Electricity and Water", "size": 1.9 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.5 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 23 }
    ],
    "2013": [
        { "sector": "Agriculture", "size": 5.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20 },
        { "sector": "Electricity and Water", "size": 1.8 },
        { "sector": "Construction", "size": 4.4 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.2 },
        { "sector": "Transport and Communication", "size": 10.5 },
        { "sector": "Finance, real estate and business services", "size": 24.7 }
    ],
    "2014": [
        { "sector": "Agriculture", "size": 5.1 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 20.4 },
        { "sector": "Electricity and Water", "size": 1.7 },
        { "sector": "Construction", "size": 4 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 24.6 }
    ],
    "2015": [
        { "sector": "Agriculture", "size": 5.5 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.3 },
        { "sector": "Electricity and Water", "size": 1.6 },
        { "sector": "Construction", "size": 3.1 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 25.8 }
    ],
    "2016": [
        { "sector": "Agriculture", "size": 5.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.5 },
        { "sector": "Electricity and Water", "size": 1.6 },
        { "sector": "Construction", "size": 3.6 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.1 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 26 }
    ],
    "2017": [
        { "sector": "Agriculture", "size": 4.9 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 19.4 },
        { "sector": "Electricity and Water", "size": 1.5 },
        { "sector": "Construction", "size": 3.3 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.2 },
        { "sector": "Transport and Communication", "size": 11 },
        { "sector": "Finance, real estate and business services", "size": 27.5 }
    ],
    "2018": [
        { "sector": "Agriculture", "size": 4.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 18.4 },
        { "sector": "Electricity and Water", "size": 1.4 },
        { "sector": "Construction", "size": 3.3 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.9 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 28.1 }
    ],
    "2019": [
        { "sector": "Agriculture", "size": 4.3 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 18.1 },
        { "sector": "Electricity and Water", "size": 1.4 },
        { "sector": "Construction", "size": 3.9 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.7 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 29.1 }
    ],
    "2020": [
        { "sector": "Agriculture", "size": 4 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 16.5 },
        { "sector": "Electricity and Water", "size": 1.3 },
        { "sector": "Construction", "size": 3.7 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.2 },
        { "sector": "Transport and Communication", "size": 12.1 },
        { "sector": "Finance, real estate and business services", "size": 29.1 }
    ],

};


// Add data
[

    { "sector": "Mining and Quarrying", "size": 0.6 },
    { "sector": "Manufacturing", "size": 23.2 },
    { "sector": "Electricity and Water", "size": 2.2 },
    { "sector": "Construction", "size": 4.5 },
    { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.6 },
    { "sector": "Transport and Communication", "size": 9.3 },
    { "sector": "Finance, real estate and business services", "size": 22.5 }
]