import React from 'react'

interface IProps {
    text: string;
    max: number;
}
export function textSlice({text,max=50}:IProps)  {
if(text.length<=max)  return `${text.slice(0,max)}`
 return text;
}

