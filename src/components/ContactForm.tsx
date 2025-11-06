import { useForm } from 'react-hook-form'
import { LINKS } from '../config/links'

type Form = { name:string; email:string; message:string }
export default function ContactForm(){
  const { register, handleSubmit, reset } = useForm<Form>()
  const onSubmit = (data:Form) => {
    const subject = `Portfolio Inquiry from ${data.name}`
    const body = `${data.message}\n\nContact: ${data.email}`
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-xl">
      <input {...register('name',{required:true})} placeholder="Your name" className="w-full rounded-md bg-white/5 p-3"/>
      <input {...register('email',{required:true})} placeholder="Your email" className="w-full rounded-md bg-white/5 p-3"/>
      <textarea {...register('message',{required:true})} placeholder="Message" rows={4} className="w-full rounded-md bg-white/5 p-3"/>
      <button className="rounded-md bg-accent px-5 py-3 font-medium">Send Message</button>
    </form>
  )
}
