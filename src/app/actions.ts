'use server'
import { prisma } from '@/lib/prisma'
import { parseWithZod } from '@conform-to/zod'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
const schema = z.object({
  title: z.string(),
  content: z.string(),
})

export const createPost = async (formData: FormData) => {
  const submission = parseWithZod(formData, { schema })
  console.log(submission)
  if (submission.status !== 'success') {
    return null
  }

  const ret = await prisma.entry.create({
    data: { ...submission.value },
  })
  revalidatePath('/')
  console.log(ret)
  //  redirect('/')
}
