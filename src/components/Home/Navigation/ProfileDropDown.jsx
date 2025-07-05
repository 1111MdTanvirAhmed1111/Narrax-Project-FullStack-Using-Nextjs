'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"




export default function ProfileDropDown({children}){

    const {data:session} = useSession()

console.log(session)

    return(<DropdownMenu>
  <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
{/* <Avatar>
  <AvatarImage src={image} />
  <AvatarFallback>{name}</AvatarFallback>
</Avatar>        
<span>{name}</span>
<span>{email}</span> */}

    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    )
}