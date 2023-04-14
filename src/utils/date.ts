import dayjs from "dayjs";

//! Validate the time and hour from dayjs


function validateTime(time: string){

}

function formatDateHour(time: string){
   const date = dayjs().format("YYYY-MM-DD"); //4-14-2023

   const dateTimeFormat = new Date(`${date} ${time}`); //4-14-2023 20:50
}