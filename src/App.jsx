import React from 'react'
import Card from './components/Card';
// as
const App = () => {
  const users = [
    {
      name: "Vikas Kanojiya",
      city: "Nashik",
      age: 24,
      profession: "Web Developer",
      profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Riya Sharma",
      city: "Pune",
      age: 22,
      profession: "UI/UX Designer",
      profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Amit Deshmukh",
      city: "Mumbai",
      age: 26,
      profession: "Software Tester",
      profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Sneha Patil",
      city: "Nagpur",
      age: 25,
      profession: "React Developer",
      profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Rahul Verma",
      city: "Indore",
      age: 27,
      profession: "Backend Developer",
      profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ];


  return (
    <>
    <div className='p-10'>
    
    {users.map(function(elem,idx){
        return <Card key={idx} name={elem.name} 
                     city={elem.city}
                     age={elem.age} 
                     profession={elem.profession}
                     profilepic={elem.profilePhoto}/>
    })}
       </div>            
    </>
  )
}

export default App