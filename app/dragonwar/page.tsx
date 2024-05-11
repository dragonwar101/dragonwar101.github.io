"use client"
import { Firestore, collection, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database, app } from "@/configs/firebase"
interface ISkill extends Record<string, any> {
  name: string;
  rate: 1|2|3|4|5;
}
const Page = () => {
  const [skills, setSkills] = useState<Record<string, any>[]>([])
  const [record, setRecord] = useState<ISkill>({name: "", rate: 1})
  useEffect(() => {
    console.log(collection(database, 'portfolio.skills'));
    
    
  }, [])
  return (
    <>
      <input value={record.name} />
      <input type="button" value={record.name} />
    </>
  );
}
 
export default Page;