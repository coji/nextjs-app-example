import { EntryList } from '@/components/entry-list'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
} from '@/components/ui'
import { Label } from '@radix-ui/react-dropdown-menu'
import { createPost } from './actions'

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <header className="border-b px-4 py-2">
        <h1 className="text-xl font-bold">Next.js App Router Example</h1>
      </header>

      <main className="bg-slate-100 px-4 py-2">
        <Card>
          <CardHeader>
            <CardTitle>Create a post.</CardTitle>
            <CardDescription>
              Fill out the form below to create a new post.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EntryList />

            <form action={createPost} className="grid grid-cols-1 gap-4">
              <div>
                <Label>Title</Label>
                <Input name="title" />
              </div>

              <div>
                <Label>Content</Label>
                <Textarea name="content" />
              </div>
              <Button type="submit">Create Post</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
