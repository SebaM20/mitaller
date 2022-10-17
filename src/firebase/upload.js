import React from 'react'
import { firebaseStorage } from './config';
import { ref, uploadBytesResumable, listAll } from "firebase/storage"

export const upload = (file) => {
if (!file) {
  alert ("Please choose a file first!")
}
 const storageRef = ref(firebaseStorage, /files/${file.name})
  return (
    <div> </div>
  )
}
