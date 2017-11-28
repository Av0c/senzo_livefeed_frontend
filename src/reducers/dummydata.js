export const navigationDummyData ={
  "id": 10,
  "name": "company",
  "parent": 0,
  "children": [
    {
      "id": 11,
      "name": "Berlin",
      "parent": 10,
      "children": [
        {
          "id": 12,
          "name": "Office floor",
          "parent": 11,
          "children": [],
          "areas": [
            {
              "id": 9,
              "name": "Cafe",
              "sensors": null
            },
            {
              "id": 10,
              "name": "Workspace",
              "sensors": null
            }
          ]
        }
      ],
      "areas": []
    },
    {
      "id": 1,
      "name": "Helsinki",
      "parent": 10,
      "children": [
        {
          "id": 3,
          "name": "8th Floor",
          "parent": 1,
          "children": [],
          "areas": [
            {
              "id": 1,
              "name": "Futucafe",
              "sensors": null
            },
            {
              "id": 2,
              "name": "It-wing",
              "sensors": null
            },
            {
              "id": 3,
              "name": "Business-wing",
              "sensors": null
            }
          ]
        },
        {
          "id": 5,
          "name": "casual",
          "parent": 1,
          "children": [],
          "areas": [
            {
              "id": 5,
              "name": "roundtable",
              "sensors": null
            }
          ]
        },
        {
          "id": 2,
          "name": "7th Floor",
          "parent": 1,
          "children": [],
          "areas": [
            {
              "id": 4,
              "name": "Project room 1",
              "sensors": null
            },
            {
              "id": 8,
              "name": "Project room 2",
              "sensors": null
            }
          ]
        }
      ],
      "areas": []
    }
  ],
  "areas": []
};

export const overviewDummyData = {
  "totalSensors": 110,
  "quarterlyUtilization": 0.50,
  "previousQuarterUtilization": 0.21,
  "lowUtilizedAreas": null
}
