import React from 'react'
import Matrix from './Matrix.jsx';
import Stack from './Stack.jsx';
import Header from "./Header.jsx"

import "./Header.css"

const fetchUser=[
  {
      "firebase_id": "firebaseid1",
      "developer_email": "dev1@example.com",
      "pseudo": "dev1",
      "first_name": "John",
      "last_name": "Doe",
      "points": 100,
      "xp": 500,
      "rank": 5,
      "position": 1,
      "tech_stack": {
          "backend": [
              "Node.js",
              "Express"
          ],
          "frontend": [
              "React",
              "CSS"
          ]
      },
      "description": "Je suis un développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications web.",
      "available": 1,
      "cv": {
          "education": [
              {
                  "degree": "B.Sc. in Computer Science",
                  "institution": "Université de Paris"
              },
              {
                  "degree": "M.Sc. in Software Engineering",
                  "institution": "Université de Montréal"
              }
          ],
          "experience": [
              {
                  "company": "Startup XYZ",
                  "duration": "2 ans",
                  "position": "Développeur web"
              },
              {
                  "company": "Entreprise ABC",
                  "duration": "3 ans",
                  "position": "Développeur Full-stack"
              }
          ]
      },
      "role": "Full-stack"
  }
]

const Cover = () => {


    return (
        <div>
          <Header fetchUser={fetchUser}/>
       
        <Matrix/>
        <Stack fetchUser= {fetchUser}/>
        </div>
      );
    }


export default Cover
