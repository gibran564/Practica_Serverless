
import UserCard from "./Components/usercard";
import NotesPicker from './Components/NotePicker'
import Notes from './Components/Notes'


export default function Home() {
  return (
  <main className="h-[92vh] md:h-[95vh] grid grid-cols-12">
    <section className="col-span-2 dark:bg-[212135] bg-white p-8 rounded-2xl m-5 w-max">
      <UserCard 
      title="Tareas" 
      username="Mark Solem" 
      imageUrl="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?t=st=1713887304~exp=1713890904~hmac=6d1926e1db41d5e88c6be1b7421d64e97c7e4db632386d0bca1264e4269ade4e&w=740"/>
    </section>
    <section className="col-span-10  bg-[a18bff]">
    <NotesPicker />
      <Notes />
    </section>
  </main>
  );
}
