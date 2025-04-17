import React from 'react'
import { EventCard } from './event-card'

export const PublicEventsHandler = () => {
  return (
    <div className='w-full overflow-x-auto shadow-lg bg-white p-4 rounded-md'>
      <div className=' inline-flex space-x-4     max-w-255'>
        <EventCard  title= "Yves's Weddding" id='1' description='wedding ceremony of Muhizi yves maurice' location='Kigali, Nyamirambo' date={new Date('2023-10-15')} isPrivate={true} imageUrl='https://img.freepik.com/free-photo/closeup-shot-wedding-rings-with-background-beautiful-red-roses-candles-table_181624-33523.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740'/>
        <EventCard  title= "Yves's Weddding" id='1' description='wedding ceremony of Muhizi yves maurice' location='Kigali, Nyamirambo' date={new Date('2023-10-15')} isPrivate={true} imageUrl='https://img.freepik.com/free-photo/closeup-shot-wedding-rings-with-background-beautiful-red-roses-candles-table_181624-33523.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740'/>
        <EventCard  title= "Yves's Weddding" id='1' description='wedding ceremony of Muhizi yves maurice' location='Kigali, Nyamirambo' date={new Date('2023-10-15')} isPrivate={false} imageUrl='https://img.freepik.com/free-photo/closeup-shot-wedding-rings-with-background-beautiful-red-roses-candles-table_181624-33523.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740'/>
        <EventCard  title= "Yves's Weddding" id='1' description='wedding ceremony of Muhizi yves maurice' location='Kigali, Nyamirambo' date={new Date('2023-10-15')} isPrivate={true} imageUrl='https://img.freepik.com/free-photo/closeup-shot-wedding-rings-with-background-beautiful-red-roses-candles-table_181624-33523.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740'/>
        <EventCard  title= "Yves's Weddding" id='1' description='wedding ceremony of Muhizi yves maurice' location='Kigali, Nyamirambo' date={new Date('2023-10-15')} isPrivate={false} imageUrl='https://img.freepik.com/free-photo/closeup-shot-wedding-rings-with-background-beautiful-red-roses-candles-table_181624-33523.jpg?uid=R196195147&ga=GA1.1.534869810.1744706868&semt=ais_hybrid&w=740'/>    
    </div>
    </div>
  )
}
