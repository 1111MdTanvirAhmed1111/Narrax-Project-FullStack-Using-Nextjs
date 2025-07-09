'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import Image from "next/image"
import { createPost } from "@/actions/postActions"
import { ImageInput } from '@/components/Universal/ImageInput';


function CreateDialog({ children }) {
  const { data: session } = useSession()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [visibility, setVisibility] = useState<"public" | "private">("public")

  if (!session) {
    return null
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages(files)

    // Create preview URLs
    const previewUrls = files.map((file) => URL.createObjectURL(file))
    setPreviews(previewUrls)

    // Clean up preview URLs
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url))
    }
  }



  return (

    <div className="bg-black z-50">
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
  <ScrollArea className="h-[80vh]">
          <form method="POST" action={createPost.bind(null, session?.user?.id)} className="space-y-4 mr-4">
            <DialogHeader>
              <DialogTitle className="text-center">Create Post</DialogTitle>
              <DialogDescription>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={session.user?.image} />
                    <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <span className="font-semibold">{session.user?.name}</span>
                    <p className="text-sm text-gray-500">@{session.user?.username}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {visibility.charAt(0).toUpperCase() + visibility.slice(1)}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        
                      <DropdownMenuItem onClick={() => setVisibility("public")}>
                        Public
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setVisibility("private")}>
                        Private
                      </DropdownMenuItem>

                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Short description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <textarea
                  id="content"
                  className="w-full min-h-[100px] p-2 border rounded-md resize-none"
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                />
              </div>
             <input type="file" name="image" accept="image/*" required />
              
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Post</Button>
            </DialogFooter>
          </form>

</ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateDialog