import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProfileProps {
  name: string
  workspace: string
  image?: string
  initial?: string
}

export function UserProfile({ name, workspace, image, initial }: UserProfileProps) {
  const avatarInitial = initial || name.charAt(0)

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-12 w-12 bg-teal-500 text-white">
        {image ? <AvatarImage src={image || "/placeholder.svg"} alt={name} /> : null}
        <AvatarFallback>{avatarInitial}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{workspace}</span>
      </div>
    </div>
  )
}
