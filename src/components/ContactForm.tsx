import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Form = { name: string; email: string; message: string }

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<Form>()
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: Form) => {
    setIsSubmitting(true)
    setResult("")

    const formData = new FormData()
    formData.append("access_key", "14617185-4915-4a15-9d07-a6a7df2a3107")
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("message", data.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const responseData = await response.json()

      if (responseData.success) {
        setResult("Message sent successfully! ✓")
        reset()
      } else {
        setResult("Error sending message. Please try again.")
      }
    } catch (error) {
      setResult("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-xl">
      <input 
        {...register('name', { required: true })} 
        placeholder="Your name" 
        className="w-full rounded-md bg-white/5 p-3 border border-white/10 focus:border-accent focus:outline-none transition"
        disabled={isSubmitting}
      />
      <input 
        {...register('email', { required: true })} 
        type="email"
        placeholder="Your email" 
        className="w-full rounded-md bg-white/5 p-3 border border-white/10 focus:border-accent focus:outline-none transition"
        disabled={isSubmitting}
      />
      <textarea 
        {...register('message', { required: true })} 
        placeholder="Message" 
        rows={4} 
        className="w-full rounded-md bg-white/5 p-3 border border-white/10 focus:border-accent focus:outline-none transition resize-none"
        disabled={isSubmitting}
      />
      <button 
        type="submit"
        className="rounded-md bg-accent px-5 py-3 font-medium hover:bg-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {result && (
        <p className={`text-sm mt-2 ${result.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
          {result}
        </p>
      )}
    </form>
  )
}
