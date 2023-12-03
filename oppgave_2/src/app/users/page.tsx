"use client"
import UsersList from "@/features/users/UsersList"
import UsersNav from "../../components/UsersNav"

export default function Users() {
  
    return (
      <div>
        <UsersNav /> 
        <UsersList/>
      </div>
      
    )
  }