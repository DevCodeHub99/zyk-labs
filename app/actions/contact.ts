
'use server'

/**
 * Server Action for handling contact form submissions.
 * This can be extended to send emails (Resend), store in DB (Prisma), or forward to Formspree.
 */
export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const category = formData.get('category')
  const budget = formData.get('budget')
  const message = formData.get('message')

  // Validation
  if (!name || (name as string).length < 2) {
    return { status: 'error', message: 'Name is too short.' }
  }
  if (!email || !(email as string).includes('@')) {
    return { status: 'error', message: 'Invalid email address.' }
  }
  if (!message || (message as string).length < 10) {
    return { status: 'error', message: 'Message is too short.' }
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  console.log('Form submission received:', { name, email, category, budget, message })

  // Integration Point: Add Resend or Formspree logic here
  /*
  const response = await fetch("https://formspree.io/f/" + process.env.FORMSPREE_ID, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
  */

  return { 
    status: 'success', 
    message: 'Engineering brief received. We will respond within 24 hours.' 
  }
}
