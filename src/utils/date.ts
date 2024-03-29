import dayjs from "dayjs";

//! Validate the time and hour from dayjs


export function validateTime(time: string){
  return dayjs(formatDateHour(time)).isValid();
}

export function formatDateHour(time: string){
   const date = dayjs().format("YYYY-MM-DD"); //4-14-2023

   const dateTimeFormat = new Date(`${date} ${time}`); //4-14-2023 20:50
   return dayjs(dateTimeFormat)
}

export function compareEndTimeIsAfter(startTime: string, endTime: string){
   return formatDateHour(endTime).isAfter(formatDateHour(startTime));
}