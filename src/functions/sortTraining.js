import converterDate from './converterDate.js'

export default function sortTraining () {

    const array = [
        {
          id: 1,
          timestamp: "13.02.2021",
          distance: 5.7,
        },
        {
          id: 2,
          timestamp: "14.02.2021",
          distance: 14.2,
        },
        {
          id: 3,
          timestamp: "15.02.2021",
          distance: 3.4,
        },
      ];
      console.log(array)

      array.map((object) => {

        console.log(object)
        return object}
      )
    //let date = new Date(converterDate(array.timestamp)).getTime();
    //array.map((o) => {o.timestamp
       // console.log(o)
   // }

   // )


/*
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    */
}