"use client"
import UsersNav from "../../components/UsersNav"
import UsersEditList from "@/features/users/UserEditList"

export default function Users() {
  
    return (
      <div>
        <UsersNav /> 
        <UsersEditList/>
      </div>
      
    )
  }